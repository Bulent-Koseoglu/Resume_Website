import { useState } from 'react';
import { Mail, MapPin, Phone, Copy, Check, Send } from 'lucide-react';
import { Github, Linkedin } from './BrandIcons';
import { useLanguage } from '../context/LanguageContext';

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const { t } = useLanguage();

  const emailAddress = 'bulentkoseoglu.dev@gmail.com';
  const phoneNumber = '+90 553 824 18 03';
  const linkedinUrl = 'https://linkedin.com';
  const githubUrl = 'https://github.com';

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(emailAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, you would connect this to an email service or backend API.
    console.log('Form submission received:', formData);
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setFormData({ name: '', email: '', message: '' });
    }, 4000);
  };

  return (
    <section id="contact" className="section container">
      <div className="section-header">
        <h2 className="section-title">{t.contact.title}</h2>
        <p className="section-subtitle">{t.contact.subtitle}</p>
      </div>

      <div className="contact-grid">
        <div className="contact-info">
          <div>
            <p className="contact-intro">
              {t.contact.intro}
            </p>

            <div className="contact-methods">
              {/* Email Card */}
              <div className="contact-method-card glass-card">
                <div className="contact-method-icon">
                  <Mail size={20} />
                </div>
                <div className="contact-method-details">
                  <h4 className="contact-method-label">{t.contact.email}</h4>
                  <p className="contact-method-value">{emailAddress}</p>
                </div>
                <button 
                  className="contact-method-copy" 
                  onClick={handleCopyEmail}
                  title={t.contact.copyEmail}
                  aria-label="Copy email"
                >
                  {copied ? <Check size={16} style={{ color: '#10b981' }} /> : <Copy size={16} />}
                </button>
              </div>

              {/* LinkedIn Card */}
              <a href={linkedinUrl} target="_blank" rel="noopener noreferrer" className="contact-method-card glass-card">
                <div className="contact-method-icon">
                  <Linkedin size={20} />
                </div>
                <div className="contact-method-details">
                  <h4 className="contact-method-label">{t.contact.linkedin}</h4>
                  <p className="contact-method-value">linkedin.com/in/bulent-koseoglu</p>
                </div>
              </a>

              {/* GitHub Card */}
              <a href={githubUrl} target="_blank" rel="noopener noreferrer" className="contact-method-card glass-card">
                <div className="contact-method-icon">
                  <Github size={20} />
                </div>
                <div className="contact-method-details">
                  <h4 className="contact-method-label">{t.contact.github}</h4>
                  <p className="contact-method-value">github.com/bulent-koseoglu</p>
                </div>
              </a>

              {/* Phone Card */}
              <div className="contact-method-card glass-card">
                <div className="contact-method-icon">
                  <Phone size={20} />
                </div>
                <div className="contact-method-details">
                  <h4 className="contact-method-label">{t.contact.phone}</h4>
                  <p className="contact-method-value">{phoneNumber}</p>
                </div>
              </div>

              {/* Location Card */}
              <div className="contact-method-card glass-card">
                <div className="contact-method-icon">
                  <MapPin size={20} />
                </div>
                <div className="contact-method-details">
                  <h4 className="contact-method-label">{t.contact.location}</h4>
                  <p className="contact-method-value">{t.contact.locationValue}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form Card */}
        <div className="contact-form-card glass-card">
          {formSubmitted ? (
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100%', textAlign: 'center' }}>
              <div style={{ background: 'rgba(16, 185, 129, 0.1)', color: '#10b981', border: '1px solid rgba(16, 185, 129, 0.2)', padding: '16px', borderRadius: '50%', marginBottom: '16px' }}>
                <Check size={32} />
              </div>
              <h3 style={{ fontSize: '1.4rem', marginBottom: '8px' }}>{t.contact.messageSentTitle}</h3>
              <p style={{ color: 'var(--text-muted)' }}>{t.contact.messageSentDesc}</p>
            </div>
          ) : (
            <form className="contact-form" onSubmit={handleFormSubmit}>
              <div className="form-group">
                <label htmlFor="name" className="form-label">{t.contact.formName}</label>
                <input
                  type="text"
                  id="name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder={t.contact.formNamePlaceholder}
                  className="form-input"
                />
              </div>
              <div className="form-group">
                <label htmlFor="email" className="form-label">{t.contact.formEmail}</label>
                <input
                  type="email"
                  id="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder={t.contact.formEmailPlaceholder}
                  className="form-input"
                />
              </div>
              <div className="form-group">
                <label htmlFor="message" className="form-label">{t.contact.formMessage}</label>
                <textarea
                  id="message"
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder={t.contact.formMessagePlaceholder}
                  className="form-input"
                />
              </div>
              <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>
                {t.contact.sendMessage} <Send size={16} />
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
