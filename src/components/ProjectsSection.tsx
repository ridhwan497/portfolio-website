import { motion } from "framer-motion";
import { Github, ExternalLink, Power } from "lucide-react";
import { useState } from "react";

interface Project {
  title: string;
  description: string;
  tags: string[];
  videoPlaceholder: string;
  videoUrl?: string;
  github: string;
  color: string;
}

const ProjectsSection = () => {
  const projects: Project[] = [
    {
      title: "Platform Agnostic File Sharing System (PAFSS)",
      description:
        "Peer-to-peer file sharing system using Flutter with full cross-platform support. WebRTC-based communication for direct, real-time file transfers. Uses Java threads for parallel transfers instead of sequential processing.",
      tags: ["Flutter", "Dart", "WebRTC", "P2P", "Java Threads"],
      videoPlaceholder: "📁",
      videoUrl: "/videos/paffs.mp4",
      github: "https://github.com/ridhwan497",
      color: "bg-primary",
    },
    {
      title: "Multi-Tenant Property Management System",
      description:
        "Database-per-tenant backend with dynamic PostgreSQL database creation. JWT authentication with tenant routing and role-based access control. Core modules: Tickets, Payments, Announcements, User Management.",
      tags: ["PostgreSQL", "JWT", "Spring Boot", "JPA"],
      videoPlaceholder: "🏢",
      videoUrl: "/videos/domus.mp4",
      github: "https://github.com/ridhwan497",
      color: "bg-secondary",
    },
    {
      title: "Online Examination System",
      description:
        "Java-based examination system with a JavaFX client and Spring Boot backend. Secure login, timed exams, and auto-submission to prevent cheating. H2 for testing, MySQL for production via Spring profiles.",
      tags: ["Java", "JavaFX", "Spring Boot", "MySQL", "H2"],
      videoPlaceholder: "📝",
      github: "https://github.com/ridhwan497",
      color: "bg-accent",
    },
    {
      title: "RTFM Helper",
      description:
        "Tool to streamline access to technical documentation, reducing lookup time for developers. Efficient text processing and retrieval using Python, NLTK, and BeautifulSoup. Automates manual documentation searches.",
      tags: ["Python", "NLTK", "BeautifulSoup", "NLP"],
      videoPlaceholder: "📚",
      github: "https://github.com/ridhwan497",
      color: "bg-primary",
    },
  ];

  return (
    <section id="projects" className="py-24 bg-primary/20">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-4"
        >
          <div>
            <span className="brutal-tag bg-primary text-primary-foreground mb-4 inline-block">
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
            className="brutal-button-secondary flex items-center gap-2"
          >
            <Github size={20} />
            View All on GitHub
          </a>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectTVCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

interface ProjectTVCardProps {
  project: Project;
  index: number;
}

const ProjectTVCard = ({ project, index }: ProjectTVCardProps) => {
  const [isTvOn, setIsTvOn] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.1 * index }}
      className={`brutal-box-hover ${index % 2 === 0 ? "rotate-slight" : "-rotate-slight"}`}
    >
      {/* TV Frame */}
      <div className="bg-foreground p-4 border-b-0">
        {/* Top bar */}
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-destructive border border-card/20" />
            <div className="w-3 h-3 rounded-full bg-accent border border-card/20" />
            <div className="w-3 h-3 rounded-full bg-muted border border-card/20" />
          </div>
          <div className="text-card text-xs font-mono uppercase tracking-wider">
            Project {String(index + 1).padStart(2, "0")}
          </div>
          <button
            onClick={() => setIsTvOn(!isTvOn)}
            className={`p-1 rounded transition-colors ${isTvOn ? "text-primary" : "text-card/60 hover:text-card"}`}
            aria-label={isTvOn ? "Turn TV off" : "Turn TV on"}
          >
            <Power size={16} />
          </button>
        </div>

        {/* Screen */}
        <div
          className={`${project.color} aspect-video flex items-center justify-center relative border-4 border-card/20 overflow-hidden`}
        >
          {isTvOn ? (
            project.videoUrl ? (
              <video
                src={project.videoUrl}
                className="w-full h-full object-cover"
                controls
                autoPlay
                loop
                muted
                playsInline
              />
            ) : (
              <>
                <span className="text-7xl md:text-8xl animate-bounce">{project.videoPlaceholder}</span>
                <div className="absolute inset-0 pointer-events-none opacity-10">
                  {[...Array(20)].map((_, i) => (
                    <div key={i} className="h-[5%] bg-foreground/20" />
                  ))}
                </div>
              </>
            )
          ) : (
            <div className="flex flex-col items-center justify-center text-card bg-foreground/90 absolute inset-0">
              <span className="font-display text-4xl md:text-5xl font-bold mb-2">
                <span className="text-primary">&lt;</span>
                RF
                <span className="text-secondary">/</span>
                <span className="text-primary">&gt;</span>
              </span>
              <span className="text-xs uppercase tracking-wider text-card/70 flex items-center gap-2">
                <Power size={12} />
                Click power to watch
              </span>
            </div>
          )}
        </div>

        {/* Speaker grille */}
        <div className="flex gap-1 mt-3 justify-center">
          {[...Array(12)].map((_, i) => (
            <div key={i} className="w-2 h-1 bg-card/30 rounded-full" />
          ))}
        </div>
      </div>

      {/* Project Info */}
      <div className="p-6 space-y-4">
        <h3 className="font-display text-xl md:text-2xl font-bold">{project.title}</h3>
        <p className="text-foreground/80 text-sm leading-relaxed">{project.description}</p>

        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="bg-accent text-accent-foreground border-brutal text-xs px-2 py-1 font-bold uppercase"
            >
              {tag}
            </span>
          ))}
        </div>

        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="brutal-button-secondary w-full flex items-center justify-center gap-2 text-sm"
        >
          <Github size={18} />
          View Source Code
          <ExternalLink size={14} />
        </a>
      </div>
    </motion.div>
  );
};

export default ProjectsSection;
