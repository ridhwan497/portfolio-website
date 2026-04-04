import { motion, AnimatePresence } from "framer-motion";
import { Send, Mail, Phone, MapPin, Github, Linkedin } from "lucide-react";
import { useState } from "react";

// ---------------------------------------------------------------------------
// HOW TO CONNECT:
// 1. Go to https://formspree.io and create a free account.
// 2. Create a new form and set the destination to ridhwan.farhan.developer@gmail.com
// 3. Copy your form ID (looks like "xbljqkzp") and replace YOUR_FORMSPREE_ID below.
// ---------------------------------------------------------------------------
const FORMSPREE_ID = "xykbwzny";

const ContactSection = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showPlane, setShowPlane] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
        }),
      });

      if (res.ok) {
        setSubmitStatus("success");
        setShowPlane(true);
        setTimeout(() => {
          setShowPlane(false);
          setFormData({ name: "", email: "", message: "" });
        }, 2000);
      } else {
        setSubmitStatus("error");
      }
    } catch {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const contactDetails = [
    {
      icon: Mail,
      label: "Email",
      value: "ridhwan.farhan.developer@gmail.com",
      href: "mailto:ridhwan.farhan.developer@gmail.com",
    },
    { icon: Phone, label: "Phone", value: "+254 716 664 576", href: "tel:+254716664576" },
    { icon: MapPin, label: "Location", value: "Nairobi, Kenya", href: null },
  ];

  const socialLinks = [
    { icon: Github, label: "GitHub", href: "https://github.com/ridhwan497" },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/ridwan-abdullahi-8505b0266/",
    },
    { icon: Mail, label: "Email", href: "mailto:ridhwan.farhan.developer@gmail.com" },
  ];

  return (
    <section id="contact" className="py-24 bg-accent/40">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <span className="brutal-tag bg-accent text-accent-foreground mb-4 inline-block">Contact</span>
          <h2 className="font-display text-4xl md:text-6xl font-bold">
            LET'S <span className="text-stroke">TALK</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <form onSubmit={handleSubmit} className="brutal-box p-8 space-y-6">
              <div>
                <label htmlFor="name" className="block font-bold uppercase text-sm mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="brutal-input w-full"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label htmlFor="email" className="block font-bold uppercase text-sm mb-2">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="brutal-input w-full"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block font-bold uppercase text-sm mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="brutal-input w-full resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>

              {/* Status messages */}
              {submitStatus === "success" && (
                <p className="text-sm font-bold text-secondary bg-secondary/10 border-brutal px-4 py-2">
                  ✓ Message sent! I'll get back to you soon.
                </p>
              )}
              {submitStatus === "error" && (
                <p className="text-sm font-bold text-destructive bg-destructive/10 border-brutal px-4 py-2">
                  ✗ Something went wrong. Try emailing me directly.
                </p>
              )}

              {/* Submit Button */}
              <div className="relative">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="brutal-button w-full flex items-center justify-center gap-3 disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    "Sending..."
                  ) : (
                    <>
                      <Send size={20} />
                      Send Message
                    </>
                  )}
                </button>

                {/* Flying plane animation */}
                <AnimatePresence>
                  {showPlane && (
                    <motion.div
                      initial={{ x: 0, y: 0, rotate: 0, opacity: 1 }}
                      animate={{
                        x: [0, 50, 150, 300],
                        y: [0, -30, -80, -150],
                        rotate: [0, -10, 15, 45],
                        opacity: [1, 1, 1, 0],
                      }}
                      transition={{ duration: 1.5, ease: "easeOut" }}
                      className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
                    >
                      <div className="bg-card border-brutal p-3 shadow-brutal-sm">
                        <Send size={24} className="text-primary" />
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </form>

            <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-secondary/30 border-brutal -z-10 rotate-6" />
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="space-y-6"
          >
            <div className="brutal-box p-8">
              <h3 className="font-display text-2xl font-bold mb-6">
                <span className="bg-foreground text-card px-3 py-1">REACH OUT</span>
              </h3>

              <div className="space-y-4">
                {contactDetails.map((item) => (
                  <div key={item.label}>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="brutal-box-hover p-4 flex items-center gap-4 w-full group"
                      >
                        <div className="bg-primary text-primary-foreground p-3 border-brutal">
                          <item.icon size={24} />
                        </div>
                        <div>
                          <div className="text-xs uppercase text-foreground/60">{item.label}</div>
                          <div className="font-bold group-hover:text-primary transition-colors break-all">
                            {item.value}
                          </div>
                        </div>
                      </a>
                    ) : (
                      <div className="brutal-box p-4 flex items-center gap-4 w-full">
                        <div className="bg-secondary text-secondary-foreground p-3 border-brutal">
                          <item.icon size={24} />
                        </div>
                        <div>
                          <div className="text-xs uppercase text-foreground/60">{item.label}</div>
                          <div className="font-bold">{item.value}</div>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div className="brutal-box p-8">
              <h3 className="font-display text-xl font-bold mb-6">CONNECT WITH ME</h3>
              <div className="flex gap-4">
                {socialLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="brutal-box-hover p-4 flex-1 flex flex-col items-center gap-2 group"
                  >
                    <link.icon size={28} className="group-hover:text-primary transition-colors" />
                    <span className="text-xs font-bold uppercase">{link.label}</span>
                  </a>
                ))}
              </div>
            </div>

            <div className="brutal-box p-6 bg-primary text-primary-foreground text-center rotate-slight-pos">
              <p className="font-bold text-lg mb-2">Ready to work together?</p>
              <p className="text-sm opacity-90">
                Available for freelance projects and full-time opportunities.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
