import { Code, Coffee, Rocket, Zap } from "lucide-react";

const About = () => {
  const skills = [
    { category: "Languages", items: ["Java", "Python", "Dart", "C/C++", "Golang"] },
    { category: "Frameworks", items: ["Spring Boot", "Flutter", "JavaFX", "WebRTC", "JWT"] },
    { category: "Tools", items: ["Git/GitHub", "Linux", "PostgreSQL", "MySQL", "Figma", "Jenkins"] },
  ];

  const highlights = [
    { icon: Code, label: "Clean Code", description: "Writing maintainable, scalable solutions" },
    { icon: Rocket, label: "Fast Learner", description: "Quick to adapt to new technologies" },
    { icon: Coffee, label: "Problem Solver", description: "Tackling complex challenges head-on" },
    { icon: Zap, label: "Performance", description: "Optimized for speed and efficiency" },
  ];

  return (
    <section id="about" className="py-24 bg-card">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="mb-16">
          <span className="brutal-tag bg-accent text-accent-foreground mb-4 inline-block">
            About Me
          </span>
          <h2 className="font-display text-4xl md:text-6xl font-bold">
            WHO <span className="text-stroke">AM</span> I?
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Bio */}
          <div className="space-y-6">
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
                Nova Care Center, while also contributing to AI research for African languages. I'm always eager to learn 
                new technologies and take on challenging projects.
              </p>
            </div>

            {/* Highlights Grid */}
            <div className="grid grid-cols-2 gap-4 mt-8">
              {highlights.map((item, index) => (
                <div key={item.label} className="brutal-box-hover p-4">
                  <item.icon className="mb-2 text-primary" size={28} />
                  <h4 className="font-bold text-sm uppercase">{item.label}</h4>
                  <p className="text-xs text-muted-foreground mt-1">{item.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Skills */}
          <div className="space-y-6">
            <h3 className="font-display text-2xl font-bold">
              <span className="bg-foreground text-background px-3 py-1">MY TOOLKIT</span>
            </h3>
            
            {skills.map((skillGroup, groupIndex) => (
              <div key={skillGroup.category} className="brutal-box p-6">
                <h4 className="font-bold uppercase mb-4 flex items-center gap-2">
                  <span className={`w-4 h-4 ${groupIndex === 0 ? 'bg-primary' : groupIndex === 1 ? 'bg-secondary' : 'bg-accent'}`} />
                  {skillGroup.category}
                </h4>
                <div className="flex flex-wrap gap-2">
                  {skillGroup.items.map((skill) => (
                    <span
                      key={skill}
                      className={`brutal-tag ${
                        groupIndex === 0
                          ? 'bg-primary text-primary-foreground'
                          : groupIndex === 1
                          ? 'bg-secondary text-secondary-foreground'
                          : 'bg-accent text-accent-foreground'
                      }`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4">
              <div className="brutal-box p-4 text-center bg-primary text-primary-foreground">
                <div className="font-display text-3xl font-bold">4+</div>
                <div className="text-xs uppercase">Projects</div>
              </div>
              <div className="brutal-box p-4 text-center bg-secondary text-secondary-foreground">
                <div className="font-display text-3xl font-bold">2+</div>
                <div className="text-xs uppercase">Years Exp</div>
              </div>
              <div className="brutal-box p-4 text-center bg-accent text-accent-foreground">
                <div className="font-display text-3xl font-bold">∞</div>
                <div className="text-xs uppercase">Coffee</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
