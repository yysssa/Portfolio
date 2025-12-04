import { Palette, GraduationCap, Award } from "lucide-react";

const skills = [
  "UI Design",
  "Figma",
  "Prototyping",
  "Wireframing",
  "User Testing",
  "Design Systems",
  "HTML/CSS",
  "JavaScript",
  "React Native",
  "Responsive Design",
  "Python",
  "Node.js",
  "MySQL",
  "FireBase",
  "MongoDB",
  
];

const education = [
  {
    school: "New Era University",
    degree: "Bachelor's in Information Technology",
    year: "2023 - 2027",
  },
];

const certificates = [
  "SQL and Relational Databases 101",
  "FOracle Cloud Insfrastructure Foundations Associate (2024)",
  "Oracle Cloud Insfrastructure Data Management Foundations Associate (2024",
  "Oracle Cloud Insfrastructure AI Foundations Associates (2024)",
];

const AboutSection = () => {
  return (
    <section id="about" className="bg-secondary/30">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="section-title">About Me</h2>
          <p className="section-subtitle">My skills, education & achievements</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Skills */}
          <div className="card-feminine">
            <div className="w-12 h-12 bg-rose-light rounded-xl flex items-center justify-center mb-6">
              <Palette className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-serif text-xl font-semibold mb-4">Skills</h3>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1.5 bg-accent text-accent-foreground text-sm rounded-full transition-colors hover:bg-primary hover:text-primary-foreground"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Education */}
          <div className="card-feminine">
            <div className="w-12 h-12 bg-rose-light rounded-xl flex items-center justify-center mb-6">
              <GraduationCap className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-serif text-xl font-semibold mb-4">Education</h3>
            <div className="space-y-4">
              {education.map((edu, index) => (
                <div key={index} className="border-l-2 border-primary pl-4">
                  <p className="font-medium text-foreground">{edu.school}</p>
                  <p className="text-sm text-muted-foreground">{edu.degree}</p>
                  <p className="text-xs text-primary mt-1">{edu.year}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Certificates */}
          <div className="card-feminine">
            <div className="w-12 h-12 bg-rose-light rounded-xl flex items-center justify-center mb-6">
              <Award className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-serif text-xl font-semibold mb-4">Certificates</h3>
            <ul className="space-y-3">
              {certificates.map((cert, index) => (
                <li key={index} className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                  <span className="text-muted-foreground text-sm">{cert}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

