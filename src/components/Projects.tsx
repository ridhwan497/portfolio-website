import { ExternalLink, Github, ArrowRight } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Platform Agnostic File Sharing (PAFSS)",
      description: "Peer-to-peer file sharing system using Flutter with full cross-platform support. WebRTC-based communication for direct, real-time file transfers without external servers.",
      tags: ["Flutter", "Dart", "WebRTC", "P2P"],
      color: "bg-primary",
      image: "📁",
      github: "https://github.com/ridhwan497",
    },
    {
      title: "Online Examination System",
      description: "Java-based examination system with JavaFX client and Spring Boot backend. Features secure login, timed exams, and auto-submission to prevent cheating.",
      tags: ["Java", "JavaFX", "Spring Boot", "MySQL"],
      color: "bg-secondary",
      image: "📝",
      github: "https://github.com/ridhwan497",
    },
    {
      title: "RTFM Helper",
      description: "Tool to streamline access to technical documentation, reducing lookup time for developers. Efficient text processing and retrieval using Python and NLP.",
      tags: ["Python", "NLTK", "BeautifulSoup", "NLP"],
      color: "bg-muted",
      image: "📚",
      github: "https://github.com/ridhwan497",
    },
    {
      title: "Multi-Tenant Property Management",
      description: "Database-per-tenant backend with dynamic PostgreSQL database creation. JWT authentication with tenant-aware routing and role-based access control.",
      tags: ["PostgreSQL", "JWT", "Spring Boot", "JPA"],
      color: "bg-accent",
      image: "🏢",
      github: "https://github.com/ridhwan497",
    },
  ];

  return (
    <section id="projects" className="py-24">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <span className="brutal-tag bg-secondary text-secondary-foreground mb-4 inline-block">
              Portfolio
            </span>
            <h2 className="font-display text-4xl md:text-6xl font-bold">
              MY <span className="text-stroke">PROJECTS</span>
            </h2>
          </div>
          <a 
            href="https://github.com/ridhwan497" 
            target="_blank" 
            rel="noopener noreferrer"
            className="brutal-button-accent flex items-center gap-2"
          >
            View GitHub <ArrowRight size={18} />
          </a>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className={`brutal-box-hover group ${index % 2 === 0 ? 'rotate-slight' : '-rotate-slight'}`}
            >
              {/* Project Image/Icon Area */}
              <div className={`${project.color} p-12 text-center border-b-4 border-foreground`}>
                <span className="text-8xl">{project.image}</span>
              </div>

              {/* Project Info */}
              <div className="p-6 space-y-4">
                <h3 className="font-display text-2xl font-bold group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground">{project.description}</p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="brutal-tag text-xs">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-4 pt-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="brutal-button text-sm flex items-center gap-2"
                  >
                    <Github size={16} />
                    View Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Marquee */}
        <div className="mt-16 brutal-box py-4 overflow-hidden">
          <div className="marquee">
            <div className="marquee-content">
              {[...Array(2)].map((_, i) => (
                <div key={i} className="flex gap-8 items-center">
                  <span className="font-display text-4xl font-bold">JAVA</span>
                  <span className="text-primary">★</span>
                  <span className="font-display text-4xl font-bold">FLUTTER</span>
                  <span className="text-secondary">★</span>
                  <span className="font-display text-4xl font-bold">SPRING BOOT</span>
                  <span className="text-accent">★</span>
                  <span className="font-display text-4xl font-bold">PYTHON</span>
                  <span className="text-muted">★</span>
                  <span className="font-display text-4xl font-bold">POSTGRESQL</span>
                  <span className="text-primary">★</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
