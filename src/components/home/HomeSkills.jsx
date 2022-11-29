import { Link } from 'react-router-dom';

const HomeSkills = () => {
  return (
    <>
     <section className="project py-5" id="project">
      <div className="container">
              
        <div className="row">
          <div className="col-lg-11 col-12">

              <div className="col-lg-12">
                <h2 className="text-primary">Skills</h2>

                <div className="skills-list">
                  <div className="skills-item">
                    <h6>UI</h6>
                    <ul>
                      <li>HTML5 - CSS3</li>
                      <li>Tailwind CSS</li>
                      <li>Bootstrap</li>
                    </ul>
                  </div>

                  <div className="skills-item">
                    <h6>Frontend</h6>
                    <ul>
                      <li>Angular</li>
                      <li>React</li>
                      <li>Vue</li>
                    </ul>
                  </div>

                  <div className="skills-item">
                    <h6>Backend</h6>
                    <ul>
                      <li>Node.js</li>
                      <li>Express</li>
                      <li>Nestjs</li>
                    </ul>
                  </div>

                  <div className="skills-item">
                    <h6>Database</h6>
                    <ul>
                      <li>MySQL</li>
                      <li>PostgreSQL</li>
                      <li>MongoDB</li>
                    </ul>
                  </div>

                  <div className="skills-item">
                    <h6>CI/CD</h6>
                    <ul>
                      <li>Docker</li>
                      <li>Kubernetes</li>
                      <li>AWS</li>
                    </ul>
                  </div>

                  <div className="skills-item">
                    <h6>Microservices</h6>
                    <ul>
                      <li>Nx</li>
                      <li>Single SPA</li>
                    </ul>
                  </div>

                  <div className="skills-item">
                    <h6>Methodoligie</h6>
                    <ul>
                      <li>SCRUM</li>
                      <li>BDD</li>
                      <li>DDD</li>
                    </ul>
                  </div>

                  <div className="skills-item">
                    <h6>OS</h6>
                    <ul>
                      <li>Windows</li>
                      <li>Linux</li>
                    </ul>
                  </div>
                </div>

                <Link to="/skills">
                  <div>
                    <a href="./skills.html" className="btn custom-btn custom-btn-bg custom-btn-link">See all</a>
                  </div>
                </Link>
              </div>


          </div>
        </div>
      </div>
    </section>
    </>
  );
}

export default HomeSkills;