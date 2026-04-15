import { FadeIn } from '@/components/ui/FadeIn';
import { Baby, Sun, Palette, Clock } from 'lucide-react';

export function Programs() {
  const programs = [
    {
      title: "Blossom Room",
      age: "3 Months - 2 Years",
      icon: <Baby size={40} className="text-white" />,
      color: "bg-teal-500",
      lightColor: "bg-teal-500/10",
      description: "A calm, nurturing space for our youngest learners, focused on routines, sensory exploration, and key developmental milestones.",
      schedule: "Tummy time, sensory play, communication & language activities, gentle routines."
    },
    {
      title: "Sunshine Room",
      age: "2 - 3 Years",
      icon: <Sun size={40} className="text-white" />,
      color: "bg-orange-500",
      lightColor: "bg-orange-500/10",
      description: "Encouraging curiosity and independence through structured play, physical development, and early literacy activities.",
      schedule: "Story time, outdoor play, arts & crafts, music and movement."
    },
    {
      title: "Rainbow Room",
      age: "3 - 5 Years",
      icon: <Palette size={40} className="text-white" />,
      color: "bg-blue-500",
      lightColor: "bg-blue-500/10",
      description: "Preparing children for school through the EYFS framework — building literacy, numeracy, and social-emotional confidence.",
      schedule: "Circle time, literacy & numeracy centres, creative expression, football & cricket."
    },
    {
      title: "Extended Care",
      age: "Breakfast & After School Clubs",
      icon: <Clock size={40} className="text-white" />,
      color: "bg-purple-500",
      lightColor: "bg-purple-500/10",
      description: "Flexible wrap-around care to support working families, with a warm breakfast or relaxed after-school activities.",
      schedule: "Breakfast Club 6:30 – 7:30 AM · After School Club 6:00 – 7:00 PM"
    }
  ];

  return (
    <section id="programs" className="py-24 md:py-32 bg-background relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="mb-16">
          <FadeIn>
            <h2 className="text-sm font-bold tracking-widest text-secondary uppercase mb-3">Our Rooms & Clubs</h2>
            <h3 className="text-3xl md:text-5xl font-bold text-primary mb-6">A Place for Every Stage of Childhood</h3>
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {programs.map((program, index) => (
            <FadeIn key={program.title} delay={index * 100}>
              <div className="group bg-white rounded-3xl p-8 sm:p-10 border border-border/50 shadow-lg shadow-black/5 hover:shadow-2xl transition-all duration-300 overflow-hidden relative">
                
                {/* Decorative background shape */}
                <div className={`absolute -right-10 -top-10 w-40 h-40 rounded-full ${program.lightColor} group-hover:scale-150 transition-transform duration-500 ease-out`} />
                
                <div className="relative z-10">
                  <div className="flex items-center gap-6 mb-6">
                    <div className={`w-20 h-20 rounded-2xl ${program.color} flex items-center justify-center shadow-lg rotate-3 group-hover:rotate-0 transition-transform duration-300`}>
                      {program.icon}
                    </div>
                    <div>
                      <h4 className="text-2xl font-bold text-primary">{program.title}</h4>
                      <span className="inline-block px-3 py-1 bg-background text-muted-foreground text-sm font-semibold rounded-full mt-2">
                        {program.age}
                      </span>
                    </div>
                  </div>
                  
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {program.description}
                  </p>
                  
                  <div className={`p-4 rounded-2xl ${program.lightColor} border border-white`}>
                    <h5 className="font-bold text-sm uppercase tracking-wider mb-2 text-primary opacity-80">Daily Highlights</h5>
                    <p className="text-sm font-medium text-foreground">{program.schedule}</p>
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
