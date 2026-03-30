import { motion } from "framer-motion";
import { Mail, Phone, Github, FileText } from "lucide-react";
import { Link } from "react-router-dom";

const AboutSection = () => {
  const contactInfo = [
    { icon: Mail, label: "Email", value: "ridhwan.farhan.developer@gmail.com", href: "mailto:ridhwan.farhan.developer@gmail.com" },
    { icon: Phone, label: "Phone", value: "+254 716 664 576", href: "tel:+254716664576" },
    { icon: Github, label: "GitHub", value: "github.com/ridhwan497", href: "https://github.com/ridhwan497" },
  ];

  const skills = [
    {
      category: "Languages",
      items: ["Java", "Python", "C/C++", "Go", "JavaScript", "Dart"],
      color: "bg-primary",
      textColor: "text-primary-foreground",
    },
    {
      category: "Frameworks & Libraries",
      items: ["Spring Boot", "JavaFX", "Flutter", "Riverpod", "JWT"],
      color: "bg-secondary",
      textColor: "text-secondary-foreground",
    },
    {
      category: "Databases",
      items: ["PostgreSQL", "MySQL", "Firebase Firestore", "H2"],
      color: "bg-accent",
      textColor: "text-accent-foreground",
    },
    {
      category: "Tools & Platforms",
      items: ["Git", "GitHub", "Gradle", "Jenkins", "Postman", "Figma", "WebRTC"],
      color: "bg-primary",
      textColor: "text-primary-foreground",
    },
    {
      category: "Environments",
      items: ["Linux", "Bash", "Zsh", "Vim (Neovim)"],
      color: "bg-secondary",
      textColor: "text-secondary-foreground",
    },
    {
      category: "Networking & Cloud",
      items: ["Networking Fundamentals", "AZ-900 (Certified)", "AZ-500 (In Progress)"],
      color: "bg-accent",
      textColor: "text-accent-foreground",
    },
  ];

  return (
    <section id="about" className="py-24 bg-secondary/20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <span className="brutal-tag bg-secondary text-secondary-foreground mb-4 inline-block">
            About Me
          </span>
          <h2 className="font-display text-4xl md:text-6xl font-bold">
            WHO <span className="text-stroke">AM</span> I?
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Bio + Skills */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="lg:col-span-2 space-y-6"
          >
            <div className="brutal-box p-6 rotate-slight">
              <p className="text-lg leading-relaxed">
                Hey there! I'm a{" "}
                <span className="bg-primary text-primary-foreground px-2 font-bold">Software Engineering</span>{" "}
                student at USIU-Africa and I spend most of my time writing code to solve problems that I encounter.
              </p>
            </div>
            <div className="brutal-box p-6 -rotate-slight">
              <p className="text-lg leading-relaxed">
                I am currently working as a{" "}
                <span className="bg-secondary text-secondary-foreground px-2 font-bold">Software Developer</span>{" "}
                at Nova Care Center. In my previous role I contributed to AI research for African languages. I am always
                finding new things to learn and do projects that feel challenging to me.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="font-display text-2xl font-bold">
                <span className="bg-foreground text-card px-3 py-1">SKILLS</span>
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                {skills.map((skillGroup, groupIndex) => (
                  <motion.div
                    key={skillGroup.category}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.08 * groupIndex }}
                    className="brutal-box p-4"
                  >
                    <h4 className="font-bold uppercase mb-3 flex items-center gap-2 text-sm">
                      <span className={`w-3 h-3 ${skillGroup.color}`} />
                      {skillGroup.category}
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {skillGroup.items.map((skill) => (
                        <span
                          key={skill}
                          className={`${skillGroup.color} ${skillGroup.textColor} border-brutal text-xs px-2 py-1 font-bold`}
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact sidebar */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="space-y-4"
          >
            <div className="brutal-box p-6 bg-card sticky top-24">
              <h3 className="font-display text-xl font-bold mb-6 border-b-4 border-foreground pb-2">
                GET IN TOUCH
              </h3>

              <div className="space-y-4">
                {contactInfo.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    target={item.href.startsWith("http") ? "_blank" : undefined}
                    rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="brutal-box-hover p-4 flex items-center gap-4 group"
                  >
                    <div className="bg-primary text-primary-foreground p-2 border-brutal">
                      <item.icon size={20} />
                    </div>
                    <div>
                      <div className="text-xs uppercase text-foreground/60">{item.label}</div>
                      <div className="font-bold text-sm group-hover:text-primary transition-colors break-all">
                        {item.value}
                      </div>
                    </div>
                  </a>
                ))}

                <Link
                  to="/cv"
                  className="brutal-button-secondary w-full flex items-center justify-center gap-2"
                >
                  <FileText size={20} />
                  View Full CV
                </Link>
              </div>

              {/* Stats — no coffee */}
              <div className="grid grid-cols-2 gap-2 mt-6">
                <div className="bg-primary text-primary-foreground border-brutal p-3 text-center">
                  <div className="font-display text-2xl font-bold">10+</div>
                  <div className="text-[10px] uppercase">Projects</div>
                </div>
                <div className="bg-secondary text-secondary-foreground border-brutal p-3 text-center">
                  <div className="font-display text-2xl font-bold">2+</div>
                  <div className="text-[10px] uppercase">Years Exp</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
