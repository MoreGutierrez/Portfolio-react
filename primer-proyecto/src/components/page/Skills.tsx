import './Skills.css';
import { Palette, HddNetwork, Database, Tools } from 'react-bootstrap-icons';

const Skills = () => {
  return (
    <main>
      <section className="skills-section" id="skills">
        <div className="heading">
          <h2 className="heading">My <span>Skills</span></h2>
        </div>

        <div className="skills-container">
          <div className="skills-box">
            <Palette /> {/*son los iconos de Bootstrap*/}
            <h3>Frontend</h3>
            <ul className="skills-list">
              <li className="skill-item">HTML, CSS & JavaScript</li>
              <li className="skill-item">TypeScript</li>
              <li className="skill-item">React</li>
            </ul>
          </div>

          <div className="skills-box">
            <HddNetwork /> {/*son los iconos de Bootstrap*/}
            <h3>Backend</h3>
            <ul className="skills-list">
              <li className="skill-item">Node.js</li>
              <li className="skill-item">NestJS</li>
            </ul>
          </div>

          <div className="skills-box">
            <Database /> {/*son los iconos de Bootstrap*/}
            <h3>Databases</h3>
            <ul className="skills-list">
              <li className="skill-item">MySQL</li>
              <li className="skill-item">MongoDB</li>
            </ul>
          </div>

          <div className="skills-box">
            <Tools /> {/*son los iconos de Bootstrap*/}
            <h3>Tools</h3>
            <ul className="skills-list">
              <li className="skill-item">Git & GitHub</li>
              <li className="skill-item">Postman</li>
              <li className="skill-item">Trello</li>
            </ul>
          </div>

        </div>
      </section>
    </main>
  );
};

export default Skills;