import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, Linkedin, Github, Instagram } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import emailjs from "@emailjs/browser";

const ContactSection = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sending, setSending] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    try {
      await emailjs.send(
        "service_yla5yyv",
        "template_d3v6jqc",
        { from_name: form.name, from_email: form.email, message: form.message },
        "UNtaEwmBvjHYt0bGc"
      );
      toast({ title: "Message sent!", description: "Thanks for reaching out. I'll get back to you soon." });
      setForm({ name: "", email: "", message: "" });
    } catch {
      toast({ title: "Failed to send", description: "Something went wrong. Please try again.", variant: "destructive" });
    } finally {
      setSending(false);
    }
  };

  return (
    <section id="contact" className="py-20">
      <div className="container">
        <div className="text-center mb-12">
          <p className="section-label">Contact</p>
          <h2 className="section-title mt-2">Got A Project? Let's Talk</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          {/* Info */}
          <div className="space-y-6">
            <p className="text-muted-foreground leading-relaxed">
              I'm always open to new opportunities and collaborations. Feel free to reach out!
            </p>
            <div className="space-y-4">
              {[
                { icon: Mail, label: "akshayswaroop678@gmail.com", href: "mailto:akshayswaroop678@gmail.com" },
                { icon: Phone, label: "+91 9392161112", href: "tel:+919392161112" },
                { icon: Linkedin, label: "LinkedIn", href: "https://linkedin.com/in/akshayarjampudi" },
                { icon: Github, label: "GitHub", href: "https://github.com/akshayswaroop1112" },
                { icon: Instagram, label: "its._.me._akshay_", href: "https://instagram.com/its._.me._akshay_" },
              ].map((c) => (
                <a key={c.label} href={c.href} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors">
                  <div className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center">
                    <c.icon size={18} className="text-accent-foreground" />
                  </div>
                  <span className="text-sm">{c.label}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="glass-card p-6 space-y-4">
            <Input
              placeholder="Your Name"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              required
            />
            <Input
              type="email"
              placeholder="Your Email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              required
            />
            <Textarea
              placeholder="Your Message"
              rows={5}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              required
            />
            <Button type="submit" disabled={sending} className="w-full gradient-cta border-0 text-secondary-foreground hover:opacity-90">
              {sending ? "Sending..." : "Send Message"}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
