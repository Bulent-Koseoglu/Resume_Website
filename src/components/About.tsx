import { Cpu, Network, MonitorPlay, Lightbulb } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="section container">
      <div className="section-header">
        <h2 className="section-title">About Me</h2>
        <p className="section-subtitle">A brief overview of my focus areas and what drives my work in technology.</p>
      </div>

      <div className="about-grid">
        {/* Terminal/IDE Mockup */}
        <div className="about-terminal">
          <div className="terminal-header">
            <div className="terminal-dots">
              <span className="terminal-dot terminal-dot-red"></span>
              <span className="terminal-dot terminal-dot-yellow"></span>
              <span className="terminal-dot terminal-dot-green"></span>
            </div>
            <div className="terminal-title">developer_profile.json</div>
            <div style={{ width: '42px' }}></div>
          </div>
          <div className="terminal-body">
            <div className="terminal-line">
              <span className="terminal-prompt">&gt;</span>
              <span>cat student.json</span>
            </div>
            <div className="terminal-line">
              <span className="terminal-comment">// Personal Information</span>
            </div>
            <div className="terminal-line">
              <span>&#123;</span>
            </div>
            <div className="terminal-line terminal-indent">
              <span className="terminal-keyword">"name"</span>: <span className="terminal-string">"Bülent Köseoğlu"</span>,
            </div>
            <div className="terminal-line terminal-indent">
              <span className="terminal-keyword">"role"</span>: <span className="terminal-string">"Computer Engineering – Senior Student"</span>,
            </div>
            <div className="terminal-line terminal-indent">
              <span className="terminal-keyword">"university"</span>: <span className="terminal-string">"Yaşar University"</span>,
            </div>
            <div className="terminal-line terminal-indent">
              <span className="terminal-keyword">"location"</span>: <span className="terminal-string">"Izmir, Turkey"</span>,
            </div>
            <div className="terminal-line terminal-indent">
              <span className="terminal-keyword">"interests"</span>: [
            </div>
            <div className="terminal-line terminal-indent" style={{ marginLeft: '40px' }}>
              <span className="terminal-string">"VR/AR Development"</span>,
            </div>
            <div className="terminal-line terminal-indent" style={{ marginLeft: '40px' }}>
              <span className="terminal-string">"Embedded Systems"</span>,
            </div>
            <div className="terminal-line terminal-indent" style={{ marginLeft: '40px' }}>
              <span className="terminal-string">"Computer Networks"</span>,
            </div>
            <div className="terminal-line terminal-indent" style={{ marginLeft: '40px' }}>
              <span className="terminal-string">"Game Development"</span>
            </div>
            <div className="terminal-line terminal-indent">
              ],
            </div>
            <div className="terminal-line terminal-indent">
              <span className="terminal-keyword">"status"</span>: <span className="terminal-string">"Seeking Internship & Entry-Level Opportunities"</span>
            </div>
            <div className="terminal-line">
              <span>&#125;</span>
            </div>
          </div>
        </div>

        {/* Text and Highlights */}
        <div className="about-details">
          <p className="about-paragraph">
            I am a senior Computer Engineering student at Yaşar University with hands-on experience in VR simulation development using Unity 6 and OpenXR, embedded systems with Arduino and AVR C, and web-based application architecture. I build projects that combine software engineering fundamentals with emerging technologies — from physics-based VR boxing simulations to autonomous soil processing machines.
          </p>

          <div className="about-highlights">
            <div className="highlight-item">
              <div className="highlight-icon">
                <MonitorPlay size={20} />
              </div>
              <div className="highlight-content">
                <h3 className="highlight-title">VR/AR Development</h3>
                <p className="highlight-desc">Building immersive simulations with Unity 6, OpenXR, XR Interaction Toolkit, and NavMesh AI.</p>
              </div>
            </div>

            <div className="highlight-item">
              <div className="highlight-icon">
                <Cpu size={20} />
              </div>
              <div className="highlight-content">
                <h3 className="highlight-title">Embedded Systems</h3>
                <p className="highlight-desc">Arduino Uno, AVR C firmware, sensor integration, real-time control systems.</p>
              </div>
            </div>

            <div className="highlight-item">
              <div className="highlight-icon">
                <Network size={20} />
              </div>
              <div className="highlight-content">
                <h3 className="highlight-title">Software Architecture</h3>
                <p className="highlight-desc">OOP design patterns (Observer, Singleton, FSM), scalable web platforms, clean code.</p>
              </div>
            </div>

            <div className="highlight-item">
              <div className="highlight-icon">
                <Lightbulb size={20} />
              </div>
              <div className="highlight-content">
                <h3 className="highlight-title">Rapid Prototyping</h3>
                <p className="highlight-desc">Game Jam experience: shipped a complete mobile game in 48 hours on Itch.io.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
