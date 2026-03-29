import { Brain, BarChart3, Eye, Cpu } from "lucide-react";

const services = [
  { icon: Brain, title: "ML Model Development", desc: "End-to-end machine learning solutions from data collection to deployment." },
  { icon: BarChart3, title: "Data Analysis & Visualization", desc: "Transform raw data into actionable insights with compelling visuals." },
  { icon: Eye, title: "Computer Vision Solutions", desc: "Image and video analysis systems for real-time detection and recognition." },
  { icon: Cpu, title: "AI Application Development", desc: "Building intelligent applications powered by cutting-edge AI technologies." },
];

const ServicesSection = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container">
        <div className="text-center mb-12">
          <p className="section-label">Services</p>
          <h2 className="section-title mt-2">What I Can Do</h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s) => (
            <div key={s.title} className="glass-card p-6 text-center hover:-translate-y-1 transition-transform duration-300">
              <div className="w-14 h-14 rounded-xl gradient-hero flex items-center justify-center mx-auto mb-4">
                <s.icon className="text-primary-foreground" size={28} />
              </div>
              <h3 className="font-heading font-semibold text-foreground mb-2">{s.title}</h3>
              <p className="text-sm text-muted-foreground">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
