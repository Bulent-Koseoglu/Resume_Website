import { GraduationCap, Calendar, Award } from 'lucide-react';

export default function Education() {
  const relevantCourses = [
    'Computer Networks',
    'Distributed Systems',
    'Automata Theory',
    'Object-Oriented Programming',
    'Data Structures',
    'Database Systems',
    'AR/VR Development',
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
              <Calendar size={14} /> 2023 - Present
            </span>
          </div>
          <div className="education-main">
            <h3 className="education-degree">Bachelor of Science in Computer Engineering</h3>
            <h4 className="education-university">[University Name / Izmir Institute of Technology]</h4>
            <p style={{ color: 'var(--text-muted)', marginBottom: '16px', fontSize: '0.95rem' }}>
              Focused on software development paradigms, network protocols, systems programming, and high-performance computing architectures.
            </p>
            
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--primary)', marginBottom: '24px', fontSize: '0.9rem', fontWeight: 500 }}>
              <GraduationCap size={16} /> Expected Graduation: [Graduation Year / 2027]
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

        {/* Optional Secondary Achievement Timeline Item */}
        <div className="education-card glass-card">
          <div className="education-date">
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
              <Award size={14} /> Achievements
            </span>
          </div>
          <div className="education-main">
            <h3 className="education-degree">Academic Projects &amp; Tech Focus</h3>
            <h4 className="education-university">Self-Directed Study &amp; Competitions</h4>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>
              Active explorer of virtual reality development using Unity Engine, distributed computing proofs, smart agriculture systems incorporating IoT node devices, and AI-supported agent systems.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
