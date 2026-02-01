import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { X, Minus, Square, Copy, Home, Mail, Phone, ChevronLeft, ChevronRight, MousePointer, Pencil, Type, Search, Eraser, ArrowUpRight } from "lucide-react";

const CV = () => {
  const navigate = useNavigate();
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [currentRefIndex, setCurrentRefIndex] = useState(0);

  const skills = [
    { name: "Java / Spring Boot", level: 5 },
    { name: "Flutter / Dart", level: 5 },
    { name: "Python", level: 4 },
    { name: "PostgreSQL / MySQL", level: 5 },
    { name: "C/C++", level: 4 },
    { name: "Golang", level: 2 },
  ];

  const education = [
    {
      degree: "BSc Software Engineering",
      school: "USIU-Africa",
      year: "2026",
    },
    {
      degree: "KCSE",
      school: "Aga Khan High School",
      year: "2020",
    },
  ];

  const experience = [
    {
      title: "Software Engineer Intern",
      company: "Nova Care Center",
      period: "04/2025 - Present",
      points: [
        "Maintaining health management system for tracking developmental progress",
        "Restored years of missing client data ensuring accuracy",
        "Configured client goals and milestones",
      ],
    },
    {
      title: "Research Assistant",
      company: "Maseno University",
      period: "07/2024 - 07/2025",
      points: [
        "Gates Foundation-funded NLP initiative",
        "Designed prompts for African language data collection",
        "Validated datasets for NLP applications",
      ],
    },
  ];

  const references = [
    { name: "Dr. Edward Ombui", title: "Lecturer, USIU-Africa", email: "eombui@usiu.ac.ke" },
    { name: "Dr. Jennifer Gachukia", title: "Lecturer, USIU-Africa", email: "jwgachukia@usiu.ac.ke" },
    { name: "Prof. Austin Sifuna", title: "Professor, USIU-Africa", email: "asifuna@usiu.ac.ke" },
  ];

  const handleClose = () => {
    navigate("/");
  };

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/Ridwan_Farhan_CV.pdf';
    link.download = 'Ridwan_Farhan_CV.pdf';
    link.click();
  };

  const nextRef = () => {
    setCurrentRefIndex((prev) => (prev + 1) % references.length);
  };

  const prevRef = () => {
    setCurrentRefIndex((prev) => (prev - 1 + references.length) % references.length);
  };

  // Dot rating component with blinking animation
  const DotRating = ({ level }: { level: number }) => (
    <div className="flex gap-1">
      {[1, 2, 3, 4, 5].map((dot, index) => (
        <div
          key={dot}
          className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
            dot <= level 
              ? "bg-[#2d5a4a] shadow-[0_0_5px_#d4654a]" 
              : "bg-[#2d5a4a]/20"
          }`}
        />
      ))}
    </div>
  );
  return (
    <div className={`min-h-screen bg-[#9ec5b8] transition-all duration-300 ${isFullscreen ? 'p-0' : 'p-4 md:p-8'}`}>
      {/* Main CV Window */}
      <div className={`bg-[#f5f0e1] border-2 border-[#2d2d2d] mx-auto transition-all duration-300 ${
        isFullscreen ? 'w-full min-h-screen border-0' : 'max-w-5xl'
      }`}>
        {/* Main Window Title Bar */}
        <div className="flex items-center justify-between px-4 py-3 bg-[#f5f0e1] border-b-2 border-[#2d2d2d]">
          <div className="flex items-center gap-3">
            <div className="w-5 h-5 rounded-full border-2 border-[#2d2d2d]" />
            <div className="w-5 h-5 rounded-full border-2 border-[#2d2d2d]" />
          </div>
          <span className="font-display font-bold text-lg tracking-[0.3em] text-[#2d2d2d]">CURRICULUM VITAE</span>
          <div className="flex items-center gap-3">
            <button className="text-[#2d2d2d] hover:opacity-70 transition-opacity" aria-label="Minimize">
              <Minus size={20} strokeWidth={3} />
            </button>
            <button 
              className="text-[#2d2d2d] hover:opacity-70 transition-opacity" 
              onClick={() => setIsFullscreen(!isFullscreen)}
              aria-label="Toggle fullscreen"
            >
              {isFullscreen ? <Copy size={20} strokeWidth={2} /> : <Square size={20} strokeWidth={2} />}
            </button>
            <button 
              className="text-[#d4654a] hover:opacity-70 transition-opacity" 
              onClick={handleClose}
              aria-label="Close"
            >
              <X size={20} strokeWidth={3} />
            </button>
          </div>
        </div>

        {/* Content */}
        <div className={`p-4 md:p-6 ${isFullscreen ? 'max-w-7xl mx-auto px-8 md:px-16' : ''}`}>
          
          {/* TOP: Full-width Profile Section */}
          <div className="border-2 border-[#2d2d2d] bg-[#f5f0e1] mb-4">
            <div className="flex items-center justify-between px-4 py-2 bg-[#e8e0cc] border-b-2 border-[#2d2d2d]">
              <span className="font-display font-bold tracking-[0.2em] text-[#2d2d2d]">PROFILE</span>
              <ArrowUpRight size={18} className="text-[#2d2d2d]" />
            </div>
            <div className="p-5 flex flex-wrap items-start justify-between gap-4">
              {/* Tools sidebar */}
              <div className="shrink-0">
                <div className="border-2 border-[#2d2d2d] bg-[#e8e0cc] p-2 space-y-2">
                  <div className="flex items-center justify-end">
                    <X size={12} className="text-[#2d2d2d]" />
                  </div>
                  <div className="flex gap-1">
                    <MousePointer size={14} className="text-[#2d2d2d]" />
                    <MousePointer size={14} className="text-[#2d2d2d] rotate-90" />
                  </div>
                  <div className="w-full h-px bg-[#2d2d2d]" />
                  <div className="space-y-2">
                    <Pencil size={14} className="text-[#d4654a]" />
                    <Type size={14} className="text-[#2d2d2d]" />
                    <Search size={14} className="text-[#2d2d2d]" />
                    <Eraser size={14} className="text-[#2d2d2d]" />
                  </div>
                </div>
              </div>

              {/* Name and contact */}
              <div className="flex-1 min-w-[200px]">
                <h1 className="font-display text-2xl md:text-3xl font-bold leading-tight text-[#2d2d2d]">RIDWAN FARHAN</h1>
                <p className="font-display text-base text-[#2d5a4a] font-semibold mb-4">Software Engineer</p>
                <div className="space-y-2">
                  <div className="flex items-center gap-3">
                    <Home size={16} className="text-[#2d2d2d] shrink-0" />
                    <span className="font-mono text-sm text-[#2d2d2d]">Nairobi, Kenya</span>
                  </div>
                  <div className="flex flex-wrap items-center gap-3">
                    <Mail size={16} className="text-[#2d2d2d] shrink-0" />
                    <a href="mailto:ridhwan.farhan.developer@gmail.com" className="font-mono text-sm text-[#2d2d2d] hover:text-[#2d5a4a]">
                      ridhwan.farhan.developer@gmail.com
                    </a>
                    <Phone size={16} className="text-[#2d2d2d] shrink-0" />
                    <span className="font-mono text-sm text-[#2d2d2d]">(+254) 716 664 576</span>
                  </div>
                </div>
              </div>

              {/* Profile photo placeholder */}
              <div className="shrink-0">
                <div className="w-24 h-24 md:w-28 md:h-28 border-2 border-[#2d2d2d] bg-[#e8e0cc] flex items-center justify-center overflow-hidden">
                  <img
                    src="/profile.jpg"
                    alt="Ridwan Farhan"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* MIDDLE: Two columns */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4">
            
            {/* Left Column */}
            <div className="space-y-4">
              {/* Skills Section */}
              <div className="border-2 border-[#2d2d2d] bg-[#f5f0e1] relative">
                <div className="p-4 space-y-2">
                  {skills.map((skill) => (
                    <div key={skill.name} className="flex items-center justify-between">
                      <span className="font-mono text-sm text-[#2d2d2d]">{skill.name}</span>
                      <DotRating level={skill.level} />
                    </div>
                  ))}
                </div>
                <div className="flex items-center justify-between px-4 py-2 bg-[#e8e0cc] border-t-2 border-[#2d2d2d]">
                  <span className="font-display font-bold tracking-[0.2em] text-[#2d2d2d]">SKILLS</span>
                  <Pencil size={14} className="text-[#d4654a]" />
                </div>
              </div>

              {/* References Section */}
              <div className="border-2 border-[#2d2d2d] bg-[#f5f0e1]">
                <div className="flex items-center justify-between px-4 py-2 bg-[#e8e0cc] border-b-2 border-[#2d2d2d]">
                  <button 
                    onClick={prevRef} 
                    className="flex items-center gap-1 text-[#2d2d2d] hover:text-[#2d5a4a] transition-colors group"
                  >
                    <ChevronLeft size={18} strokeWidth={2} className="group-hover:-translate-x-0.5 transition-transform" />
                    <span className="font-mono text-xs opacity-60 group-hover:opacity-100">Prev</span>
                  </button>
                  <span className="font-display font-bold tracking-[0.2em] text-[#2d2d2d]">REFERENCES</span>
                  <button 
                    onClick={nextRef} 
                    className="flex items-center gap-1 text-[#2d2d2d] hover:text-[#2d5a4a] transition-colors group"
                  >
                    <span className="font-mono text-xs opacity-60 group-hover:opacity-100">Next</span>
                    <ChevronRight size={18} strokeWidth={2} className="group-hover:translate-x-0.5 transition-transform" />
                  </button>
                </div>
                <div className="p-4">
                  <div key={references[currentRefIndex].name} className="animate-fade-in">
                    <p className="font-display font-bold text-[#2d2d2d]">{references[currentRefIndex].name}</p>
                    <p className="font-mono text-sm text-[#2d2d2d]/70">{references[currentRefIndex].title}</p>
                    <a 
                      href={`mailto:${references[currentRefIndex].email}`}
                      className="font-mono text-sm text-[#2d5a4a] hover:underline"
                    >
                      {references[currentRefIndex].email}
                    </a>
                  </div>
                  <div className="flex justify-center gap-2 mt-3">
                    {references.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentRefIndex(index)}
                        className={`w-2 h-2 rounded-full transition-all ${
                          index === currentRefIndex ? 'bg-[#2d5a4a] scale-125' : 'bg-[#2d5a4a]/30 hover:bg-[#2d5a4a]/50'
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>

              {/* Education Section */}
              <div className="border-2 border-[#2d2d2d] bg-[#f5f0e1] p-4">
                <span className="font-display font-bold tracking-[0.2em] text-[#2d2d2d] block mb-3">EDUCATION</span>
                <div className="space-y-3">
                  {education.map((edu) => (
                    <div key={edu.degree}>
                      <p className="font-display font-bold text-[#2d2d2d]">{edu.degree} ({edu.year})</p>
                      <p className="font-mono text-sm text-[#2d2d2d]/70">{edu.school}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-4">
              {/* Experiences Section */}
              <div className="border-2 border-[#2d2d2d] bg-[#f5f0e1]">
                <div className="flex items-center justify-between px-4 py-2 bg-[#e8e0cc] border-b-2 border-[#2d2d2d]">
                  <span className="font-display font-bold tracking-[0.2em] text-[#2d2d2d]">EXPERIENCES</span>
                  <div className="flex items-center gap-2">
                    <Minus size={16} className="text-[#2d2d2d]" />
                    <Square size={16} className="text-[#2d2d2d]" />
                    <X size={16} className="text-[#d4654a]" />
                  </div>
                </div>
                <div className="p-4 space-y-5">
                  {experience.map((exp) => (
                    <div key={exp.title}>
                      <h3 className="font-display font-bold text-base text-[#2d2d2d]">{exp.title}</h3>
                      <p className="font-mono text-sm text-[#2d2d2d]/70 mb-2">
                        {exp.company} | {exp.period}
                      </p>
                      <ul className="list-disc list-inside space-y-1">
                        {exp.points.map((point, i) => (
                          <li key={i} className="font-mono text-sm text-[#2d2d2d]">{point}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>

              {/* Portfolio Link */}
              <div className="border-2 border-[#2d2d2d] bg-[#e8e0cc] p-3">
                <p className="font-mono text-sm text-[#2d2d2d]">
                  <span className="font-bold">GitHub:</span>{" "}
                  <a 
                    href="https://github.com/ridhwan497" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-[#2d5a4a] hover:underline"
                  >
                    github.com/ridhwan497
                  </a>
                </p>
              </div>
            </div>
          </div>

          {/* BOTTOM: Full-width Download Button */}
          <button 
            onClick={handleDownload}
            className="w-full border-2 border-[#2d2d2d] bg-[#2d5a4a] text-[#f5f0e1] p-4 font-display font-bold tracking-wider hover:bg-[#3d6a5a] transition-colors"
          >
            DOWNLOAD PDF
          </button>

          {/* Bottom decorative elements */}
          <div className="hidden lg:flex items-center justify-end mt-4 gap-2">
            <div className="w-0 h-0 border-l-[8px] border-l-transparent border-r-[8px] border-r-transparent border-t-[12px] border-t-[#2d2d2d]" />
            <div className="w-0 h-0 border-l-[8px] border-l-transparent border-r-[8px] border-r-transparent border-b-[12px] border-b-[#2d2d2d]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CV;
