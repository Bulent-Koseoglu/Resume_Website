import { Terminal } from 'lucide-react';
import { Github, Linkedin } from './BrandIcons';
import { useLanguage } from '../context/LanguageContext';

export default function Footer() {
  const { t } = useLanguage();

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
          <li><a href="#home" onClick={(e) => { e.preventDefault(); handleScrollTo('#home'); }} className="footer-link">{t.nav.home}</a></li>
          <li><a href="#about" onClick={(e) => { e.preventDefault(); handleScrollTo('#about'); }} className="footer-link">{t.nav.about}</a></li>
          <li><a href="#skills" onClick={(e) => { e.preventDefault(); handleScrollTo('#skills'); }} className="footer-link">{t.nav.skills}</a></li>
          <li><a href="#projects" onClick={(e) => { e.preventDefault(); handleScrollTo('#projects'); }} className="footer-link">{t.nav.projects}</a></li>
          <li><a href="#education" onClick={(e) => { e.preventDefault(); handleScrollTo('#education'); }} className="footer-link">{t.nav.education}</a></li>
          <li><a href="#contact" onClick={(e) => { e.preventDefault(); handleScrollTo('#contact'); }} className="footer-link">{t.nav.contact}</a></li>
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
          {t.footer.copyright}
        </p>
        <p className="footer-copy" style={{ fontSize: '0.8rem', color: 'var(--text-dark)', marginTop: '4px' }}>
          {t.footer.builtWith}
        </p>
      </div>
    </footer>
  );
}
