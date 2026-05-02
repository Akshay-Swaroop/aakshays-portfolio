import { ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "Real-Time Facial Emotion Recognition",
    desc: "A real-time system using YOLOv8 + InceptionV3 CNN that detects emotions from video streams with ~74% accuracy through data augmentation techniques.",
    stack: ["YOLOv8", "InceptionV3", "OpenCV", "Python"],
    link: "https://github.com/Akshay-Swaroop/Advance-facial-emotions-detections",
  },
  {
    title: "Emotion Track – Sentiment Analysis",
    desc: "NLP-based emotion classification system with text preprocessing, tokenization, and feature extraction. Presented at academic events.",
    stack: ["NLP", "Python", "Scikit-learn", "NLTK"],
    link: "https://github.com/Akshay-Swaroop/EmotionTrack-SentimentAnalysis",
  },
  {
    title: "Real-Time Object Detection System",
    desc: "YOLOv8 + Flask + OpenCV system achieving 20–30 FPS real-time detection with dynamic model switching and a user-friendly UI.",
    stack: ["YOLOv8", "Flask", "OpenCV", "Python"],
    link: "https://github.com/akshayswaroop1112",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-20">
      <div className="container">
        <div className="text-center mb-12">
          <p className="section-label">Projects</p>
          <h2 className="section-title mt-2">Featured Work</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((proj) => (
            <div key={proj.title} className="glass-card p-6 group hover:-translate-y-1 transition-transform duration-300">
              <div className="w-full h-2 gradient-hero rounded-t-xl -mt-6 -mx-6 mb-5" style={{ width: "calc(100% + 3rem)" }} />
              <h3 className="font-heading font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                {proj.title}
              </h3>
              <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{proj.desc}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {proj.stack.map((t) => (
                  <span key={t} className="text-xs bg-accent text-accent-foreground px-2 py-1 rounded-full font-medium">
                    {t}
                  </span>
                ))}
              </div>
              <Button variant="ghost" size="sm" className="text-primary hover:text-primary/80 p-0 h-auto" asChild>
                <a href={proj.link} target="_blank" rel="noopener noreferrer">
                  View on GitHub <ExternalLink size={14} className="ml-1" />
                </a>
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
