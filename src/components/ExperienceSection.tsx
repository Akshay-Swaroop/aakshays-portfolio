import { Briefcase } from "lucide-react";

const experiences = [
  {
    role: "Data Science Intern",
    company: "Innomatics Research Labs",
    period: "Aug 2025",
    points: [
      "Data preprocessing, EDA, and visualization",
      "ML model development & evaluation",
      "Real-world dataset analysis and insights",
    ],
  },
  {
    role: "Android Developer Intern (Virtual)",
    company: "Virtual Internship",
    period: "Sep 2023 – Nov 2023",
    points: [
      "Android app development using Java",
      "UI design, API integration",
      "Testing & debugging",
    ],
  },
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-20 bg-muted/30">
      <div className="container">
        <div className="text-center mb-12">
          <p className="section-label">Experience</p>
          <h2 className="section-title mt-2">My Professional Journey</h2>
        </div>

        <div className="max-w-2xl mx-auto space-y-8">
          {experiences.map((exp, i) => (
            <div key={i} className="glass-card p-6 relative pl-16">
              <div className="absolute left-5 top-6 w-8 h-8 rounded-full gradient-hero flex items-center justify-center">
                <Briefcase className="text-primary-foreground" size={16} />
              </div>
              <div className="flex flex-wrap items-baseline gap-2 mb-1">
                <h3 className="font-heading font-semibold text-foreground">{exp.role}</h3>
                <span className="text-xs bg-accent text-accent-foreground px-2 py-0.5 rounded-full">{exp.period}</span>
              </div>
              <p className="text-sm text-primary font-medium mb-3">{exp.company}</p>
              <ul className="space-y-1 text-sm text-muted-foreground">
                {exp.points.map((p, j) => (
                  <li key={j} className="flex gap-2">
                    <span className="text-secondary mt-1">•</span>
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
