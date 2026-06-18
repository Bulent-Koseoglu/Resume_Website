import { useState } from 'react';
import { ExternalLink, Eye, X, Network, Cpu, Brain, Gamepad2 } from 'lucide-react';
import { Github } from './BrandIcons';

interface Project {
  title: string;
  description: string;
  features: string[];
  technologies: string[];
  icon: React.ReactNode;
  githubLink: string;
  demoLink: string;
  detailsContent: string;
  date: string;
}

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const projectsData: Project[] = [
    {
      title: 'VR Boxing: Advanced Combat System',
      description: 'A physics-based VR boxing simulation optimized for Meta Quest and Valve Index platforms using Unity 6 and OpenXR.',
      date: 'April 2026',
      icon: <Brain size={24} className="project-icon" />,
      features: [
        'Physics-based VR boxing simulation for Meta Quest & Valve Index',
        'PunchDetector system using vector analysis & velocity tracking to classify Jab, Hook, Uppercut',
        'Advanced opponent AI with NavMesh and Finite State Machines (FSM)',
        'Continuous Collision Detection (CCD) & ConfigurableJoint for realistic physics',
        'Decoupled architecture using Observer & Singleton patterns for real-time HUD, scoring, and spatial audio',
      ],
      technologies: ['Unity 6 (URP)', 'C#', 'OpenXR', 'XR Interaction Toolkit', 'NavMesh'],
      githubLink: 'https://github.com',
      demoLink: 'https://github.com',
      detailsContent: 'Developed a physics-based VR boxing simulation optimized for Meta Quest and Valve Index platforms using Unity 6 and OpenXR. Engineered a "PunchDetector" system utilizing vector analysis and velocity tracking algorithms to automatically classify punch types such as Jab, Hook, and Uppercut. Integrated NavMesh and Finite State Machines (FSM) to create an advanced opponent AI capable of distance control, aggressive engagement, and evasion maneuvers. Utilized Continuous Collision Detection (CCD) and ConfigurableJoint components to ensure realistic physics interactions and prevent clipping during high-velocity impacts. Established a decoupled system architecture using Observer and Singleton patterns for synchronized real-time HUD updates, scoring, and spatial audio-visual effects.'
    },
    {
      title: 'Automatic Digger/Tilling Machine',
      description: 'A fully autonomous soil tilling mechanism based on Arduino Uno, aimed at minimizing manual labor in small-scale farming and hobby gardens.',
      date: 'May 2025',
      icon: <Cpu size={24} className="project-icon" />,
      features: [
        'Closed-loop control with HC-SR04 ultrasonic sensor for real-time soil depth monitoring',
        'Dynamic blade angle adjustment via servomotor',
        'Low-level AVR C firmware with Timer1 overflow interrupts for high-precision measurement',
        'Safety protocols: obstacle detection via mechanical switches, buzzer/LED alerts',
        'Validated in WOKWI simulation with ±1 cm depth accuracy',
      ],
      technologies: ['Arduino Uno (ATmega328P)', 'AVR C', 'WOKWI', 'Servo', 'HC-SR04', 'LCD'],
      githubLink: 'https://github.com',
      demoLink: 'https://github.com',
      detailsContent: 'Designed and developed a fully autonomous soil tilling mechanism based on Arduino Uno, aimed at minimizing manual labor in small-scale farming and hobby gardens. Implemented a closed-loop control system that monitors soil depth in real-time using an HC-SR04 ultrasonic sensor and dynamically adjusts the blade angle via a servomotor. Developed low-level firmware using AVR C, utilizing Timer1 overflow interrupts for high-precision depth measurement and external interrupts for system state management. Integrated safety protocols including obstacle detection via mechanical switches, triggering immediate system halts and multi-modal alerts (Buzzer/LED) upon detecting hard debris. Validated system performance in the WOKWI simulation environment through field-emulation scenarios, achieving a depth maintenance accuracy of ±1 cm.'
    },
    {
      title: 'Online Gym Management System',
      description: 'A web-based gym automation platform providing digital management for members, trainers, and administrators.',
      date: 'Jan 2026',
      icon: <Network size={24} className="project-icon" />,
      features: [
        'Scalable user management with role-based inheritance (Member, Trainer, Admin)',
        'Dynamic content infrastructure for personalized workout plans & exercise schedules',
        'Member progress tracking system',
        'Intelligent scheduling system for trainer availability',
        'Direct messaging module for trainer-member communication',
      ],
      technologies: ['Web Technologies', 'OOP (Inheritance, Polymorphism, Encapsulation)'],
      githubLink: 'https://github.com',
      demoLink: 'https://github.com',
      detailsContent: 'Architected a web-based gym automation platform providing digital management for members, trainers, and administrators. Applied core OOP principles to build a scalable user management module where distinct roles are inherited from a centralized user structure. Developed a dynamic content infrastructure allowing trainers to manage personalized workout plans, exercise sets, and schedules, while enabling member progress tracking. Integrated an intelligent scheduling system for trainer availability and a direct messaging module to facilitate trainer-member communication.'
    },
    {
      title: 'Nessy Burger – Game Jam Project',
      description: 'A mobile game developed and published on Itch.io within 48 hours for the Yaşar University Mobile Game Jam.',
      date: 'Nov 2023',
      icon: <Gamepad2 size={24} className="project-icon" />,
      features: [
        'Developed and published within 48-hour Game Jam deadline',
        'Mobile-optimized game for Itch.io platform',
        'Created during Yaşar University Mobile Game Jam',
        'Full game loop with scoring and progression',
      ],
      technologies: ['Unity', 'C#'],
      githubLink: 'https://github.com',
      demoLink: 'https://github.com',
      detailsContent: 'Developed and published a mobile game on Itch.io within 48 hours for the Yaşar University Mobile Game Jam. This project demonstrates rapid prototyping skills, teamwork under time pressure, and the ability to deliver a fully functional game product within extreme time constraints using Unity and C#.'
    },
  ];

  return (
    <section id="projects" className="section container">
      <div className="section-header">
        <h2 className="section-title">Featured Projects</h2>
        <p className="section-subtitle">A curated collection of my work spanning VR development, embedded systems, web platforms, and game jams.</p>
      </div>

      <div className="projects-grid">
        {projectsData.map((project, index) => (
          <div key={index} className="project-card glass-card">
            <div className="project-header">
              {project.icon}
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', fontWeight: 500, background: 'var(--bg-badge)', padding: '4px 10px', borderRadius: '20px' }}>{project.date}</span>
                <div className="project-links">
                  <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="btn-icon" aria-label="GitHub Repository">
                    <Github size={18} />
                  </a>
                  <a href={project.demoLink} target="_blank" rel="noopener noreferrer" className="btn-icon" aria-label="Live Demo">
                    <ExternalLink size={18} />
                  </a>
                </div>
              </div>
            </div>

            <h3 className="project-title">{project.title}</h3>
            <p className="project-desc">{project.description}</p>

            <h4 className="project-features-title">Core Features</h4>
            <ul className="project-features">
              {project.features.slice(0, 3).map((feat, fIdx) => (
                <li key={fIdx} className="project-feature-item">{feat}</li>
              ))}
              {project.features.length > 3 && (
                <li className="project-feature-item" style={{ color: 'var(--primary)', fontStyle: 'italic', listStyleType: 'none' }}>
                  + {project.features.length - 3} more features
                </li>
              )}
            </ul>

            <div className="project-techs" style={{ marginBottom: '24px' }}>
              {project.technologies.map((tech) => (
                <span key={tech} className="project-tech-badge">{tech}</span>
              ))}
            </div>

            <button className="btn btn-outline" style={{ width: '100%', marginTop: 'auto' }} onClick={() => setSelectedProject(project)}>
              <Eye size={16} /> Details
            </button>
          </div>
        ))}
      </div>

      {/* Modal Dialog for Project Details */}
      {selectedProject && (
        <div className="modal-overlay" onClick={() => setSelectedProject(null)}>
          <div className="modal-card glass-card" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setSelectedProject(null)} aria-label="Close details">
              <X size={20} />
            </button>
            <div className="modal-header">
              <div className="modal-icon-wrapper">
                {selectedProject.icon}
              </div>
              <div>
                <h3 className="modal-title">{selectedProject.title}</h3>
                <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>{selectedProject.date}</span>
              </div>
            </div>
            <div className="modal-body">
              <h4 className="modal-section-title">Overview</h4>
              <p className="modal-text">{selectedProject.detailsContent}</p>
              
              <h4 className="modal-section-title" style={{ marginTop: '20px' }}>Key Highlights &amp; Features</h4>
              <ul className="project-features" style={{ marginBottom: '20px' }}>
                {selectedProject.features.map((feat, idx) => (
                  <li key={idx} className="project-feature-item">{feat}</li>
                ))}
              </ul>

              <h4 className="modal-section-title">Technologies Used</h4>
              <div className="project-techs">
                {selectedProject.technologies.map((tech) => (
                  <span key={tech} className="project-tech-badge" style={{ color: 'var(--text-main)', borderColor: 'var(--border-hover)' }}>{tech}</span>
                ))}
              </div>
            </div>
            <div className="modal-footer">
              <a href={selectedProject.githubLink} target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
                <Github size={16} /> GitHub Repo
              </a>
              <a href={selectedProject.demoLink} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                <ExternalLink size={16} /> Live Demo
              </a>
            </div>
          </div>
        </div>
      )}

      {/* CSS Styles specific to the Modal overlay structure */}
      <style>{`
        .modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(2, 4, 10, 0.85);
          backdrop-filter: blur(8px);
          z-index: 10000;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 20px;
          animation: fadeIn 0.25s ease-out;
        }
        .modal-card {
          width: 100%;
          max-width: 650px;
          max-height: 90vh;
          overflow-y: auto;
          position: relative;
          background: #090e1a;
          border-color: var(--border-hover);
          box-shadow: var(--shadow-lg), 0 0 40px rgba(99, 102, 241, 0.15);
          animation: scaleUp 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
        }
        .modal-close {
          position: absolute;
          top: 20px;
          right: 20px;
          background: none;
          border: none;
          color: var(--text-muted);
          cursor: pointer;
          transition: var(--transition-fast);
          padding: 6px;
          border-radius: 50%;
        }
        .modal-close:hover {
          color: var(--text-main);
          background: rgba(255, 255, 255, 0.05);
        }
        .modal-header {
          display: flex;
          align-items: center;
          gap: 16px;
          margin-bottom: 24px;
          border-bottom: 1px solid var(--border);
          padding-bottom: 16px;
          padding-right: 30px;
        }
        .modal-icon-wrapper {
          color: var(--primary);
          background: var(--bg-badge);
          width: 48px;
          height: 48px;
          border-radius: var(--border-radius-sm);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }
        .modal-title {
          font-size: 1.5rem;
          color: var(--text-main);
        }
        .modal-section-title {
          font-size: 1rem;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          color: var(--secondary);
          margin-bottom: 8px;
          font-weight: 600;
        }
        .modal-text {
          font-size: 0.95rem;
          color: var(--text-muted);
          line-height: 1.6;
        }
        .modal-footer {
          margin-top: 32px;
          display: flex;
          justify-content: flex-end;
          gap: 12px;
          border-top: 1px solid var(--border);
          padding-top: 20px;
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes scaleUp {
          from { transform: scale(0.95); opacity: 0; }
          to { transform: scale(1); opacity: 1; }
        }
      `}</style>
    </section>
  );
}
