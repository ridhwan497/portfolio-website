import { motion } from "framer-motion";
import { Mail, Phone, Github, FileText, Code, Coffee, Rocket, Zap } from "lucide-react";
import { Link } from "react-router-dom";

const AboutSection = () => {
  const contactInfo = [
    { icon: Mail, label: "Email", value: "ridhwan.farhan.developer@gmail.com", href: "mailto:ridhwan.farhan.developer@gmail.com" },
    { icon: Phone, label: "Phone", value: "+254 716 664 576", href: "tel:+254716664576" },
    { icon: Github, label: "GitHub", value: "github.com/ridhwan497", href: "https://github.com/ridhwan497" },
  ];

  const highlights = [
    { icon: Code, label: "Clean Code", description: "Maintainable, scalable solutions" },
    { icon: Rocket, label: "Fast Learner", description: "Quick to adapt to new tech" },
    { icon: Coffee, label: "Problem Solver", description: "Complex challenges, elegant answers" },
    { icon: Zap, label: "Performance", description: "Optimized for speed" },
  ];

  const skills = [
    { category: "Languages", items: ["Java", "Python", "Dart", "C/C++", "Golang"], color: "bg-primary" },
    { category: "Frameworks", items: ["Spring Boot", "Flutter", "JavaFX", "WebRTC"], color: "bg-secondary" },
    { category: "Tools", items: ["Git", "Linux", "PostgreSQL", "MySQL", "Figma"], color: "bg-accent" },
  ];

  return (
    <section id="about" className="py-24 bg-secondary/20">
      <div className="container mx-auto px-4">
        {/* Section Header */}
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
          {/* Bio Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="lg:col-span-2 space-y-6"
          >
            <div className="brutal-box p-6 rotate-slight">
              <p className="text-lg leading-relaxed">
                Hey there! I'm a <span className="bg-primary text-primary-foreground px-2 font-bold">Software Engineering</span> student 
                at USIU-Africa with a passion for building digital products that make a difference. I love turning complex 
                problems into simple, elegant solutions.
              </p>
            </div>
            <div className="brutal-box p-6 -rotate-slight">
              <p className="text-lg leading-relaxed">
                Currently working as a <span className="bg-secondary text-secondary-foreground px-2 font-bold">Software Engineer Intern</span> at 
                Nova Care Center, while also contributing to AI research for African languages. Always eager to learn 
                new technologies and take on challenging projects.
              </p>
            </div>

            {/* Highlights Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {highlights.map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * index }}
                  className="brutal-box-hover p-4 text-center"
                >
                  <item.icon className="mx-auto mb-2 text-primary" size={28} />
                  <h4 className="font-bold text-sm uppercase">{item.label}</h4>
                  <p className="text-xs text-foreground/70 mt-1">{item.description}</p>
                </motion.div>
              ))}
            </div>

            {/* Skills */}
            <div className="space-y-4">
              <h3 className="font-display text-2xl font-bold">
                <span className="bg-foreground text-card px-3 py-1">MY TOOLKIT</span>
              </h3>
              <div className="grid md:grid-cols-3 gap-4">
                {skills.map((skillGroup, groupIndex) => (
                  <motion.div
                    key={skillGroup.category}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 * groupIndex }}
                    className="brutal-box p-4"
                  >
                    <h4 className="font-bold uppercase mb-3 flex items-center gap-2">
                      <span className={`w-3 h-3 ${skillGroup.color}`} />
                      {skillGroup.category}
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {skillGroup.items.map((skill) => (
                        <span
                          key={skill}
                          className={`${skillGroup.color} ${groupIndex === 2 ? 'text-accent-foreground' : 'text-primary-foreground'} border-brutal text-xs px-2 py-1 font-bold`}
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

          {/* Contact Column */}
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
                      <div className="font-bold text-sm group-hover:text-primary transition-colors">
                        {item.value}
                      </div>
                    </div>
                  </a>
                ))}

                {/* CV Link */}
                <Link
                  to="/cv"
                  className="brutal-button-secondary w-full flex items-center justify-center gap-2"
                >
                  <FileText size={20} />
                  View Full CV
                </Link>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-2 mt-6">
                <div className="bg-primary text-primary-foreground border-brutal p-3 text-center">
                  <div className="font-display text-2xl font-bold">4+</div>
                  <div className="text-[10px] uppercase">Projects</div>
                </div>
                <div className="bg-secondary text-secondary-foreground border-brutal p-3 text-center">
                  <div className="font-display text-2xl font-bold">2+</div>
                  <div className="text-[10px] uppercase">Years</div>
                </div>
                <div className="bg-accent text-accent-foreground border-brutal p-3 text-center">
                  <div className="font-display text-2xl font-bold">∞</div>
                  <div className="text-[10px] uppercase">Coffee</div>
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
