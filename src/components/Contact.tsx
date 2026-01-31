import { useState } from "react";
import { Send, Mail, MapPin, Phone } from "lucide-react";
import { toast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent! 🎉",
      description: "Thanks for reaching out. I'll get back to you soon!",
    });
    setFormData({ name: "", email: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="py-24 bg-card">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <span className="brutal-tag bg-primary text-primary-foreground mb-4 inline-block">
            Contact
          </span>
          <h2 className="font-display text-4xl md:text-6xl font-bold">
            LET'S <span className="text-stroke">TALK</span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-xl mx-auto">
            Got a project in mind? Let's build something amazing together.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-6">
            <div className="brutal-box p-6 rotate-slight">
              <h3 className="font-display text-2xl font-bold mb-6">
                <span className="bg-secondary text-secondary-foreground px-3 py-1">GET IN TOUCH</span>
              </h3>
              
              <div className="space-y-4">
                <a href="mailto:riabdullahi@usiu.ac.ke" className="brutal-box-hover p-4 flex items-center gap-4">
                  <div className="bg-primary text-primary-foreground p-3">
                    <Mail size={24} />
                  </div>
                  <div>
                    <div className="font-bold uppercase text-sm">Email</div>
                    <div>riabdullahi@usiu.ac.ke</div>
                  </div>
                </a>

                <div className="brutal-box p-4 flex items-center gap-4">
                  <div className="bg-secondary text-secondary-foreground p-3">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <div className="font-bold uppercase text-sm">Location</div>
                    <div>Nairobi, Kenya</div>
                  </div>
                </div>

                <a href="tel:+254716664576" className="brutal-box-hover p-4 flex items-center gap-4">
                  <div className="bg-accent text-accent-foreground p-3">
                    <Phone size={24} />
                  </div>
                  <div>
                    <div className="font-bold uppercase text-sm">Phone</div>
                    <div>(+254) 716 664 576</div>
                  </div>
                </a>
              </div>
            </div>

            {/* Availability Badge */}
            <div className="brutal-box p-6 bg-muted text-muted-foreground -rotate-slight">
              <div className="flex items-center gap-3">
                <div className="w-4 h-4 bg-green-500 rounded-full animate-pulse" />
                <span className="font-bold uppercase">Open to Internships & Projects</span>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="brutal-box p-8 -rotate-slight">
            <div className="space-y-6">
              <div>
                <label htmlFor="name" className="block font-bold uppercase mb-2 text-sm">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="John Doe"
                  className="brutal-input w-full"
                />
              </div>

              <div>
                <label htmlFor="email" className="block font-bold uppercase mb-2 text-sm">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="john@example.com"
                  className="brutal-input w-full"
                />
              </div>

              <div>
                <label htmlFor="message" className="block font-bold uppercase mb-2 text-sm">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  placeholder="Tell me about your project..."
                  className="brutal-input w-full resize-none"
                />
              </div>

              <button type="submit" className="brutal-button w-full flex items-center justify-center gap-2">
                <Send size={18} />
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
