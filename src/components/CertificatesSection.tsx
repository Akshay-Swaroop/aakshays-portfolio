import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Award } from "lucide-react";

import certPython from "@/assets/cert-python.png";
import certAndroid from "@/assets/cert-android.jpeg";
import certNetworking from "@/assets/cert-networking.jpeg";
import certHtml5 from "@/assets/cert-html5.jpeg";
import certHtmlCss from "@/assets/cert-html-css.jpeg";
import certHardware from "@/assets/cert-hardware.jpeg";
import certNetworkComm from "@/assets/cert-network-comm.jpeg";
import certProblemSolving from "@/assets/cert-problem-solving.jpeg";
import certWellbeing from "@/assets/cert-wellbeing.jpeg";

const certificates = [
  {
    title: "Advanced Python Programming",
    issuer: "Innomatics Research Labs",
    date: "2025",
    image: certPython,
  },
  {
    title: "Android Developer Virtual Internship",
    issuer: "AICTE",
    date: "2023",
    image: certAndroid,
  },
  {
    title: "Networking and Web Technology",
    issuer: "Infosys",
    date: "2025",
    image: certNetworking,
  },
  {
    title: "HTML5 - The Language",
    issuer: "Infosys",
    date: "2025",
    image: certHtml5,
  },
  {
    title: "HTML and CSS in Depth",
    issuer: "Meta",
    date: "2023",
    image: certHtmlCss,
  },
  {
    title: "Hardware and Operating Systems",
    issuer: "IBM",
    date: "2023",
    image: certHardware,
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
