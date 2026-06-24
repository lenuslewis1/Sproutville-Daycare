const CORS_HEADERS = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "Content-Type",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
};

const FORM_RECIPIENT_EMAIL = "sproutvilledaycare@gmail.com";
const DEFAULT_FROM_EMAIL = "Sproutville Daycare <onboarding@resend.dev>";

export default async (request) => {
  if (request.method === "OPTIONS") {
    return new Response(null, { status: 204, headers: CORS_HEADERS });
  }

  if (request.method !== "POST") {
    return new Response(JSON.stringify({ error: "Method not allowed" }), {
      status: 405,
      headers: { ...CORS_HEADERS, "Content-Type": "application/json" },
    });
  }

  const resendApiKey = process.env.RESEND_API_KEY;
  const configuredFromEmail = process.env.RESEND_FROM_EMAIL || DEFAULT_FROM_EMAIL;
  const fromEmail = configuredFromEmail.includes("@gmail.com")
    ? DEFAULT_FROM_EMAIL
    : configuredFromEmail;

  if (!resendApiKey) {
    return new Response(JSON.stringify({ error: "Missing RESEND_API_KEY" }), {
      status: 500,
      headers: { ...CORS_HEADERS, "Content-Type": "application/json" },
    });
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
      return new Response(JSON.stringify({ error: "Missing required fields" }), {
        status: 400,
        headers: { ...CORS_HEADERS, "Content-Type": "application/json" },
      });
    }

    const subject = "Request a Tour - Sproutville Daycare";
    const text = [
      `Parent Name: ${parentName}`,
      `Child Name: ${childName}`,
      `Child Age: ${childAge}`,
      `Email: ${email}`,
      `Phone: ${phone}`,
      "",
      "Questions/Notes:",
      message || "-",
    ].join("\n");

    const html = `
      <h2>New Tour Request</h2>
      <p><strong>Parent Name:</strong> ${escapeHtml(parentName)}</p>
      <p><strong>Child Name:</strong> ${escapeHtml(childName)}</p>
      <p><strong>Child Age:</strong> ${escapeHtml(childAge)}</p>
      <p><strong>Email:</strong> ${escapeHtml(email)}</p>
      <p><strong>Phone:</strong> ${escapeHtml(phone)}</p>
      <p><strong>Questions/Notes:</strong><br/>${escapeHtml(message || "-").replace(/\n/g, "<br/>")}</p>
    `;

    const resendResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${resendApiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: fromEmail,
        to: [FORM_RECIPIENT_EMAIL],
        reply_to: email,
        subject,
        text,
        html,
      }),
    });

    if (!resendResponse.ok) {
      const errorText = await resendResponse.text();
      return new Response(JSON.stringify({ error: "Resend request failed", details: errorText }), {
        status: 502,
        headers: { ...CORS_HEADERS, "Content-Type": "application/json" },
      });
    }

    return new Response(JSON.stringify({ ok: true }), {
      status: 200,
      headers: { ...CORS_HEADERS, "Content-Type": "application/json" },
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: "Unexpected server error" }), {
      status: 500,
      headers: { ...CORS_HEADERS, "Content-Type": "application/json" },
    });
  }
};

function escapeHtml(value) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}
