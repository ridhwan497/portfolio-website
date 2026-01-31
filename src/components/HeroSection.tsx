import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowDown, Github, Linkedin, FileText, Mail } from "lucide-react";

const HeroSection = () => {
  const socialLinks = [
    { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
    { icon: Github, href: "https://github.com/ridhwan497", label: "GitHub" },
    { icon: FileText, href: "/cv", label: "CV", isInternal: true },
  ];

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20 bg-background">
      {/* Decorative background shapes */}
      <div className="absolute top-32 right-10 w-24 h-24 bg-primary/30 border-brutal rotate-12" />
      <div className="absolute bottom-40 left-10 w-20 h-20 bg-secondary/30 border-brutal -rotate-6" />
      <div className="absolute top-1/3 left-1/4 w-12 h-12 bg-accent/50 border-brutal rotate-45" />

      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12 max-w-6xl mx-auto">
          {/* Left Side - Photo and Social Icons */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center"
          >
            {/* Profile Photo */}
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 border-brutal-thick bg-card flex items-center justify-center overflow-hidden shadow-brutal-lg">
                <img 
                  src = "profile.jpg"
                  alt = "Ridhwan Farhan"
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                />
              </div>
            </div>

            {/* Social Icons Below Photo */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="flex items-center gap-4 mt-6"
            >
              {socialLinks.map((link) => (
                link.isInternal ? (
                  <Link
                    key={link.label}
                    to={link.href}
                    className="brutal-box-hover p-3 hover:bg-primary hover:text-primary-foreground transition-colors"
                    aria-label={link.label}
                  >
                    <link.icon size={24} />
                  </Link>
                ) : (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="brutal-box-hover p-3 hover:bg-primary hover:text-primary-foreground transition-colors"
                    aria-label={link.label}
                  >
                    <link.icon size={24} />
                  </a>
                )
              ))}
            </motion.div>

            {/* Available Badge Below Icons */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6, type: "spring" }}
              className="mt-4 bg-primary text-primary-foreground border-brutal px-4 py-2 text-sm font-bold uppercase shadow-brutal-sm"
            >
              Available for Work
            </motion.div>
          </motion.div>

          {/* Right Side - Name and CTA */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center md:text-left space-y-6"
          >
            <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold leading-none">
              RIDWAN
              <br />
              <span className="text-stroke">FARHAN</span>
            </h1>
            
            <div className="brutal-tag bg-secondary text-secondary-foreground text-lg px-6 py-2">
              Software Engineer
            </div>

            {/* Say Hi Button */}
            <motion.a
              href="#contact"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="brutal-button inline-flex items-center gap-3 text-lg mt-6"
            >
              <Mail size={24} />
              Say Hi!
            </motion.a>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.a
          href="#about"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 10, 0] }}
          transition={{ 
            opacity: { delay: 1, duration: 0.5 },
            y: { delay: 1.5, duration: 1.5, repeat: Infinity }
          }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 brutal-box p-3 hover:bg-accent transition-colors"
        >
          <ArrowDown size={24} />
        </motion.a>
      </div>
    </section>
  );
};

export default HeroSection;
