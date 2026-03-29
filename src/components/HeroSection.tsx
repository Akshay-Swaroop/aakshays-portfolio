import profileImg from "@/assets/profile.jpg";
import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-16 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-72 h-72 rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full bg-secondary/10 blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-accent/50 blur-3xl" />
      </div>

      <div className="container grid md:grid-cols-2 gap-12 items-center">
        {/* Text */}
        <div className="space-y-6 animate-fade-in-up">
          <p className="section-label">👋 Hello, I'm</p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-extrabold leading-tight text-foreground">
            Akshay A
          </h1>
          <p className="text-lg md:text-xl text-primary font-heading font-semibold">
            Data Science & AI Enthusiast | ML Engineer
          </p>
          <p className="max-w-lg leading-relaxed text-sm font-serif text-muted-foreground border-secondary">
            Passionate about solving real-world problems using data-driven approaches. Specializing in Data Science, Machine Learning, Deep Learning , Computer Vision and Data Analysis.
          </p>

          <div className="flex flex-wrap gap-4 pt-2">
            <Button asChild className="gradient-cta border-0 text-secondary-foreground hover:opacity-90 px-6">
              <a href="#projects">View Projects</a>
            </Button>
            <Button asChild variant="outline" className="border-primary text-primary hover:bg-accent px-6">
              <a href="#contact">Contact Me</a>
            </Button>
          </div>

          {/* Socials */}
          <div className="flex items-center gap-4 pt-4">
            <a href="https://github.com/akshayswaroop1112" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-muted text-muted-foreground hover:text-primary hover:bg-accent transition-colors">
              <Github size={20} />
            </a>
            <a href="https://linkedin.com/in/akshayarjampudi" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-muted text-muted-foreground hover:text-primary hover:bg-accent transition-colors">
              <Linkedin size={20} />
            </a>
            <a href="mailto:akshayswaroop678@gmail.com" className="p-2 rounded-full bg-muted text-muted-foreground hover:text-primary hover:bg-accent transition-colors">
              <Mail size={20} />
            </a>
          </div>
        </div>

        {/* Image */}
        <div className="relative flex justify-center" style={{ animationDelay: "0.2s" }}>
          <div className="relative w-72 h-72 md:w-96 md:h-96">
            <div className="absolute inset-0 gradient-hero rounded-full animate-float opacity-20" />
            <img
              src={profileImg}
              alt="Akshay A - Data Science & AI Enthusiast"
              width={512}
              height={512}
              className="relative z-10 w-full h-full object-cover object-top rounded-full border-4 border-primary/20 shadow-2xl"
            />
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <a href="#about" className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-muted-foreground">
        <ArrowDown size={24} />
      </a>
    </section>
  );
};

export default HeroSection;
