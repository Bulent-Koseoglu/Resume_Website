import { FileDown, FileText } from 'lucide-react';

export default function CVDownload() {
  return (
    <section id="download" className="section cv-section">
      <div className="container">
        <div className="cv-container">
          <div className="cv-card glass-card">
            <div className="cv-icon">
              <FileDown size={48} />
            </div>
            <h3 className="cv-title">Looking for the full story?</h3>
            <p className="cv-desc">
              Download my complete CV in PDF format to view my detailed academic history, technical projects, certifications, and course work.
            </p>
            <a 
              href="/CV/bülent_cv_eng.pdf" 
              download="Bulent_Koseoglu_CV.pdf" 
              className="btn btn-primary"
              style={{ padding: '14px 32px' }}
            >
              <FileText size={18} /> Download My CV
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
