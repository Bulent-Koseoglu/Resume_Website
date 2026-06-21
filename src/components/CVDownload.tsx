import { FileDown, FileText } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function CVDownload() {
  const { t } = useLanguage();

  return (
    <section id="download" className="section cv-section">
      <div className="container">
        <div className="cv-container">
          <div className="cv-card glass-card">
            <div className="cv-icon">
              <FileDown size={48} />
            </div>
            <h3 className="cv-title">{t.cv.title}</h3>
            <p className="cv-desc">
              {t.cv.description}
            </p>
            <a 
              href="/CV/bülent_cv_eng.pdf" 
              download="Bulent_Koseoglu_CV.pdf" 
              className="btn btn-primary"
              style={{ padding: '14px 32px' }}
            >
              <FileText size={18} /> {t.cv.button}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
