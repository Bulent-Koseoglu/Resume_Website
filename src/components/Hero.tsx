import { FileText, ArrowRight } from 'lucide-react';
import { Github, Linkedin } from './BrandIcons';

export default function Hero() {
  const handleScrollTo = (targetId: string) => {
    const element = document.querySelector(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="hero-wrapper section container">
      <div className="hero-grid">
        <div className="hero-content">
          <span className="hero-pretitle">Hello, World! I am</span>
          <h1 className="hero-title">Bülent Köseoğlu</h1>
          <h2 className="hero-subtitle">Computer Engineering Student &amp; Software Developer</h2>
          <p className="hero-desc">
            I am a Computer Engineering student interested in software development, computer networks, AR/VR technologies, and AI-based applications.
          </p>

          <div className="hero-actions">
            <button className="btn btn-primary" onClick={() => handleScrollTo('#projects')}>
              View Projects <ArrowRight size={18} />
            </button>
            <a href="/Bulent_Koseoglu_CV.pdf" download="Bulent_Koseoglu_CV.pdf" className="btn btn-secondary">
              <FileText size={18} /> Download CV
            </a>
            <button className="btn btn-outline" onClick={() => handleScrollTo('#contact')}>
              Contact Me
            </button>
          </div>

          <div className="hero-socials">
            <span className="hero-socials-label">Connect with me:</span>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="btn-icon" aria-label="GitHub">
              <Github size={20} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="btn-icon" aria-label="LinkedIn">
              <Linkedin size={20} />
            </a>
          </div>
        </div>

        <div className="hero-visual">
          <div className="hero-badge-container">
            <div className="hero-badge-inner">
              &lt;CE /&gt;
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
