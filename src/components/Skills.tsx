import { Code, Globe, Wrench, BookOpen } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function Skills() {
  const { language, t } = useLanguage();

  const skillCategories = [
    {
      title: t.skills.catProgramming,
      icon: <Code size={20} />,
      skills: ['C', 'C++', language === 'tr' ? 'AVR C (Gömülü)' : 'AVR C (Embedded)', 'C#', 'JavaScript'],
    },
    {
      title: t.skills.catFrameworks,
      icon: <Globe size={20} />,
      skills: ['Unity 6 (URP)', 'OpenXR', 'XR Interaction Toolkit', 'NavMesh', 'Arduino', language === 'tr' ? 'WOKWI Simülasyonu' : 'WOKWI Simulation'],
    },
    {
      title: t.skills.catTools,
      icon: <Wrench size={20} />,
      skills: [
        'Git',
        'GitHub',
        'VS Code',
        language === 'tr' ? 'OOP (Kalıtım, Çok Biçimlilik, Kapsülleme)' : 'OOP (Inheritance, Polymorphism, Encapsulation)',
        language === 'tr' ? 'FSM (Sonlu Durum Makineleri)' : 'FSM (Finite State Machines)',
        language === 'tr' ? 'Observer & Singleton Kalıpları' : 'Observer & Singleton Patterns',
      ],
    },
    {
      title: t.skills.catTopics,
      icon: <BookOpen size={20} />,
      skills: [
        language === 'tr' ? 'VR/AR Geliştirme' : 'VR/AR Development',
        language === 'tr' ? 'Gömülü Sistemler' : 'Embedded Systems',
        language === 'tr' ? 'Bilgisayar Ağları' : 'Computer Networks',
        language === 'tr' ? 'Dağıtık Sistemler' : 'Distributed Systems',
        language === 'tr' ? 'IoT Sistemleri' : 'IoT Systems',
        language === 'tr' ? 'Fizik Tabanlı Simülasyon' : 'Physics-Based Simulation',
        language === 'tr' ? 'Yapay Zeka Ajan Tasarımı' : 'AI Agent Design',
      ],
    },
  ];

  return (
    <section id="skills" className="section container">
      <div className="section-header">
        <h2 className="section-title">{t.skills.title}</h2>
        <p className="section-subtitle">{t.skills.subtitle}</p>
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
