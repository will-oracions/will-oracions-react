import React from 'react';
// import html2canvas from 'html2canvas';
// import jsPDF from 'jspdf';

import * as config from '../config/app.config';

const APP_DOMAIN = config.APP_DOMAIN;

const Resume = () => {
  React.useEffect(() => window.scrollTo(0, 0), []);

  // const printDocument = () => {
  //   const id = 'resume-root' // divToPrint
  //   console.log('pinting the resume...');
  //   const input = document.getElementById(id);
  //   html2canvas(input)
  //     .then((canvas) => {
  //       const imgData = canvas.toDataURL('image/png');
  //       const pdf = new jsPDF();
  //       pdf.addImage(imgData, 'JPEG', 0, 0);
  //       // pdf.output('dataurlnewwindow');
  //       pdf.save("download.pdf");
  //     })
  //   ;
  // }

  return <>
  
  <div style={{position: 'relative', top: '-70px'}} id="resume-root">
        {/* <button onClick={printDocument}>download</button> */}
        <div className="resume-container">
          <div className="resume-header row">
              <div className="resume-header-left-part col-3">
                <img width="150" src="images/profile/profile.jpg" alt="profile avatar" />
              </div>
              <div className="resume-header-right-part col-9">
                <h4 className="resume-profile-name">Louis Mary MONJENGUE</h4>
                <h6 className="resume-profile-position">Full Stack Web Developer</h6>
                <div>
                  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 36 36"><path fill="currentColor" d="M26.54 18a19.38 19.38 0 0 0-.43-4h3.6a12.3 12.3 0 0 0-.67-1.6h-3.35a19.72 19.72 0 0 0-2.89-5.87a12.3 12.3 0 0 0-2.55-.76a17.83 17.83 0 0 1 3.89 6.59h-5.39V5.6h-1.5v6.77h-5.39a17.83 17.83 0 0 1 3.9-6.6a12.28 12.28 0 0 0-2.54.75a19.72 19.72 0 0 0-2.91 5.85H6.94A12.3 12.3 0 0 0 6.26 14h3.63a19.38 19.38 0 0 0-.43 4a19.67 19.67 0 0 0 .5 4.37H6.42A12.34 12.34 0 0 0 7.16 24h3.23a19.32 19.32 0 0 0 2.69 5.36a12.28 12.28 0 0 0 2.61.79A17.91 17.91 0 0 1 12 24h5.26v6.34h1.5V24H24a17.9 17.9 0 0 1-3.7 6.15a12.28 12.28 0 0 0 2.62-.81A19.32 19.32 0 0 0 25.61 24h3.2a12.34 12.34 0 0 0 .74-1.6H26a19.67 19.67 0 0 0 .54-4.4Zm-9.29 4.37h-5.74a17.69 17.69 0 0 1-.09-8.4h5.83Zm7.24 0h-5.74V14h5.83a18.21 18.21 0 0 1 .42 4a18.12 18.12 0 0 1-.51 4.37Z" class="clr-i-outline clr-i-outline-path-1"/><path fill="currentColor" d="M18 2a16 16 0 1 0 16 16A16 16 0 0 0 18 2Zm0 30a14 14 0 1 1 14-14a14 14 0 0 1-14 14Z" class="clr-i-outline clr-i-outline-path-2"/><path fill="none" d="M0 0h36v36H0z"/></svg>
                  <span> My Website </span>
                  <a href={APP_DOMAIN} target='_blank' rel="noreferrer">{APP_DOMAIN}</a>
                </div>
  
                <div className="resume-contact-card">
                  <ul className="resume-contact header">
                    <li>
                      <svg xmlns="http://www.w3.org/2000/svg" width="1.4em" height="1.4em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path fill="currentColor" d="M19 11.95q0-2.925-2.038-4.963Q14.925 4.95 12 4.95v-2q1.875 0 3.513.712q1.637.713 2.85 1.926q1.212 1.212 1.925 2.85Q21 10.075 21 11.95Zm-4 0q0-1.25-.875-2.125T12 8.95v-2q2.075 0 3.538 1.462Q17 9.875 17 11.95ZM19.95 21q-3.225 0-6.287-1.438q-3.063-1.437-5.425-3.8q-2.363-2.362-3.8-5.425Q3 7.275 3 4.05q0-.45.3-.75t.75-.3H8.1q.35 0 .625.225t.325.575l.65 3.5q.05.35-.012.637q-.063.288-.288.513L7 10.9q1.05 1.8 2.625 3.375T13.1 17l2.35-2.35q.225-.225.588-.338q.362-.112.712-.062l3.45.7q.35.075.575.337q.225.263.225.613v4.05q0 .45-.3.75t-.75.3Z"/></svg>
                      <strong>Phone</strong>&nbsp;+(237) 652033708 / 656914671</li>
                    <li>
                      <svg xmlns="http://www.w3.org/2000/svg" width="1.6em" height="1.6em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path fill="currentColor" d="M22 4H2v16h20V4zm-2 4l-8 5l-8-5V6l8 5l8-5v2z"/></svg>
                      <strong>Email</strong>&nbsp;Oracions.dev@gmail.com
                      </li>
                    <li>
                      <svg xmlns="http://www.w3.org/2000/svg" width="1.4em" height="1.4em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path fill="currentColor" d="M12 12q.825 0 1.413-.588Q14 10.825 14 10t-.587-1.413Q12.825 8 12 8q-.825 0-1.412.587Q10 9.175 10 10q0 .825.588 1.412Q11.175 12 12 12Zm0 9.625q-.2 0-.4-.075t-.35-.2Q7.6 18.125 5.8 15.363Q4 12.6 4 10.2q0-3.75 2.413-5.975Q8.825 2 12 2t5.587 2.225Q20 6.45 20 10.2q0 2.4-1.8 5.163q-1.8 2.762-5.45 5.987q-.15.125-.35.2q-.2.075-.4.075Z"/></svg>
                      <strong>Address</strong>&nbsp;Yaoundé, Cameroun
                    </li>
                  </ul>
                  <ul className="resume-contact social">
                    <span>
                      <a href="https://twitter.com/will_oracions" target="_blank" rel="noreferrer">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 273.5 222.3" role="img" aria-labelledby="ooq92vvwgg1j0cjya0fitgk1o2fr6uv" class="flex-shrink-0 octicon" width="1.6em" height="1.6em"><title id="ooq92vvwgg1j0cjya0fitgk1o2fr6uv">Twitter</title><path d="M273.5 26.3a109.77 109.77 0 0 1-32.2 8.8 56.07 56.07 0 0 0 24.7-31 113.39 113.39 0 0 1-35.7 13.6 56.1 56.1 0 0 0-97 38.4 54 54 0 0 0 1.5 12.8A159.68 159.68 0 0 1 19.1 10.3a56.12 56.12 0 0 0 17.4 74.9 56.06 56.06 0 0 1-25.4-7v.7a56.11 56.11 0 0 0 45 55 55.65 55.65 0 0 1-14.8 2 62.39 62.39 0 0 1-10.6-1 56.24 56.24 0 0 0 52.4 39 112.87 112.87 0 0 1-69.7 24 119 119 0 0 1-13.4-.8 158.83 158.83 0 0 0 86 25.2c103.2 0 159.6-85.5 159.6-159.6 0-2.4-.1-4.9-.2-7.3a114.25 114.25 0 0 0 28.1-29.1" fill="currentColor"></path></svg>  
                      </a>
                    </span>

                    <span>
                      <a href="mailto:oracions.dev@gmail.com">
                        <svg xmlns="http://www.w3.org/2000/svg" width="1.6em" height="1.6em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path fill="currentColor" d="M22 4H2v16h20V4zm-2 4l-8 5l-8-5V6l8 5l8-5v2z"/></svg>
                      </a>
                    </span>

                    <span>
                      <a href="https://www.linkedin.com/in/louis-mary-monjengue-a73214182" target="_blank" rel="noreferrer">
                        <svg xmlns="http://www.w3.org/2000/svg" width="1.6em" height="1.6em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path fill="currentColor" d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77Z"/></svg>
                      </a>
                    </span>

                    <span>
                        <a href="https://wa.me/+237652033708" target="_blank" rel="noreferrer">
                          <svg xmlns="http://www.w3.org/2000/svg" width="1.6em" height="1.6em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 256 258"><defs><linearGradient id="svgIDa" x1="50%" x2="50%" y1="100%" y2="0%"><stop offset="0%" stop-color="#1FAF38"/><stop offset="100%" stop-color="#60D669"/></linearGradient><linearGradient id="svgIDb" x1="50%" x2="50%" y1="100%" y2="0%"><stop offset="0%" stop-color="#F9F9F9"/><stop offset="100%" stop-color="#FFF"/></linearGradient></defs><path fill="url(#svgIDa)" d="M5.463 127.456c-.006 21.677 5.658 42.843 16.428 61.499L4.433 252.697l65.232-17.104a122.994 122.994 0 0 0 58.8 14.97h.054c67.815 0 123.018-55.183 123.047-123.01c.013-32.867-12.775-63.773-36.009-87.025c-23.23-23.25-54.125-36.061-87.043-36.076c-67.823 0-123.022 55.18-123.05 123.004"/><path fill="url(#svgIDb)" d="M1.07 127.416c-.007 22.457 5.86 44.38 17.014 63.704L0 257.147l67.571-17.717c18.618 10.151 39.58 15.503 60.91 15.511h.055c70.248 0 127.434-57.168 127.464-127.423c.012-34.048-13.236-66.065-37.3-90.15C194.633 13.286 162.633.014 128.536 0C58.276 0 1.099 57.16 1.071 127.416Zm40.24 60.376l-2.523-4.005c-10.606-16.864-16.204-36.352-16.196-56.363C22.614 69.029 70.138 21.52 128.576 21.52c28.3.012 54.896 11.044 74.9 31.06c20.003 20.018 31.01 46.628 31.003 74.93c-.026 58.395-47.551 105.91-105.943 105.91h-.042c-19.013-.01-37.66-5.116-53.922-14.765l-3.87-2.295l-40.098 10.513l10.706-39.082Z"/><path fill="#FFF" d="M96.678 74.148c-2.386-5.303-4.897-5.41-7.166-5.503c-1.858-.08-3.982-.074-6.104-.074c-2.124 0-5.575.799-8.492 3.984c-2.92 3.188-11.148 10.892-11.148 26.561c0 15.67 11.413 30.813 13.004 32.94c1.593 2.123 22.033 35.307 54.405 48.073c26.904 10.609 32.379 8.499 38.218 7.967c5.84-.53 18.844-7.702 21.497-15.139c2.655-7.436 2.655-13.81 1.859-15.142c-.796-1.327-2.92-2.124-6.105-3.716c-3.186-1.593-18.844-9.298-21.763-10.361c-2.92-1.062-5.043-1.592-7.167 1.597c-2.124 3.184-8.223 10.356-10.082 12.48c-1.857 2.129-3.716 2.394-6.9.801c-3.187-1.598-13.444-4.957-25.613-15.806c-9.468-8.442-15.86-18.867-17.718-22.056c-1.858-3.184-.199-4.91 1.398-6.497c1.431-1.427 3.186-3.719 4.78-5.578c1.588-1.86 2.118-3.187 3.18-5.311c1.063-2.126.531-3.986-.264-5.579c-.798-1.593-6.987-17.343-9.819-23.64"/></svg>
                        </a>
                    </span>
                  </ul>
                </div>
              </div>
          </div>
  
          <div className="row">
            <div className="resume-left-part col-3">
              <div className="">
                <h5 className="resume-section-title">Skills</h5>
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

                <div className="see-more">
                    <a href={`${APP_DOMAIN}/skills`} target='_blank' rel="noreferrer">see more</a>
                </div>
              </div>
              
              <div className="">
                <h5 className="resume-section-title">Certifiations</h5>
  
                <ul>
                  <li>Freecodecamp UI Design</li>
                  <li>Freecodecamp JavaScript Data Structure</li>
                  <li>Angular</li>
                  <li>React</li>
                </ul>

                <div className="see-more">  
                    <a href={`${APP_DOMAIN}#certifications`}  target='_blank' rel="noreferrer">see more</a>
                </div>
              </div>
  
              <div className="">
                <h5 className="resume-section-title">Formation</h5>
                <ul>
                  <li>
                    <div className="resume-formation-item">
                      <div className="resume-formation-header">
                        <div>Génie Logiciel</div>
                        <small>Since 2018</small>
                      </div>
                      <small>
                        <p>IUT of Douala</p>
                      </small>
                    </div>
                  </li>

                  <li>
                    <div className="resume-formation-item">
                      <div className="resume-formation-header">
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
              
              <div className="">
                <h5 className="resume-section-title">Language</h5>
                <ul>
                  <li>French - Native</li>
                  <li>English - Intermedite</li>
                </ul>
              </div>
  
              <div className="">
                <h5 className="resume-section-title">Hobbies</h5>
                <ul>
                  <li>Music</li>
                  <li>Travel</li>
                </ul>
              </div>
            </div>
            
            <div className="resume-right-part col-9">
              <div className="resume-section-content">
                <h5 className="resume-section-title">Profile</h5>
                <p>I'm in software developement since 2019, i have 3 years of experience, building simple website, backend API and Single Page Application.<br />
                I'm the founder of <strong>School Hozion</strong> startup who is a startup who provide a school management system tool to help to manage schools by making data flow management simple and easy.<br />
                I have also co-founded <strong>Kmerlinux Academy</strong> in 2021. It is a online academy, where students can follow training sessions about IT certifications, Interviews or Jobs preparation.</p>
                <p>You can get more informations about those projects in my portfolio website at:<br /> <a href={APP_DOMAIN} target='_blank' rel="noreferrer"><span>{APP_DOMAIN}</span></a></p>
              </div>
              
              <div>
                <h5 className="resume-section-title">Experience</h5>
                
                <div className="resume-projects">
                  <div className="resume-projects-item">
                    <div className="resume-projects-item-header">
                      <div className="resume-projects-item-header-position">JavaScript Backend Engineer</div>
                      <div className="resume-projects-item-header-company">Nohellef - Yaoundé, Cameroon</div>
                    </div>
                    <div className="resume-projects-item-periode">
                      <small>Febuary - July 2022</small><span> · </span> 
                      <small>5 months</small>
                    </div>
                    <div>
                      <p>Building E-leaning plateforme</p>
                    </div>
                  </div>

                  <div className="resume-projects-item">
                    <div className="resume-projects-item-header">
                      <div className="resume-projects-item-header-position">Frontend Angular Developer</div>
                      <div className="resume-projects-item-header-company">Miqo - Yaoundé, Cameroon</div>
                    </div>
                    <div className="resume-projects-item-periode">
                      <small>September - October 2021</small><span> · </span> 
                      <small>2 months</small>
                    </div>
                    <div>
                      <p>Building the back office of an micro finance comapny</p>
                    </div>
                  </div>


                  <div className="resume-projects-item">
                    <div className="resume-projects-item-header">
                      <div className="resume-projects-item-header-position">Full Stack JavaScript Developer</div>
                      <div className="resume-projects-item-header-company">Datnek - Belgium</div>
                    </div>
                    <div className="resume-projects-item-periode">
                      <small>October 2021 - November 2022</small><span> · </span> 
                      <small>1 year 3 months</small>
                    </div>
                    <div>
                      <p>Building E-leaning plateforme called Brain-maker and a professional social network called Delenscio</p>
                    </div>
                  </div>

                  <div className="resume-projects-item">
                    <div className="resume-projects-item-header">
                      <div className="resume-projects-item-header-position">Frontend React Developer</div>
                      <div className="resume-projects-item-header-company">Dastudy - Douala, Cameroon</div>
                    </div>
                    <div className="resume-projects-item-periode">
                      <small>September - july 2021</small><span> · </span> 
                      <small>10 months</small>
                    </div>
                    <div>
                      <p>Building the back office of an micro finance comapny</p>
                    </div>
                  </div>

                  <div className="resume-projects-item">
                    <div className="resume-projects-item-header">
                      <div className="resume-projects-item-header-position">Web Developer</div>
                      <div className="resume-projects-item-header-company">ZLT - Douala, Cameroon</div>
                    </div>
                    <div className="resume-projects-item-periode">
                      <small>January - August 2020</small><span> · </span> 
                      <small>8 months</small>
                    </div>
                    <div>
                      <p>Building website for digital campanies</p>
                    </div>
                  </div>
                  
                </div>
                <div className="see-more">
                    <a href={`${APP_DOMAIN}/coding`} target='_blank' rel="noreferrer">see more</a>
                </div>
              </div>
              
            </div>
          </div>
        </div>
    </div>

  
  </>;
}

export default Resume;