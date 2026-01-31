import { motion } from "framer-motion";
import { ArrowUp, Heart } from "lucide-react";

const FooterSection = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-foreground text-card py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-3xl font-bold"
          >
            <span className="text-primary">&lt;</span>
            RF
            <span className="text-secondary">/</span>
            <span className="text-primary">&gt;</span>
          </motion.div>

          {/* Copyright */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-sm flex items-center gap-2"
          >
            © {new Date().getFullYear()} Ridwan Farhan. Built with
            <Heart size={16} className="text-primary" fill="currentColor" />
          </motion.p>

          {/* Scroll to top */}
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            onClick={scrollToTop}
            className="bg-card text-foreground border-brutal p-3 hover:bg-accent hover:-translate-y-1 transition-all shadow-brutal-sm"
            aria-label="Scroll to top"
          >
            <ArrowUp size={24} />
          </motion.button>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
