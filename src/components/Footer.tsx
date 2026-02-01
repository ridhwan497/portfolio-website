import { Github, Linkedin, Twitter, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* Logo */}
          <div>
            <span className="font-display text-3xl font-bold">
              <span className="text-primary">&lt;</span>
              RF
              <span className="text-secondary">/</span>
              <span className="text-primary">&gt;</span>
            </span>
            <p className="mt-2 text-sm opacity-80">
              Building software, one commit at a time.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-4">
            <a
              href="https://github.com/ridhwan497"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-background text-foreground border-4 border-background hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              <Github size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/ridwan-abdullahi-8505b0266/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-background text-foreground border-4 border-background hover:bg-secondary hover:text-secondary-foreground transition-colors"
            >
              <Linkedin size={24} />
            </a>
          </div>

          {/* Copyright */}
          <div className="text-center md:text-right">
            <p className="text-sm">
              Made with <Heart className="inline w-4 h-4 text-destructive" /> in {currentYear}
            </p>
            <p className="text-xs opacity-60 mt-1">
              © Ridwan Farhan. All rights reserved.
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-8 border-t border-background/20 text-center">
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
            <span className="opacity-40">|</span>
            <a href="#" className="hover:text-secondary transition-colors">Terms of Service</a>
            <span className="opacity-40">|</span>
            <a href="#" className="hover:text-accent transition-colors">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
