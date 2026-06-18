import { FileText, ArrowRight } from 'lucide-react';
import { Github, Linkedin } from './BrandIcons';
import { useLanguage } from '../context/LanguageContext';

export default function Hero() {
  const { t } = useLanguage();

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
          <span className="hero-pretitle">{t.hero.pretitle}</span>
          <h1 className="hero-title">{t.hero.name}</h1>
          <h2 className="hero-subtitle">{t.hero.subtitle}</h2>
          <p className="hero-desc">
            {t.hero.description}
          </p>

          <div className="hero-actions">
            <button className="btn btn-primary" onClick={() => handleScrollTo('#projects')}>
              {t.hero.viewProjects} <ArrowRight size={18} />
            </button>
            <a href="/CV/bülent_cv_eng.pdf" download="Bulent_Koseoglu_CV.pdf" className="btn btn-secondary">
              <FileText size={18} /> {t.hero.downloadCV}
            </a>
            <button className="btn btn-outline" onClick={() => handleScrollTo('#contact')}>
              {t.hero.contactMe}
            </button>
          </div>

          <div className="hero-socials">
            <span className="hero-socials-label">{t.hero.connectWith}</span>
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
