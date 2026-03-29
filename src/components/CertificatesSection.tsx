import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Award } from "lucide-react";

const certificates = [
  {
    title: "Certificate Title 1",
    issuer: "Issuing Organization",
    date: "2025",
    image: "/placeholder.svg",
  },
  {
    title: "Certificate Title 2",
    issuer: "Issuing Organization",
    date: "2025",
    image: "/placeholder.svg",
  },
  {
    title: "Certificate Title 3",
    issuer: "Issuing Organization",
    date: "2024",
    image: "/placeholder.svg",
  },
];

const CertificatesSection = () => {
  return (
    <section id="certificates" className="py-20">
      <div className="container">
        <div className="text-center mb-12">
          <p className="section-label">Certificates</p>
          <h2 className="section-title mt-2">My Certifications</h2>
        </div>

        <div className="max-w-3xl mx-auto">
          <Carousel opts={{ align: "center", loop: true }} className="w-full">
            <CarouselContent>
              {certificates.map((cert, index) => (
                <CarouselItem key={index} className="md:basis-1/1">
                  <div className="glass-card p-4 space-y-3">
                    <div className="aspect-video rounded-lg overflow-hidden bg-accent/50 flex items-center justify-center">
                      <img
                        src={cert.image}
                        alt={cert.title}
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <div className="flex items-center gap-2">
                      <Award size={18} className="text-primary" />
                      <h3 className="font-heading font-semibold text-foreground">{cert.title}</h3>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      {cert.issuer} • {cert.date}
                    </p>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex" />
            <CarouselNext className="hidden md:flex" />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default CertificatesSection;
