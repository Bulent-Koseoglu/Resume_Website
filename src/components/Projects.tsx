import { useState } from 'react';
import { ExternalLink, Eye, X, Network, Cpu, Brain, FileText } from 'lucide-react';
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
}

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const projectsData: Project[] = [
    {
      title: 'Ringside AI – VR Boxing Training App',
      description: 'A VR boxing training application designed to help users improve their boxing skills through interactive training modes and AI-based coaching concepts.',
      icon: <Brain size={24} className="project-icon" />,
      features: [
        'AI Coach for personalized training plans',
        'Combo Trainer for boxing combinations',
        'Virtual Mitts for reaction training',
        'Workout Logger for progress tracking',
        'Form Check concept for technique analysis',
      ],
      technologies: ['Unity', 'C#', 'VR SDK', 'AI Concept Design'],
      githubLink: 'https://github.com',
      demoLink: 'https://github.com',
      detailsContent: 'Ringside AI merges physical training with virtual reality and modern AI concepts. By rendering an interactive avatar using physics-based interactions in Unity, it simulates real sparring mitts. The AI system runs localized analytical heuristics to assess punch velocity, form angle, and rest intervals, subsequently suggesting personalized training plans. It targets both hobbyist athletes and professionals wishing to train reaction times inside a controlled environment.'
    },
    {
      title: 'IoT-Based Precision Irrigation System',
      description: 'A smart irrigation system designed for urban green spaces. It uses sensor data and weather information to reduce water waste and support sustainable city management.',
      icon: <Cpu size={24} className="project-icon" />,
      features: [
        'Soil moisture monitoring',
        'Weather-based irrigation decisions',
        'Water-saving system design',
        'Supports sustainability goals',
      ],
      technologies: ['IoT', 'Sensors', 'Weather API', 'Embedded Systems Concept'],
      githubLink: 'https://github.com',
      demoLink: 'https://github.com',
      detailsContent: 'This project targets smart urban development by reducing water consumption in parks and campus gardens. Built around low-power sensor nodes, it monitors soil moisture and temperature levels in real-time. By querying weather APIs, the system anticipates rainfall patterns and preemptively halts scheduled water releases, resulting in substantial resource conservation and supporting sustainable city management.'
    },
    {
      title: 'Campus Network Design Project',
      description: 'A computer network design project focused on campus and data center connectivity. The system includes access, distribution, backbone, security, and internet gateway layers.',
      icon: <Network size={24} className="project-icon" />,
      features: [
        'Campus network topology',
        'Access and distribution layer design',
        'High-speed backbone planning',
        'Security and internet gateway integration',
      ],
      technologies: ['Networking', 'Routing', 'Switching', 'VLAN', 'WAN', 'Data Center Connectivity'],
      githubLink: 'https://github.com',
      demoLink: 'https://github.com',
      detailsContent: 'An academic networking project focusing on redundancy, security, and high throughput. It designs a multi-tiered campus architecture consisting of Access, Distribution, and Core layers. Standard protocols like OSPF, spanning-tree (RSTP), and custom VLAN topologies are configured. The architecture simulates dual-homed connections to redundant ISP gateways, implementing strict firewall access controls and bandwidth policing for client nodes.'
    },
    {
      title: 'CSP in Distributed Systems – Research Report',
      description: 'A research-based academic report about the use of Communicating Sequential Processes in distributed systems, focusing on process communication, synchronization, and deadlock analysis.',
      icon: <FileText size={24} className="project-icon" />,
      features: [
        'Process communication modeling',
        'Synchronization pattern proofs',
        'Deadlock analysis and prevention models',
        'Comparative study of actor-model vs CSP',
      ],
      technologies: ['Distributed Systems', 'CSP', 'Process Communication', 'Synchronization', 'Deadlock Detection'],
      githubLink: 'https://github.com',
      demoLink: 'https://github.com',
      detailsContent: 'This research report formally analyzes Tony Hoare\'s Communicating Sequential Processes (CSP) formalism in distributed environments. It investigates synchronization primitives, channels, concurrent process orchestration, and mathematically addresses deadlock conditions. The paper demonstrates how modern languages like Go (channels) and library implementations inside C# leverage CSP concepts to achieve high-performance message-passing concurrency without shared state locks.'
    },
  ];

  return (
    <section id="projects" className="section container">
      <div className="section-header">
        <h2 className="section-title">Featured Projects</h2>
        <p className="section-subtitle">A curated collection of my work spanning VR development, embedded systems, network architectures, and theoretical computer science research.</p>
      </div>

      <div className="projects-grid">
        {projectsData.map((project, index) => (
          <div key={index} className="project-card glass-card">
            <div className="project-header">
              {project.icon}
              <div className="project-links">
                <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="btn-icon" aria-label="GitHub Repository">
                  <Github size={18} />
                </a>
                <a href={project.demoLink} target="_blank" rel="noopener noreferrer" className="btn-icon" aria-label="Live Demo">
                  <ExternalLink size={18} />
                </a>
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
              <h3 className="modal-title">{selectedProject.title}</h3>
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
