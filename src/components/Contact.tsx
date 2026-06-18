import { useState } from 'react';
import { Mail, MapPin, Phone, Copy, Check, Send } from 'lucide-react';
import { Github, Linkedin } from './BrandIcons';

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [formSubmitted, setFormSubmitted] = useState(false);

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
        <h2 className="section-title">Get In Touch</h2>
        <p className="section-subtitle">Feel free to contact me for internship opportunities, software projects, or collaboration.</p>
      </div>

      <div className="contact-grid">
        <div className="contact-info">
          <div>
            <p className="contact-intro">
              I am open to discussions regarding software development roles, networking research, VR engineering, or general system administration staj opportunities. I will get back to you as quickly as possible.
            </p>

            <div className="contact-methods">
              {/* Email Card */}
              <div className="contact-method-card glass-card">
                <div className="contact-method-icon">
                  <Mail size={20} />
                </div>
                <div className="contact-method-details">
                  <h4 className="contact-method-label">Email</h4>
                  <p className="contact-method-value">{emailAddress}</p>
                </div>
                <button 
                  className="contact-method-copy" 
                  onClick={handleCopyEmail}
                  title="Copy email to clipboard"
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
                  <h4 className="contact-method-label">LinkedIn</h4>
                  <p className="contact-method-value">linkedin.com/in/bulent-koseoglu</p>
                </div>
              </a>

              {/* GitHub Card */}
              <a href={githubUrl} target="_blank" rel="noopener noreferrer" className="contact-method-card glass-card">
                <div className="contact-method-icon">
                  <Github size={20} />
                </div>
                <div className="contact-method-details">
                  <h4 className="contact-method-label">GitHub</h4>
                  <p className="contact-method-value">github.com/bulent-koseoglu</p>
                </div>
              </a>

              {/* Phone Card */}
              <div className="contact-method-card glass-card">
                <div className="contact-method-icon">
                  <Phone size={20} />
                </div>
                <div className="contact-method-details">
                  <h4 className="contact-method-label">Phone</h4>
                  <p className="contact-method-value">{phoneNumber}</p>
                </div>
              </div>

              {/* Location Card */}
              <div className="contact-method-card glass-card">
                <div className="contact-method-icon">
                  <MapPin size={20} />
                </div>
                <div className="contact-method-details">
                  <h4 className="contact-method-label">Location</h4>
                  <p className="contact-method-value">Izmir, Turkey</p>
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
              <h3 style={{ fontSize: '1.4rem', marginBottom: '8px' }}>Message Sent!</h3>
              <p style={{ color: 'var(--text-muted)' }}>Thank you for reaching out. I will get back to you shortly.</p>
            </div>
          ) : (
            <form className="contact-form" onSubmit={handleFormSubmit}>
              <div className="form-group">
                <label htmlFor="name" className="form-label">Full Name</label>
                <input
                  type="text"
                  id="name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="John Doe"
                  className="form-input"
                />
              </div>
              <div className="form-group">
                <label htmlFor="email" className="form-label">Email Address</label>
                <input
                  type="email"
                  id="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="johndoe@example.com"
                  className="form-input"
                />
              </div>
              <div className="form-group">
                <label htmlFor="message" className="form-label">Your Message</label>
                <textarea
                  id="message"
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="I am interested in discussing staj or project collaboration..."
                  className="form-input"
                />
              </div>
              <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>
                Send Message <Send size={16} />
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
