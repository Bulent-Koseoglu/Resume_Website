import { useState, useEffect } from 'react';
import { Menu, X, Terminal } from 'lucide-react';

interface NavbarProps {
  activeSection: string;
}

export default function Navbar({ activeSection }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const navLinks = [
    { label: 'Home', target: '#home' },
    { label: 'About', target: '#about' },
    { label: 'Skills', target: '#skills' },
    { label: 'Projects', target: '#projects' },
    { label: 'Education', target: '#education' },
    { label: 'Contact', target: '#contact' },
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
              <li key={link.label}>
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

          {/* Mobile Menu Toggle */}
          <button className="navbar-toggle" onClick={toggleMenu} aria-label="Toggle menu">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="mobile-menu-overlay">
          {navLinks.map((link) => (
            <a
              key={link.label}
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
