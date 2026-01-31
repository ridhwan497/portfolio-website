import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen pt-20 flex items-center relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-32 right-10 w-32 h-32 bg-accent border-brutal rotate-12 opacity-60" />
      <div className="absolute bottom-40 left-10 w-24 h-24 bg-secondary border-brutal -rotate-6 opacity-60" />
      <div className="absolute top-1/2 right-1/4 w-16 h-16 bg-primary border-brutal rotate-45 opacity-40" />

      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="brutal-tag animate-slide-up">
                Software Engineer
              </div>
              <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold leading-none animate-slide-up stagger-1">
                RIDWAN
                <br />
                <span className="text-stroke">FARHAN</span>
              </h1>
              <p className="text-lg md:text-xl max-w-lg animate-slide-up stagger-2">
                Building <span className="bg-accent px-2 font-bold">robust</span> software 
                solutions with clean code and 
                <span className="bg-secondary text-secondary-foreground px-2 font-bold"> creative</span> problem-solving.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 animate-slide-up stagger-3">
              <a href="#projects" className="brutal-button">
                View Projects
              </a>
              <a href="#contact" className="brutal-button-secondary">
                Get In Touch
              </a>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 animate-slide-up stagger-4">
              <a
                href="https://github.com/ridhwan497"
                target="_blank"
                rel="noopener noreferrer"
                className="brutal-box-hover p-3"
              >
                <Github size={24} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="brutal-box-hover p-3"
              >
                <Linkedin size={24} />
              </a>
              <a href="mailto:riabdullahi@usiu.ac.ke" className="brutal-box-hover p-3">
                <Mail size={24} />
              </a>
            </div>
          </div>

          {/* Visual Element */}
          <div className="relative animate-slide-up stagger-2">
            <div className="brutal-box p-8 rotate-slight-pos">
              <div className="bg-foreground text-background p-6 font-mono text-sm">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-3 h-3 bg-destructive rounded-full" />
                  <div className="w-3 h-3 bg-accent rounded-full" />
                  <div className="w-3 h-3 bg-muted rounded-full" />
                </div>
                <pre className="overflow-x-auto">
{`const engineer = {
  name: "Ridwan Farhan",
  title: "Software Engineer",
  skills: [
    "Java", "Python",
    "Flutter", "Spring Boot"
  ],
  passion: "Building systems",
  coffee: true
};`}
                </pre>
              </div>
            </div>
            
            {/* Floating badges */}
            <div className="absolute -top-4 -right-4 brutal-tag bg-primary text-primary-foreground rotate-12 animate-float">
              AVAILABLE FOR HIRE
            </div>
            <div className="absolute -bottom-4 -left-4 brutal-tag bg-secondary text-secondary-foreground -rotate-6">
              USIU STUDENT
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <a href="#about" className="brutal-box p-3 block">
            <ArrowDown size={24} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
