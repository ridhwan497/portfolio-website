import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const scrollToSection = (sectionId: string) => {
    if (location.pathname !== "/") {
      return;
    }
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-card border-b-4 border-foreground">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link 
            to="/" 
            className="font-display text-2xl font-bold hover:scale-105 transition-transform"
            onClick={closeMobileMenu}
          >
            <span className="text-primary">&lt;</span>
            RF
            <span className="text-secondary">/</span>
            <span className="text-primary">&gt;</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-2">
            {location.pathname === "/" && (
              <>
                <button
                  onClick={() => scrollToSection("about")}
                  className="nav-link-about border-brutal shadow-brutal-sm px-4 py-2 text-sm font-bold uppercase transition-all hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-brutal"
                >
                  About
                </button>
                <button
                  onClick={() => scrollToSection("projects")}
                  className="nav-link-projects border-brutal shadow-brutal-sm px-4 py-2 text-sm font-bold uppercase transition-all hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-brutal"
                >
                  Projects
                </button>
                <button
                  onClick={() => scrollToSection("contact")}
                  className="nav-link-contact border-brutal shadow-brutal-sm px-4 py-2 text-sm font-bold uppercase transition-all hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-brutal"
                >
                  Contact
                </button>
              </>
            )}
            <Link 
              to="/cv" 
              className="nav-link-cv border-brutal shadow-brutal-sm px-4 py-2 text-sm font-bold uppercase transition-all hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-brutal"
            >
              CV
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMobileMenu}
            className="md:hidden brutal-box-hover p-2"
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t-4 border-foreground">
            <div className="flex flex-col gap-2">
              {location.pathname === "/" && (
                <>
                  <button
                    onClick={() => scrollToSection("about")}
                    className="nav-link-about border-brutal shadow-brutal-sm px-4 py-3 text-sm font-bold uppercase w-full text-left"
                  >
                    About
                  </button>
                  <button
                    onClick={() => scrollToSection("projects")}
                    className="nav-link-projects border-brutal shadow-brutal-sm px-4 py-3 text-sm font-bold uppercase w-full text-left"
                  >
                    Projects
                  </button>
                  <button
                    onClick={() => scrollToSection("contact")}
                    className="nav-link-contact border-brutal shadow-brutal-sm px-4 py-3 text-sm font-bold uppercase w-full text-left"
                  >
                    Contact
                  </button>
                </>
              )}
              <Link
                to="/cv"
                className="nav-link-cv border-brutal shadow-brutal-sm px-4 py-3 text-sm font-bold uppercase w-full text-center"
                onClick={closeMobileMenu}
              >
                CV
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
