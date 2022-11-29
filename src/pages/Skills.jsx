// import SkillsHeader from '../components/skills/SkillsHeader';
// import SkillsList from '../components/skills/SkillsList';
// import { SKILLS_DATA } from '../skills.data';

const Skills = () => {
  return <>
        <section class="project py-5" id="project">
      <div class="container">
        <div class="row">
          <div class="col-lg-11 col-12">
            
            <div class="col-lg-12">
              <h2 class="text-primary">Skills</h2>
                <div>
                  <p>As a Full-Stack Developer, I am able to design, build, and maintain Single Page Application using JavaScript technologies.</p>
                  <p>My main tech stack is Angular (Frontend) and Node.js/NestJS (Backend) with databases like MySQL, PostgreSQL, MongoDB and so one. I also built several web applications using a few other technologies based on javascript like React, vue and Express, loopback, feathers.js etc.</p>
                  <p>After years of work experience as a contractual or freelancer, I am able to adapt to rapidly changing situations, and find creative solutions to immediate problems.</p>
                </div>
              
                <div className="skills-detailed-list mt-4">

                  <div className="skill-legende-box">
                    <h6 className="">Legende</h6>
                    <div className="skill-legende">
                      <div className="skill-legende-item strong"><span></span> Good knowledge</div>
                      <div className="skill-legende-item medium"><span></span> Medium knowledge</div>
                      <div className="skill-legende-item low"><span></span> Low knowledge</div>
                    </div>
                  </div>

                  <div class="skills-detailed-item">
                    <h4>UI</h4>
                    <ul class="skills-section-content single-line">
                      <li>
                        <span>HTML5 - CSS3,</span>
                      </li>
                      <li>
                        <span>Tailwind CSS,</span>
                      </li>
                      <li>
                        <span>Bootstrap,</span>
                      </li>
                      <li>
                        <span>SCSS,</span>
                      </li>
                      <li>
                        <span>Bulma,</span>
                      </li>
                      <li>
                        <span>Sementic UI,</span>
                      </li>
                      <li>
                        <span>Angular Material,</span>
                      </li>
                      <li>
                        <span>Material UI,</span>
                      </li>
                      <li>
                        <span>PrimeNG,</span>
                      </li>
                      <li>
                        <span>Kendo UI,</span>
                      </li>
                      <li>
                        <span>Nebular</span>
                      </li>

                    </ul>
                  </div>

                  <div class="skills-detailed-item">
                    <h4>Frontend</h4>
                    
                    <div class="skills-main-content">
                      <div>
                        <h6>Languages</h6>
                        <ul class="skills-section-content dark">
                          <li>
                            <span>JavaScript</span>
                          </li>
                          <li>
                            <span>TypeScript</span>
                          </li>
                        </ul>
                      </div>

                      <div>
                        <h6>Frameworks</h6>
                        <ul class="skills-section-content">
                          <li>
                            <span>Angular</span>
                          </li>
                          <li>
                            <span>React</span>
                          </li>
                          <li>
                            <span>Vue</span>
                          </li>
                        </ul>
                      </div>

                      <div>
                        <h6>State Management</h6>
                        <ul class="skills-section-content">
                          <li>
                            <span>Redux</span>
                          </li>
                          <li>
                            <span>RxJS</span>
                          </li>
                          <li>
                            <span>NgRX</span>
                          </li>
                          <li>
                            <span>NGXS</span>
                          </li>
                          <li>
                            <span>Redux Thunk</span>
                          </li>
                        </ul>
                      </div>

                      <div>
                        <h6>Web Sockets</h6>
                        <ul class="skills-section-content">
                          <li>
                            <span>Socket.io</span>
                          </li>
                        </ul>
                      </div>

                      <div>
                        <h6>WebRTC</h6>
                        <ul class="skills-section-content">
                          <li>
                            <span class="skill-medium">WebRTC</span>
                          </li>
                        </ul>
                      </div>

                      <div>
                        <h6>Accessibility</h6>
                        <ul class="skills-section-content">
                          <li>
                            <span>Accessibility</span>
                          </li>
                        </ul>
                      </div>

                      <div>
                        <h6>Testing</h6>
                        <ul class="skills-section-content">
                          <li>
                            <span>Jest</span>
                          </li>
                          <li>
                            <span>Jasmine</span>
                          </li>
                          <li>
                            <span>Karma</span>
                          </li>
                          <li>
                            <span>React Testing Library</span>
                          </li>
                          <li>
                            <span className="skill-medium">Angular lib</span>
                          </li>
                          <li>
                            <span  className="skill-medium">Cypress</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div class="skills-detailed-item">
                    <h4>Backend</h4>
                    <div class="skills-main-content">
                      <div>
                        <h6>Languages</h6>
                        <ul class="skills-section-content dark">
                          <li>
                            <span>JavaScript Node.js</span>
                          </li>
                          <li>
                            <span>TypeScript Node.js</span>
                          </li>
                        </ul>
                      </div>

                      <div>
                        <h6>Frameworks</h6>
                        <ul  class="skills-section-content">
                          <li>
                            <span>Express</span>
                          </li>
                          <li>
                            <span>Nestjs</span>
                          </li>
                          <li>
                            <span  className="skill-medium">Hapi</span>
                          </li>
                          <li>
                            <span>Feathers</span>
                          </li>
                          <li>
                            <span>Loopback</span>
                          </li>
                        </ul>
                      </div>

                      <div>
                        <h6>ORM</h6>
                        <ul  class="skills-section-content">
                          <li>
                            <span>Prisma</span>
                          </li>
                          <li>
                            <span>Typeorm</span>
                          </li>
                          <li>
                            <span>Squelize</span>
                          </li>
                        </ul>
                      </div>

                      <div>
                        <h6>Web Socket</h6>
                        <ul  class="skills-section-content">
                          <li>
                            <span>Socket.io</span>
                          </li>
                        </ul>
                      </div>
                    
                      <div>
                        <h6>Testing</h6>
                        <ul class="skills-section-content">
                          <li>
                            <span>Jest</span>
                          </li>
                          <li>
                            <span className="skill-medium">Cypress</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div class="skills-detailed-item">
                    <h4>Databases</h4>

                    <ul  class="skills-section-content single-line">
                      <li>
                        <span>MySQL,</span>
                      </li>
                      <li>
                        <span className="skill-medium">PostgreSQL,</span>
                      </li>
                      <li>
                        <span>MongoDB,</span>
                      </li>
                      <li>
                        <span className="skill-medium">DinamoDB,</span>
                      </li>
                      <li>
                        <span>Redis,</span>
                      </li>
                      <li>
                        <span className="skill-low">Elastic Search</span>
                      </li>
                    </ul>
                  </div>

                  <div class="skills-detailed-item">
                    <h4>Transpiler</h4>

                    <ul class="skills-section-content single-line">
                      <li>Babel,</li>
                      <li>Webpack,</li>
                      <li className="skill-medium">Vite</li>
                    </ul>
                  </div>

                  <div class="skills-detailed-item">
                    <h4>Devops</h4>

                    <div class="skills-main-content">
                      <div>
                        <h6>Containerization</h6>
                        <ul  class="skills-section-content">
                          <li>
                            <span>Docker</span>
                          </li>
                          <li>
                            <span>Docker Compose</span>
                          </li>
                        </ul>
                      </div>
                      
                      <div>
                        <h6>Ochestration</h6>
                        <ul  class="skills-section-content">
                          <li>
                            <span>Docker Swarm</span>
                          </li>
                          <li>
                            <span className="skill-low">Ansible</span>
                          </li>
                          <li>
                            <span className="skill-medium">Kubernetes</span>
                          </li>
                        </ul>
                      </div>

                      <div>
                        <h6>Cloud provider</h6>
                        <ul class="skills-section-content">
                          <li>
                            <span className="skill-medium">AWS</span>
                          </li>
                        </ul>
                      </div>
                          
                      <div>
                        <h6>CI/CD</h6>
                        <ul  class="skills-section-content">
                          <li>
                            <span>Jenkins</span>
                          </li>
                          <li>
                            <span>Gitlab-CI</span>
                          </li>
                          <li>
                            <span className="skill-medium">Circle CI</span>
                          </li>
                          <li>
                            <span className="skill-medium">Github Action</span>
                          </li>
                        </ul>
                      </div>

                      <div>
                        <h6>Monitoring</h6>
                        <ul class="skills-section-content">
                          <li>
                            <span className="skill-low">Prometheus</span>
                          </li>
                          <li>
                            <span className="skill-low">Grafana</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div class="skills-detailed-item">
                    <h4>Microservices</h4>
                    <ul  class="skills-section-content single-line">
                      <li>
                        <span>Nx,</span>
                      </li>
                      <li>
                        <span className="skill-medium">Single SPA</span>
                      </li>
                    </ul>
                  </div>

                  <div class="skills-detailed-item">
                    <h4>Methodoligie</h4>
                    <ul  class="skills-section-content single-line">
                      <li>
                        <span>SCRUM,</span>
                      </li>
                      <li>
                        <span>Behavior Driver Development (BDD),</span>
                      </li>
                      <li>
                        <span className="skill-medium">Domain Driver Development (DDD),</span>
                      </li>
                      <li>
                        <span>Test Driver Development (TDD),</span>
                      </li>
                    </ul>
                  </div>

                  <div class="skills-detailed-item">
                    <h4>OS</h4>
                    <ul class="skills-section-content single-line">
                      <li>Linux,</li>
                      <li>OS X,</li>
                      <li>Windows</li>
                    </ul>
                  </div>
                </div>

              </div>
            </div>
          </div>
      </div>
    </section>
  </>
}

export default Skills;