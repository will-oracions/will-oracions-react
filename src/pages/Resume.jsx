const APP_DOMAIN = process.env.REACT_APP_DOMAIN;

const Resume = () => {
  return <>
  
  <div style={{position: 'relative', top: '-70px'}} id="resume-root">
        <div class="resume-container">
          <div class="resume-header row">
              <div class="resume-header-left-part col-3">
                <img width="150" src="images/profile/profile.jpg" alt="profile avatar" />
              </div>
              <div class="resume-header-right-part col-9">
                <h4 class="resume-profile-name">Louis Mary MONJENGUE</h4>
                <h6 class="resume-profile-position">Full Stack Web Developer</h6>
                <div>My Website&nbsp;<a href={APP_DOMAIN}>{APP_DOMAIN}</a></div>
  
                <div class="resume-contact-card">
                  <ul class="resume-contact">
                    <li><strong>Phone</strong>&nbsp;+(237) 652033708 / 656914671</li>
                    <li><strong>Email</strong>&nbsp;Oracions.dev@gmail.com</li>
                    <li><strong>Address</strong>&nbsp;Yaoundé, Cameroun</li>
                  </ul>
                  <ul class="resume-contact social">
                    <li>Github</li>
                    <li>Twitter</li>
                    <li>LinkedIn</li>
                  </ul>
                </div>
              </div>
          </div>
  
          <div class="row">
            <div class="resume-left-part col-3">
              <div class="">
                <h5 class="resume-section-title">Skills</h5>
                <ul>
                  <li>
                    <span>JavaScript, TypeScript</span>
                  </li>
                  <li>
                    <div>
                      
                      <div>
                        Angular, React, Vue
                      </div>
                    </div>
                  </li>
                  <li>
                    <span>Node.js, Express, Nestjs</span>
                  </li>
                  <li>
                    <span>Docker, Kubernetes</span>
                  </li>
                  <li>
                    <span>Devops, AWS</span>
                  </li>
                  <li>
                    <span>MySQL, MongoDB, Elastic Search</span>
                  </li>
                </ul>

                <div class="see-more">
                    <a href={`${APP_DOMAIN}/skills`}>see more</a>
                </div>
              </div>
              
              <div class="">
                <h5 class="resume-section-title">Certifiations</h5>
  
                <ul>
                  <li>Freecodecamp UI Design</li>
                  <li>Freecodecamp JavaScript Data Structure</li>
                  <li>Angular</li>
                  <li>React</li>
                </ul>

                <div class="see-more">  
                    <a href={`${APP_DOMAIN}`}>see more</a>
                </div>
              </div>
  
              <div class="">
                <h5 class="resume-section-title">Formation</h5>
                <ul>
                  <li>
                    <div class="resume-formation-item">
                      <div class="resume-formation-header">
                        <div>Génie Logiciel</div>
                        <small>Since 2018</small>
                      </div>
                      <small>
                        <p>IUT of Douala</p>
                      </small>
                    </div>
                  </li>

                  <li>
                    <div class="resume-formation-item">
                      <div class="resume-formation-header">
                        <div>Mathématique</div>
                        <small>2016 - 2018</small>
                      </div>
                      <small>
                        <p>University of Yaoundé I</p>
                      </small>
                    </div>
                  </li>
                </ul>
              </div> 
              
              <div class="">
                <h5 class="resume-section-title">Language</h5>
                <ul>
                  <li>French - Native</li>
                  <li>English - Intermedite</li>
                </ul>
              </div>
  
              <div class="">
                <h5 class="resume-section-title">Hobbies</h5>
                <ul>
                  <li>Music</li>
                  <li>Travel</li>
                </ul>
              </div>
            </div>
            
            <div class="resume-right-part col-9">
              <div class="resume-section-content">
                <h5 class="resume-section-title">Profile</h5>
                <p>I'm in software developement since 2019, i have 3 years of experience, building simple website, backend API and Single Page Application.<br />
                I'm the founder of <strong>School Hozion</strong> startup who is a startup who provide a school management system tool to help to manage schools by making data flow management simple and easy.<br />
                I have also co-founded <strong>Kmerlinux Academy</strong> in 2021. It is a online academy, where students can follow training sessions about IT certifications, Interviews or Jobs preparation.</p>
                <p>You can get more informations about those projects in my portfolio website at:<br /> <a href={APP_DOMAIN}><span>{APP_DOMAIN}</span></a></p>
              </div>
              
              <div>
                <h5 class="resume-section-title">Experience</h5>
                
                <div class="resume-projects">
                  <div class="resume-projects-item">
                    <div class="resume-projects-item-header">
                      <div class="resume-projects-item-header-position">JavaScript Backend Engineer</div>
                      <div class="resume-projects-item-header-company">Nohellef - Yaoundé, Cameroon</div>
                    </div>
                    <div class="resume-projects-item-periode">
                      <small>Febuary - July 2022</small>
                      <small>5 months</small>
                    </div>
                    <div>
                      <p>Building E-leaning plateforme</p>
                    </div>
                  </div>

                  <div class="resume-projects-item">
                    <div class="resume-projects-item-header">
                      <div class="resume-projects-item-header-position">Frontend Angular Developer</div>
                      <div class="resume-projects-item-header-company">Miqo - Yaoundé, Cameroon</div>
                    </div>
                    <div class="resume-projects-item-periode">
                      <small>September - October 2021</small>
                      <small>2 months</small>
                    </div>
                    <div>
                      <p>Building the back office of an micro finance comapny</p>
                    </div>
                  </div>


                  <div class="resume-projects-item">
                    <div class="resume-projects-item-header">
                      <div class="resume-projects-item-header-position">Full Stack JavaScript Developer</div>
                      <div class="resume-projects-item-header-company">Datnek - Belgium</div>
                    </div>
                    <div class="resume-projects-item-periode">
                      <small>October 2021 - November 2022</small>
                      <small>1 year 3 months</small>
                    </div>
                    <div>
                      <p>Building E-leaning plateforme called Brain-maker and a professional social network called Delenscio</p>
                    </div>
                  </div>

                  <div class="resume-projects-item">
                    <div class="resume-projects-item-header">
                      <div class="resume-projects-item-header-position">Frontend React Developer</div>
                      <div class="resume-projects-item-header-company">Dastudy - Douala, Cameroon</div>
                    </div>
                    <div class="resume-projects-item-periode">
                      <small>September - july 2021</small>
                      <small>10 months</small>
                    </div>
                    <div>
                      <p>Building the back office of an micro finance comapny</p>
                    </div>
                  </div>

                  <div class="resume-projects-item">
                    <div class="resume-projects-item-header">
                      <div class="resume-projects-item-header-position">Web Developer</div>
                      <div class="resume-projects-item-header-company">ZLT - Douala, Cameroon</div>
                    </div>
                    <div class="resume-projects-item-periode">
                      <small>January - August 2020</small>
                      <small>8 months</small>
                    </div>
                    <div>
                      <p>Building website for digital campanies</p>
                    </div>
                  </div>
                  
                </div>
                <div class="see-more">
                    <a href={`${APP_DOMAIN}/coding`}>see more</a>
                </div>
              </div>
              
            </div>
          </div>
        </div>
    </div>

  
  </>;
}

export default Resume;