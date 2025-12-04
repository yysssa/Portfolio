import { useState } from "react";
import ProjectCard from "./ProjectCard";
import ProjectModal from "./ProjectModal";

import hrsThumb from '../assets/projects/hrs.png'; 
import movieThumb from '../assets/projects/movie.jpg'; 
import musicThumb from '../assets/projects/music.png'; 
import tetrisThumb from '../assets/projects/tetris.png';
import PortfolioThumb from '../assets/projects/firstPortfolio.png';
import todoThumb from '../assets/projects/todo.png';
import recipeThumb from '../assets/projects/recipeApp.png';
import salesThumb from '../assets/projects/sales.png';
import gameThumb from '../assets/projects/game.png';


interface Project {
  id: number;
  title: string;
  description: string;
  category: string;
  images: string[];
  details?: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Human Resource System",
    description: "Web-based HRS. HTML interface for payroll and employee tracking.",
    category: "Enterprise System",
    images: [hrsThumb],
    details: "A comprehensive HR management system focusing on payroll processing. Features include employee database management, automated salary computation, deduction tracking, payslip generation, and detailed reporting capabilities.",
  },
  {
    id: 2,
    title: "Watch Movie Platform",
    description: "Basic Python Video Player utilizing simple GUI APIs and VLC integration.",
    category: "Media & Entertainment",
    images: [movieThumb],
    details: "Python Video Player Application (using VLC integration). This project focused on building a functional GUI API for video playback and file browsing in Python. The UI/UX is intentionally kept simple as a foundational exercise in developing our first Python GUI application.",
  },
  {
    id: 3,
    title: "Music Player",
    description: "Basic Music Player UI. A Python GUI project focused on file listing and metadata display.",
    category: "Media & Entertainment",
    images: [musicThumb],
    details: "This project served as an introductory exercise in Python GUI API development, focusing on core audio functionality like loading music files and implementing basic playback controls. It was inspired by modern platforms like Spotify, but scaled down to focus on fundamental development principles.",
  },
  {
    id: 4,
    title: "Tetris Game",
    description: "Python GUI Tetris. Classic game implemented using GUI APIs to develop foundational game logic.",
    category: "Media & Entertainment",
    images: [tetrisThumb],
    details: "Classic Tetris Game Implementation. Developed entirely in Python using GUI and API principles. We chose Tetris due to its familiarity, allowing us to focus on implementing game logic, state management, and basic score tracking as part of our Python GUI API learning curriculum.",
  },
  {
    id: 5,
    title: "My First Portfolio",
    description: "Basic & Simple Portfolio. A website built right after the semester using only fundamental HTML and CSS to quickly practice and demonstrate basic structure.",
    category: "Personal Web Development",
    images: [PortfolioThumb],
    details: "This project was built immediately post-semester using pure HTML for structure and basic CSS for minimal, direct styling. It serves as an exercise in structuring a single web page, focusing on correctly using HTML elements (<h1>, <p>, <ul>, etc.) to clearly present three main areas: Personal Introduction (About Me), a List of Skills, and Contact Information. It strictly prioritizes fundamental code structure over advanced features.",
  },
  {
    id: 6,
    title: "AppDev To Do List",
    description: "Basic CRUD To-Do List utilizing HTML and a local database hosted via Laragon.",
    category: "School Activities",
    images: [todoThumb],
    details: "A foundational full-stack exercise demonstrating essential database connectivity and the ability to set up a local development environment. The project implements all CRUD operations (Create, Read, Update, Delete) to manage task records within the local MySQL database.",
  },
  {
    id: 7,
    title: "Mobile Recipe Application",
    description: "Cross-Platform Recipe App. A mobile application built with React Native.",
    category: "App Development",
    images: [recipeThumb],
    details: "A fully functional mobile app developed using React Native to ensure compatibility on both iOS and Android platforms. The core feature is the persistent storage and retrieval of recipes, demonstrating the use of a local database (DB). Project focus included setting up the mobile environment and confirming on-device functionality.",
  },
  {
    id: 8,
    title: "Sales Management System",
    description: "Database Sales System. A management system built for sales records, applying essential CRUD principles with SQL.",
    category: "Database Application/ Enterprise System",
    images: [salesThumb],
    details: "This project demonstrates fundamental skills in data persistence and management. The system is designed to handle sales records by implementing all four CRUD (Create, Read, Update, Delete) operations. It emphasizes writing and executing efficient SQL queries to maintain, query, and manipulate structured data within a dedicated database.",
  },
  {
    id: 9,
    title: "Aswang Slayer (OOP Game)",
    description: "Philippine Mythology Game. A simple game developed in Java focused on applying Object-Oriented Programming (OOP) principles.",
    category: "Game Development / Object-Oriented Programming",
    images: [gameThumb],
    details: "A game project centered around creatures from Philippine mythology, serving as a practical exercise in Object-Oriented Programming theory. Developed in Java, it demonstrates core OOP concepts like Inheritance, Encapsulation, and Polymorphism through game entities. Aseprite was used for basic sprite creation, linking visual assets to OOP game logic.",
  },
];

const ProjectsSection = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleProjectClick = (project: Project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  return (
    <section id="projects" className="bg-background">
      <div className="section-container">
        {/* Section header */}
        <div className="mb-12">
          <h2 className="section-title">Recent Projects</h2>
          <p className="section-subtitle">A showcase of my development work</p>
        </div>

        {/* Projects grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <ProjectCard
                title={project.title}
                description={project.description}
                category={project.category}
                imageUrl={project.images[0]}
                onClick={() => handleProjectClick(project)}
              />
            </div>
          ))}
        </div>

        <ProjectModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          project={selectedProject}
        />
      </div>
    </section>
  );
};

export default ProjectsSection;
