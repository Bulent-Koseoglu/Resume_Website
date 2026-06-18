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
              <span className="terminal-keyword">"role"</span>: <span className="terminal-string">"Computer Engineering Student"</span>,
            </div>
            <div className="terminal-line terminal-indent">
              <span className="terminal-keyword">"location"</span>: <span className="terminal-string">"İzmir, Türkiye"</span>,
            </div>
            <div className="terminal-line terminal-indent">
              <span className="terminal-keyword">"interests"</span>: [
            </div>
            <div className="terminal-line terminal-indent" style={{ marginLeft: '40px' }}>
              <span className="terminal-string">"Software Development"</span>,
            </div>
            <div className="terminal-line terminal-indent" style={{ marginLeft: '40px' }}>
              <span className="terminal-string">"Computer Networks"</span>,
            </div>
            <div className="terminal-line terminal-indent" style={{ marginLeft: '40px' }}>
              <span className="terminal-string">"AR/VR Technologies"</span>,
            </div>
            <div className="terminal-line terminal-indent" style={{ marginLeft: '40px' }}>
              <span className="terminal-string">"AI-based Applications"</span>
            </div>
            <div className="terminal-line terminal-indent">
              ],
            </div>
            <div className="terminal-line terminal-indent">
              <span className="terminal-keyword">"status"</span>: <span className="terminal-string">"Seeking Internship Opportunities"</span>
            </div>
            <div className="terminal-line">
              <span>&#125;</span>
            </div>
          </div>
        </div>

        {/* Text and Highlights */}
        <div className="about-details">
          <p className="about-paragraph">
            I am a Computer Engineering student who enjoys building practical technology projects. My interests include software development, computer networks, distributed systems, AR/VR applications, and AI-supported tools. I like working on projects that solve real-world problems and improve user experience.
          </p>

          <div className="about-highlights">
            <div className="highlight-item">
              <div className="highlight-icon">
                <Cpu size={20} />
              </div>
              <div className="highlight-content">
                <h3 className="highlight-title">Software Development</h3>
                <p className="highlight-desc">Building robust architectures with Python, Java, C#, C/C++.</p>
              </div>
            </div>

            <div className="highlight-item">
              <div className="highlight-icon">
                <Network size={20} />
              </div>
              <div className="highlight-content">
                <h3 className="highlight-title">Computer Networks</h3>
                <p className="highlight-desc">Designing, analyzing and configuring complex network topologies.</p>
              </div>
            </div>

            <div className="highlight-item">
              <div className="highlight-icon">
                <MonitorPlay size={20} />
              </div>
              <div className="highlight-content">
                <h3 className="highlight-title">AR/VR &amp; AI Tools</h3>
                <p className="highlight-desc">Developing immersive experiences and AI-powered interfaces.</p>
              </div>
            </div>

            <div className="highlight-item">
              <div className="highlight-icon">
                <Lightbulb size={20} />
              </div>
              <div className="highlight-content">
                <h3 className="highlight-title">Problem Solving</h3>
                <p className="highlight-desc">Focusing on algorithms, data structures and clean code design.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
