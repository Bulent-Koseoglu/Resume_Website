import { useState, useEffect } from 'react';
import { Menu, X, Terminal, Languages } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface NavbarProps {
  activeSection: string;
}

export default function Navbar({ activeSection }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { language, t, toggleLanguage } = useLanguage();

  const navLinks = [
    { label: t.nav.home, target: '#home' },
    { label: t.nav.about, target: '#about' },
    { label: t.nav.skills, target: '#skills' },
    { label: t.nav.projects, target: '#projects' },
    { label: t.nav.education, target: '#education' },
    { label: t.nav.contact, target: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  const handleLinkClick = (target: string) => {
    setIsOpen(false);
    const element = document.querySelector(target);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header className={`navbar-header ${isScrolled ? 'scrolled' : ''}`}>
        <div className="navbar-container">
          <a href="#home" className="navbar-brand" onClick={(e) => { e.preventDefault(); handleLinkClick('#home'); }}>
            <Terminal size={22} className="text-gradient" style={{ stroke: 'url(#primary-grad)' }} />
            <span>Bulent</span>Koseoglu
          </a>

          {/* Desktop Menu */}
          <ul className="navbar-menu">
            {navLinks.map((link) => (
              <li key={link.target}>
                <a
                  href={link.target}
                  className={`navbar-link ${activeSection === link.target.substring(1) ? 'active' : ''}`}
                  onClick={(e) => {
                    e.preventDefault();
                    handleLinkClick(link.target);
                  }}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Language Toggle + Mobile Menu Toggle */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <button
              className="lang-toggle-btn"
              onClick={toggleLanguage}
              aria-label="Toggle language"
              title={language === 'en' ? 'Türkçe\'ye geç' : 'Switch to English'}
            >
              <Languages size={16} />
              <span className="lang-toggle-label">{language === 'en' ? 'TR' : 'EN'}</span>
            </button>

            <button className="navbar-toggle" onClick={toggleMenu} aria-label="Toggle menu">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="mobile-menu-overlay">
          {navLinks.map((link) => (
            <a
              key={link.target}
              href={link.target}
              className={`mobile-menu-link ${activeSection === link.target.substring(1) ? 'active' : ''}`}
              onClick={(e) => {
                e.preventDefault();
                handleLinkClick(link.target);
              }}
            >
              {link.label}
            </a>
          ))}

          {/* Language toggle in mobile menu too */}
          <button
            className="lang-toggle-btn"
            onClick={toggleLanguage}
            style={{ marginTop: '16px', alignSelf: 'center' }}
          >
            <Languages size={16} />
            <span className="lang-toggle-label">{language === 'en' ? 'Türkçe' : 'English'}</span>
          </button>
        </div>
      )}

      {/* SVG Gradient definition for Lucide icons */}
      <svg width="0" height="0" style={{ position: 'absolute' }}>
        <defs>
          <linearGradient id="primary-grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#6366f1" />
            <stop offset="50%" stopColor="#3b82f6" />
            <stop offset="100%" stopColor="#8b5cf6" />
          </linearGradient>
        </defs>
      </svg>
    </>
  );
}
