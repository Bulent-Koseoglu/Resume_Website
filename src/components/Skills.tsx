import { Code, Globe, Wrench, BookOpen } from 'lucide-react';

export default function Skills() {
  const skillCategories = [
    {
      title: 'Programming Languages',
      icon: <Code size={20} />,
      skills: ['C', 'C++', 'AVR C (Embedded)', 'C#', 'JavaScript'],
    },
    {
      title: 'Frameworks & Platforms',
      icon: <Globe size={20} />,
      skills: ['Unity 6 (URP)', 'OpenXR', 'XR Interaction Toolkit', 'NavMesh', 'Arduino', 'WOKWI Simulation'],
    },
    {
      title: 'Tools & Methodologies',
      icon: <Wrench size={20} />,
      skills: ['Git', 'GitHub', 'VS Code', 'OOP (Inheritance, Polymorphism, Encapsulation)', 'FSM (Finite State Machines)', 'Observer & Singleton Patterns'],
    },
    {
      title: 'Engineering Topics',
      icon: <BookOpen size={20} />,
      skills: [
        'VR/AR Development',
        'Embedded Systems',
        'Computer Networks',
        'Distributed Systems',
        'IoT Systems',
        'Physics-Based Simulation',
        'AI Agent Design',
      ],
    },
  ];

  return (
    <section id="skills" className="section container">
      <div className="section-header">
        <h2 className="section-title">Technical Skills</h2>
        <p className="section-subtitle">Core competencies covering low-level systems, immersive experiences, and software architecture.</p>
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
