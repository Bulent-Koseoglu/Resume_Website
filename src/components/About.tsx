import { Cpu, Network, MonitorPlay, Lightbulb } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function About() {
  const { t } = useLanguage();

  return (
    <section id="about" className="section container">
      <div className="section-header">
        <h2 className="section-title">{t.about.title}</h2>
        <p className="section-subtitle">{t.about.subtitle}</p>
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
            <div className="terminal-title">{t.about.terminalFile}</div>
            <div style={{ width: '42px' }}></div>
          </div>
          <div className="terminal-body">
            <div className="terminal-line">
              <span className="terminal-prompt">&gt;</span>
              <span>{t.about.terminalCmd}</span>
            </div>
            <div className="terminal-line">
              <span className="terminal-comment">{t.about.terminalComment}</span>
            </div>
            <div className="terminal-line">
              <span>&#123;</span>
            </div>
            <div className="terminal-line terminal-indent">
              <span className="terminal-keyword">{t.about.fieldName}</span>: <span className="terminal-string">"Bülent Köseoğlu"</span>,
            </div>
            <div className="terminal-line terminal-indent">
              <span className="terminal-keyword">{t.about.fieldRole}</span>: <span className="terminal-string">"Computer Engineering – Senior Student"</span>,
            </div>
            <div className="terminal-line terminal-indent">
              <span className="terminal-keyword">{t.about.fieldUniversity}</span>: <span className="terminal-string">"Yaşar University"</span>,
            </div>
            <div className="terminal-line terminal-indent">
              <span className="terminal-keyword">{t.about.fieldLocation}</span>: <span className="terminal-string">"Izmir, Turkey"</span>,
            </div>
            <div className="terminal-line terminal-indent">
              <span className="terminal-keyword">{t.about.fieldInterests}</span>: [
            </div>
            <div className="terminal-line terminal-indent" style={{ marginLeft: '40px' }}>
              <span className="terminal-string">"{t.about.interest1}"</span>,
            </div>
            <div className="terminal-line terminal-indent" style={{ marginLeft: '40px' }}>
              <span className="terminal-string">"{t.about.interest2}"</span>,
            </div>
            <div className="terminal-line terminal-indent" style={{ marginLeft: '40px' }}>
              <span className="terminal-string">"{t.about.interest3}"</span>,
            </div>
            <div className="terminal-line terminal-indent" style={{ marginLeft: '40px' }}>
              <span className="terminal-string">"{t.about.interest4}"</span>
            </div>
            <div className="terminal-line terminal-indent">
              ],
            </div>
            <div className="terminal-line terminal-indent">
              <span className="terminal-keyword">{t.about.fieldStatus}</span>: <span className="terminal-string">"{t.about.statusValue}"</span>
            </div>
            <div className="terminal-line">
              <span>&#125;</span>
            </div>
          </div>
        </div>

        {/* Text and Highlights */}
        <div className="about-details">
          <p className="about-paragraph">
            {t.about.paragraph}
          </p>

          <div className="about-highlights">
            <div className="highlight-item">
              <div className="highlight-icon">
                <MonitorPlay size={20} />
              </div>
              <div className="highlight-content">
                <h3 className="highlight-title">{t.about.highlightVRTitle}</h3>
                <p className="highlight-desc">{t.about.highlightVRDesc}</p>
              </div>
            </div>

            <div className="highlight-item">
              <div className="highlight-icon">
                <Cpu size={20} />
              </div>
              <div className="highlight-content">
                <h3 className="highlight-title">{t.about.highlightEmbeddedTitle}</h3>
                <p className="highlight-desc">{t.about.highlightEmbeddedDesc}</p>
              </div>
            </div>

            <div className="highlight-item">
              <div className="highlight-icon">
                <Network size={20} />
              </div>
              <div className="highlight-content">
                <h3 className="highlight-title">{t.about.highlightArchTitle}</h3>
                <p className="highlight-desc">{t.about.highlightArchDesc}</p>
              </div>
            </div>

            <div className="highlight-item">
              <div className="highlight-icon">
                <Lightbulb size={20} />
              </div>
              <div className="highlight-content">
                <h3 className="highlight-title">{t.about.highlightProtoTitle}</h3>
                <p className="highlight-desc">{t.about.highlightProtoDesc}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
