import { GraduationCap, Calendar, Award } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function Education() {
  const { t } = useLanguage();

  return (
    <section id="education" className="section container">
      <div className="section-header">
        <h2 className="section-title">{t.education.title}</h2>
        <p className="section-subtitle">{t.education.subtitle}</p>
      </div>

      <div className="education-timeline">
        <div className="education-card glass-card">
          <div className="education-date">
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
              <Calendar size={14} /> {t.education.dateRange}
            </span>
          </div>
          <div className="education-main">
            <h3 className="education-degree">{t.education.degree}</h3>
            <h4 className="education-university">{t.education.university}</h4>
            <p style={{ color: 'var(--text-muted)', marginBottom: '16px', fontSize: '0.95rem' }}>
              {t.education.description}
            </p>
            
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--primary)', marginBottom: '24px', fontSize: '0.9rem', fontWeight: 500 }}>
              <GraduationCap size={16} /> {t.education.expectedGrad}
            </div>

            <h4 className="education-courses-title">{t.education.relevantCourses}</h4>
            <div className="education-courses">
              {t.education.courses.map((course) => (
                <span key={course} className="education-course-badge">
                  {course}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Achievements & Languages */}
        <div className="education-card glass-card">
          <div className="education-date">
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
              <Award size={14} /> {t.education.achieveLabel}
            </span>
          </div>
          <div className="education-main">
            <h3 className="education-degree">{t.education.achieveTitle}</h3>
            <h4 className="education-university">{t.education.achieveSubtitle}</h4>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', marginBottom: '12px' }}>
              {t.education.achieveDesc}
            </p>
            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', marginTop: '8px' }}>
              <span className="education-course-badge" style={{ borderColor: 'var(--primary)', color: 'var(--primary)' }}>{t.education.langEN}</span>
              <span className="education-course-badge" style={{ borderColor: 'var(--secondary)', color: 'var(--secondary)' }}>{t.education.langTR}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
