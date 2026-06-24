const CORS_HEADERS = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "Content-Type",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
};

const FORM_RECIPIENT_EMAIL = "sproutvilledaycare@gmail.com";
const POSTMARK_EMAIL_ENDPOINT = "https://api.postmarkapp.com/email";
const DEFAULT_MESSAGE_STREAM = "outbound";

export default async (request) => {
  if (request.method === "OPTIONS") {
    return new Response(null, { status: 204, headers: CORS_HEADERS });
  }

  if (request.method !== "POST") {
    return jsonResponse({ error: "Method not allowed" }, 405);
  }

  const postmarkServerToken = process.env.POSTMARK_SERVER_TOKEN;
  const fromEmail = process.env.POSTMARK_FROM_EMAIL;
  const messageStream = process.env.POSTMARK_MESSAGE_STREAM || DEFAULT_MESSAGE_STREAM;

  if (!postmarkServerToken || !fromEmail) {
    return jsonResponse({ error: "Postmark is not configured" }, 500);
  }

  try {
    const payload = await request.json();
    const parentName = String(payload.parentName || "").trim();
    const childName = String(payload.childName || "").trim();
    const childAge = String(payload.childAge || "").trim();
    const email = String(payload.email || "").trim();
    const phone = String(payload.phone || "").trim();
    const message = String(payload.message || "").trim();

    if (!parentName || !childName || !childAge || !email || !phone) {
      return jsonResponse({ error: "Missing required fields" }, 400);
    }

    const subject = "Request a Tour - Sproutville Daycare";
    const textBody = [
      `Parent Name: ${parentName}`,
      `Child Name: ${childName}`,
      `Child Age: ${childAge}`,
      `Email: ${email}`,
      `Phone: ${phone}`,
      "",
      "Questions/Notes:",
      message || "-",
    ].join("\n");

    const htmlBody = `
      <h2>New Tour Request</h2>
      <p><strong>Parent Name:</strong> ${escapeHtml(parentName)}</p>
      <p><strong>Child Name:</strong> ${escapeHtml(childName)}</p>
      <p><strong>Child Age:</strong> ${escapeHtml(childAge)}</p>
      <p><strong>Email:</strong> ${escapeHtml(email)}</p>
      <p><strong>Phone:</strong> ${escapeHtml(phone)}</p>
      <p><strong>Questions/Notes:</strong><br/>${escapeHtml(message || "-").replace(/\n/g, "<br/>")}</p>
    `;

    const postmarkResponse = await fetch(POSTMARK_EMAIL_ENDPOINT, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "X-Postmark-Server-Token": postmarkServerToken,
      },
      body: JSON.stringify({
        From: fromEmail,
        To: FORM_RECIPIENT_EMAIL,
        ReplyTo: email,
        Subject: subject,
        TextBody: textBody,
        HtmlBody: htmlBody,
        MessageStream: messageStream,
      }),
    });

    if (!postmarkResponse.ok) {
      const details = await postmarkResponse.text();
      return jsonResponse({ error: "Postmark request failed", details }, 502);
    }

    return jsonResponse({ ok: true }, 200);
  } catch (error) {
    return jsonResponse({ error: "Unexpected server error" }, 500);
  }
};

function jsonResponse(body, status) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { ...CORS_HEADERS, "Content-Type": "application/json" },
  });
}

function escapeHtml(value) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}
