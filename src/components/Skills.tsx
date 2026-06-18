import { Code, Globe, Wrench, BookOpen } from 'lucide-react';

export default function Skills() {
  const skillCategories = [
    {
      title: 'Programming Languages',
      icon: <Code size={20} />,
      skills: ['Python', 'Java', 'C#', 'C / C++', 'JavaScript'],
    },
    {
      title: 'Web Development',
      icon: <Globe size={20} />,
      skills: ['HTML', 'CSS', 'JavaScript', 'React'],
    },
    {
      title: 'Tools & Platforms',
      icon: <Wrench size={20} />,
      skills: ['Git', 'GitHub', 'VS Code', 'Unity', 'Cisco Packet Tracer', 'Figma'],
    },
    {
      title: 'Computer Engineering Topics',
      icon: <BookOpen size={20} />,
      skills: [
        'Computer Networks',
        'Distributed Systems',
        'Object-Oriented Programming',
        'Data Structures',
        'Database Systems',
        'AR/VR Development',
        'IoT Systems',
      ],
    },
  ];

  return (
    <section id="skills" className="section container">
      <div className="section-header">
        <h2 className="section-title">My Skills</h2>
        <p className="section-subtitle">Technical competencies and academic topics I've mastered during my engineering studies.</p>
      </div>

      <div className="skills-grid">
        {skillCategories.map((cat, index) => (
          <div key={index} className="skills-category glass-card">
            <h3 className="skills-category-title">
              {cat.icon}
              {cat.title}
            </h3>
            <div className="skills-list">
              {cat.skills.map((skill) => (
                <span key={skill} className="skill-badge">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
