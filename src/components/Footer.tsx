import { Terminal } from 'lucide-react';
import { Github, Linkedin } from './BrandIcons';

export default function Footer() {
  const handleScrollTo = (targetId: string) => {
    const element = document.querySelector(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        <a href="#home" className="footer-brand" onClick={(e) => { e.preventDefault(); handleScrollTo('#home'); }}>
          <Terminal size={18} className="text-gradient" style={{ stroke: 'url(#primary-grad)' }} />
          Bülent Köseoğlu
        </a>

        <ul className="footer-links">
          <li><a href="#home" onClick={(e) => { e.preventDefault(); handleScrollTo('#home'); }} className="footer-link">Home</a></li>
          <li><a href="#about" onClick={(e) => { e.preventDefault(); handleScrollTo('#about'); }} className="footer-link">About</a></li>
          <li><a href="#skills" onClick={(e) => { e.preventDefault(); handleScrollTo('#skills'); }} className="footer-link">Skills</a></li>
          <li><a href="#projects" onClick={(e) => { e.preventDefault(); handleScrollTo('#projects'); }} className="footer-link">Projects</a></li>
          <li><a href="#education" onClick={(e) => { e.preventDefault(); handleScrollTo('#education'); }} className="footer-link">Education</a></li>
          <li><a href="#contact" onClick={(e) => { e.preventDefault(); handleScrollTo('#contact'); }} className="footer-link">Contact</a></li>
        </ul>

        <div className="footer-socials">
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="btn-icon" aria-label="GitHub">
            <Github size={18} />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="btn-icon" aria-label="LinkedIn">
            <Linkedin size={18} />
          </a>
        </div>

        <p className="footer-copy">
          &copy; {new Date().getFullYear()} Bülent Köseoğlu. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
