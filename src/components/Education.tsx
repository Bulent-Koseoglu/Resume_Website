import { GraduationCap, Calendar, Award } from 'lucide-react';

export default function Education() {
  const relevantCourses = [
    'Computer Networks',
    'Distributed Systems',
    'Object-Oriented Programming',
    'Data Structures',
    'Database Systems',
    'AR/VR Development',
    'Embedded Systems',
    'Microprocessors (AVR C)',
  ];

  return (
    <section id="education" className="section container">
      <div className="section-header">
        <h2 className="section-title">Education</h2>
        <p className="section-subtitle">My academic history, relevant coursework, and learning journey in computer engineering.</p>
      </div>

      <div className="education-timeline">
        <div className="education-card glass-card">
          <div className="education-date">
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
              <Calendar size={14} /> Sept 2022 - July 2026
            </span>
          </div>
          <div className="education-main">
            <h3 className="education-degree">Bachelor of Science in Computer Engineering</h3>
            <h4 className="education-university">Yaşar University, Izmir, Turkey</h4>
            <p style={{ color: 'var(--text-muted)', marginBottom: '16px', fontSize: '0.95rem' }}>
              Senior student focusing on software development, embedded systems, VR/AR applications, computer networks, and object-oriented architecture design.
            </p>
            
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--primary)', marginBottom: '24px', fontSize: '0.9rem', fontWeight: 500 }}>
              <GraduationCap size={16} /> Expected Graduation: July 2026
            </div>

            <h4 className="education-courses-title">Relevant Courses</h4>
            <div className="education-courses">
              {relevantCourses.map((course) => (
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
              <Award size={14} /> Languages & Achievements
            </span>
          </div>
          <div className="education-main">
            <h3 className="education-degree">Languages & Technical Focus</h3>
            <h4 className="education-university">Self-Directed Study & Game Jams</h4>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', marginBottom: '12px' }}>
              Active explorer of virtual reality development using Unity 6, embedded systems with Arduino and AVR C, autonomous machine control, and physics-based VR simulations. Published a mobile game during the Yaşar University Game Jam (48h).
            </p>
            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', marginTop: '8px' }}>
              <span className="education-course-badge" style={{ borderColor: 'var(--primary)', color: 'var(--primary)' }}>🇬🇧 English – B2 Level</span>
              <span className="education-course-badge" style={{ borderColor: 'var(--secondary)', color: 'var(--secondary)' }}>🇹🇷 Turkish – Native</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
