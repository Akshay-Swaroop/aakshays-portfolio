import { GraduationCap, Target, Lightbulb } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container">
        <div className="text-center mb-12">
          <p className="section-label">About Me</p>
          <h2 className="section-title mt-2">Designing Solutions, Not Just Visuals</h2>
        </div>

        <div className="max-w-3xl mx-auto space-y-6 text-muted-foreground leading-relaxed text-center">
          <p>
            I'm Akshay A, a dedicated Data Science and AI enthusiast with a strong foundation in computer science.
            Currently pursuing my Master's in Computer Applications (AI & Data Science) at SRM University (2025–2027),
            I hold a Bachelor's in Computer Applications from Gitam University (2022–2025).
          </p>
          <p>
            My passion lies in leveraging Machine Learning, Deep Learning, Computer Vision, and NLP to tackle
            real-world challenges. I believe in continuous learning and pushing the boundaries of what's possible with data.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mt-14">
          {[
            {
              icon: GraduationCap,
              title: "MCA – AI & Data Science",
              desc: "SRM University (2025–2027)",
            },
            {
              icon: Target,
              title: "BCA – Computer Science",
              desc: "Gitam University (2022–2025)",
            },
            {
              icon: Lightbulb,
              title: "Passion for Innovation",
              desc: "Building AI-powered solutions for real-world impact",
            },
          ].map((item) => (
            <div key={item.title} className="glass-card p-6 text-center">
              <div className="w-12 h-12 rounded-lg gradient-hero flex items-center justify-center mx-auto mb-4">
                <item.icon className="text-primary-foreground" size={24} />
              </div>
              <h3 className="font-heading font-semibold text-foreground mb-1">{item.title}</h3>
              <p className="text-sm text-muted-foreground">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
