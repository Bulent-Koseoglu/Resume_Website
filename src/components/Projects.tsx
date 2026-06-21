import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { ExternalLink, Eye, X, Network, Cpu, Brain, Gamepad2 } from 'lucide-react';
import { Github } from './BrandIcons';
import { useLanguage } from '../context/LanguageContext';

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
  const { language, t } = useLanguage();

  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [selectedProject]);

  const projectsData: Project[] = [
    {
      title: t.projects.p1Title,
      description: t.projects.p1Desc,
      date: language === 'tr' ? 'Nisan 2026' : 'April 2026',
      icon: <Brain size={24} className="project-icon" />,
      features: [
        t.projects.p1F1,
        t.projects.p1F2,
        t.projects.p1F3,
        t.projects.p1F4,
        t.projects.p1F5,
      ],
      technologies: ['Unity 6 (URP)', 'C#', 'OpenXR', 'XR Interaction Toolkit', 'NavMesh'],
      githubLink: 'https://github.com',
      demoLink: 'https://github.com',
      detailsContent: t.projects.p1Detail
    },
    {
      title: t.projects.p2Title,
      description: t.projects.p2Desc,
      date: language === 'tr' ? 'Mayıs 2025' : 'May 2025',
      icon: <Cpu size={24} className="project-icon" />,
      features: [
        t.projects.p2F1,
        t.projects.p2F2,
        t.projects.p2F3,
        t.projects.p2F4,
        t.projects.p2F5,
      ],
      technologies: ['Arduino Uno (ATmega328P)', 'AVR C', 'WOKWI', 'Servo', 'HC-SR04', 'LCD'],
      githubLink: 'https://github.com',
      demoLink: 'https://github.com',
      detailsContent: t.projects.p2Detail
    },
    {
      title: t.projects.p3Title,
      description: t.projects.p3Desc,
      date: language === 'tr' ? 'Ocak 2026' : 'Jan 2026',
      icon: <Network size={24} className="project-icon" />,
      features: [
        t.projects.p3F1,
        t.projects.p3F2,
        t.projects.p3F3,
        t.projects.p3F4,
        t.projects.p3F5,
      ],
      technologies: ['Web Technologies', 'OOP (Inheritance, Polymorphism, Encapsulation)'],
      githubLink: 'https://github.com',
      demoLink: 'https://github.com',
      detailsContent: t.projects.p3Detail
    },
    {
      title: t.projects.p4Title,
      description: t.projects.p4Desc,
      date: language === 'tr' ? 'Kasım 2023' : 'Nov 2023',
      icon: <Gamepad2 size={24} className="project-icon" />,
      features: [
        t.projects.p4F1,
        t.projects.p4F2,
        t.projects.p4F3,
        t.projects.p4F4,
      ],
      technologies: ['Unity', 'C#'],
      githubLink: 'https://github.com',
      demoLink: 'https://github.com',
      detailsContent: t.projects.p4Detail
    },
  ];

  return (
    <section id="projects" className="section container">
      <div className="section-header">
        <h2 className="section-title">{t.projects.title}</h2>
        <p className="section-subtitle">{t.projects.subtitle}</p>
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

            <h4 className="project-features-title">{t.projects.coreFeatures}</h4>
            <ul className="project-features">
              {project.features.slice(0, 3).map((feat, fIdx) => (
                <li key={fIdx} className="project-feature-item">{feat}</li>
              ))}
              {project.features.length > 3 && (
                <li className="project-feature-item" style={{ color: 'var(--primary)', fontStyle: 'italic', listStyleType: 'none' }}>
                  + {project.features.length - 3} {t.projects.moreFeatures}
                </li>
              )}
            </ul>

            <div className="project-techs" style={{ marginBottom: '24px' }}>
              {project.technologies.map((tech) => (
                <span key={tech} className="project-tech-badge">{tech}</span>
              ))}
            </div>

            <button className="btn btn-outline" style={{ width: '100%', marginTop: 'auto' }} onClick={() => setSelectedProject(project)}>
              <Eye size={16} /> {t.projects.details}
            </button>
          </div>
        ))}
      </div>

      {/* Modal Dialog for Project Details */}
      {selectedProject && createPortal(
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
              <h4 className="modal-section-title">{t.projects.overview}</h4>
              <p className="modal-text">{selectedProject.detailsContent}</p>
              
              <h4 className="modal-section-title" style={{ marginTop: '20px' }}>{t.projects.keyHighlights}</h4>
              <ul className="project-features" style={{ marginBottom: '20px' }}>
                {selectedProject.features.map((feat, idx) => (
                  <li key={idx} className="project-feature-item">{feat}</li>
                ))}
              </ul>

              <h4 className="modal-section-title">{t.projects.techUsed}</h4>
              <div className="project-techs">
                {selectedProject.technologies.map((tech) => (
                  <span key={tech} className="project-tech-badge" style={{ color: 'var(--text-main)', borderColor: 'var(--border-hover)' }}>{tech}</span>
                ))}
              </div>
            </div>
            <div className="modal-footer">
              <a href={selectedProject.githubLink} target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
                <Github size={16} /> {t.projects.githubRepo}
              </a>
              <a href={selectedProject.demoLink} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                <ExternalLink size={16} /> {t.projects.liveDemo}
              </a>
            </div>
          </div>
        </div>,
        document.body
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
        .modal-card.glass-card {
          width: 100%;
          max-width: 650px;
          max-height: 90vh;
          overflow-y: auto;
          position: relative;
          background: #090e1a;
          border-color: var(--border-hover);
          box-shadow: var(--shadow-lg), 0 0 40px rgba(99, 102, 241, 0.15);
          animation: scaleUp 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
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
