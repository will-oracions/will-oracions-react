import React from 'react';
import { Carousel } from 'react-responsive-carousel';

import "react-responsive-carousel/lib/styles/carousel.min.css";

import geocadreVideo from '../assets/myWorks/videos/geocadre.mp4';
import nohellefVideo from '../assets/myWorks/videos/nohellef.mp4';
import brainMakerVideo from '../assets/myWorks/videos/brain-maker.mp4';

import jeconduisImage from '../assets/myWorks/images/jeconduis.png';
import jeconduis2Image from '../assets/myWorks/images/jeconduis2.png';
import jeconduis3Image from '../assets/myWorks/images/jeconduis3.png';
// import geocadreImage from '../assets/myWorks/images/geocadre.png';
// import geocadre1Image from '../assets/myWorks/images/geocadre1.png';
// import geocadre2Image from '../assets/myWorks/images/geocadre2.png';
import dastudyImage from '../assets/myWorks/images/dastudy.png';
import dastudy2Image from '../assets/myWorks/images/dastudy2.png';
import dastudy3Image from '../assets/myWorks/images/dastudy3.png';

const Coding = () => {
  React.useEffect(() => window.scrollTo(0, 0), []);

  return <>
  
  <section class="coding py-5" id="coding">
      <div class="container">
        <div class="row">
          <div class="col-lg-11 col-12">
            
            <div class="col-lg-12">
              <h2 class="text-primary">Coding</h2>
                <div>
                  <p>My main tech stack is Angular (Frontend) and Node.js/NestJS (Backend) with databases like MySQL, PostgreSQL, MongoDB and so one. I also built several web applications using a few other technologies based on javascript like React, vue and Express, loopback, feathers.js etc.</p>
                </div>
              
       
                <div class="conding-list">
                  
                  <div class="coding-list-item">
                    <div class="coding-list-item-postion">
                      <h3>Frontend Developer</h3>
                      <p>Freelance</p>
                    </div>

                    <div class="row mt-4">
                      <div class="coding-company col-md-5 col-12">
                        <div class="coding-company-logo">
                          <img height="70" src="images/conding/geocadre-logo.png" alt="" />
                        </div>
                      </div>
                      
                      <div class="col-md-7 col-12">
                        <div>
                          <h5>
                            <svg class="octicon octicon-organization" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M1.5 14.25c0 .138.112.25.25.25H4v-1.25a.75.75 0 01.75-.75h2.5a.75.75 0 01.75.75v1.25h2.25a.25.25 0 00.25-.25V1.75a.25.25 0 00-.25-.25h-8.5a.25.25 0 00-.25.25v12.5zM1.75 16A1.75 1.75 0 010 14.25V1.75C0 .784.784 0 1.75 0h8.5C11.216 0 12 .784 12 1.75v12.5c0 .085-.006.168-.018.25h2.268a.25.25 0 00.25-.25V8.285a.25.25 0 00-.111-.208l-1.055-.703a.75.75 0 11.832-1.248l1.055.703c.487.325.779.871.779 1.456v5.965A1.75 1.75 0 0114.25 16h-3.5a.75.75 0 01-.197-.026c-.099.017-.2.026-.303.026h-3a.75.75 0 01-.75-.75V14h-1v1.25a.75.75 0 01-.75.75h-3zM3 3.75A.75.75 0 013.75 3h.5a.75.75 0 010 1.5h-.5A.75.75 0 013 3.75zM3.75 6a.75.75 0 000 1.5h.5a.75.75 0 000-1.5h-.5zM3 9.75A.75.75 0 013.75 9h.5a.75.75 0 010 1.5h-.5A.75.75 0 013 9.75zM7.75 9a.75.75 0 000 1.5h.5a.75.75 0 000-1.5h-.5zM7 6.75A.75.75 0 017.75 6h.5a.75.75 0 010 1.5h-.5A.75.75 0 017 6.75zM7.75 3a.75.75 0 000 1.5h.5a.75.75 0 000-1.5h-.5z"></path></svg>
                            <span>Geocadre</span>
                          </h5>
                        </div>

                        <div>
                          <div>
                            <svg class="octicon octicon-location" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M11.536 3.464a5 5 0 010 7.072L8 14.07l-3.536-3.535a5 5 0 117.072-7.072v.001zm1.06 8.132a6.5 6.5 0 10-9.192 0l3.535 3.536a1.5 1.5 0 002.122 0l3.535-3.536zM8 9a2 2 0 100-4 2 2 0 000 4z"></path></svg>
                            <span>Paris, France</span>
                          </div>

                          <div>
                            <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-link">
                                <path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path>
                            </svg>
                            <a href="https://geocadre-design.netlify.com" rel="noreferrer" target="_blank">https://geocadre-design.netlify.com</a>
                          </div>

                          <div>
                            <span>Oct 26 - 03 Nov, 2022 · 1 week</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="mt-4">
                      <p>J'ai construis et designé les interfaces du site web pour améliorer le visuel et l'expérience des utilisateurs.</p>
                      <p><strong>Skills:&nbsp;</strong>HTML · CSS · JavaScript</p>
                    </div>


                    <div>
                      <div class="col-lg-12">

                      <div>
                            {/* <img src={jsDSA} alt="JavaScript Datastructure Certification" /> */}
                            <video width={'100%'} src={geocadreVideo} autoPlay loop></video>
                            <p className="legend">Geocadre template design</p>
                        </div>
  
                        {/* <div class="owl-carousel owl-theme">
                          <div class="item">
                            <div class="project-info">
                              <img src="images/project/project-image01.png" class="img-fluid" alt="project" />
                            </div>
                          </div>
    
                          <div class="item">
                            <div class="project-info">
                              <img src="images/project/project-image02.png" class="img-fluid" alt="project" />
                            </div>
                          </div>
                        </div> */}
                      </div>
                    </div>
                  </div>
                  
                  <div class="coding-list-item">
                    <div class="coding-list-item-postion">
                      <h3>Frontend Angular Developer</h3>
                      <p>Freelance</p>
                    </div>

                    <div class="row mt-4">
                      <div class="coding-company col-md-5 col-12">
                        <div class="coding-company-logo">
                          <img height="70" src="images/conding/jecondis-logo2.png" alt="" />
                        </div>
                      </div>
                      
                      <div class="col-md-7 col-12">
                        <div>
                          <h5>
                            <svg class="octicon octicon-organization" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M1.5 14.25c0 .138.112.25.25.25H4v-1.25a.75.75 0 01.75-.75h2.5a.75.75 0 01.75.75v1.25h2.25a.25.25 0 00.25-.25V1.75a.25.25 0 00-.25-.25h-8.5a.25.25 0 00-.25.25v12.5zM1.75 16A1.75 1.75 0 010 14.25V1.75C0 .784.784 0 1.75 0h8.5C11.216 0 12 .784 12 1.75v12.5c0 .085-.006.168-.018.25h2.268a.25.25 0 00.25-.25V8.285a.25.25 0 00-.111-.208l-1.055-.703a.75.75 0 11.832-1.248l1.055.703c.487.325.779.871.779 1.456v5.965A1.75 1.75 0 0114.25 16h-3.5a.75.75 0 01-.197-.026c-.099.017-.2.026-.303.026h-3a.75.75 0 01-.75-.75V14h-1v1.25a.75.75 0 01-.75.75h-3zM3 3.75A.75.75 0 013.75 3h.5a.75.75 0 010 1.5h-.5A.75.75 0 013 3.75zM3.75 6a.75.75 0 000 1.5h.5a.75.75 0 000-1.5h-.5zM3 9.75A.75.75 0 013.75 9h.5a.75.75 0 010 1.5h-.5A.75.75 0 013 9.75zM7.75 9a.75.75 0 000 1.5h.5a.75.75 0 000-1.5h-.5zM7 6.75A.75.75 0 017.75 6h.5a.75.75 0 010 1.5h-.5A.75.75 0 017 6.75zM7.75 3a.75.75 0 000 1.5h.5a.75.75 0 000-1.5h-.5z"></path></svg>
                            <span>Jeconduis</span>
                          </h5>
                        </div>

                        <div>
                          <div>
                            <svg class="octicon octicon-location" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M11.536 3.464a5 5 0 010 7.072L8 14.07l-3.536-3.535a5 5 0 117.072-7.072v.001zm1.06 8.132a6.5 6.5 0 10-9.192 0l3.535 3.536a1.5 1.5 0 002.122 0l3.535-3.536zM8 9a2 2 0 100-4 2 2 0 000 4z"></path></svg>
                            <span>Paris, France</span>
                          </div>

                          <div>
                            <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-link">
                                <path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path>
                            </svg>
                            <a href="https://jeconduis.fr" rel="noreferrer" target="_blank">https://jeconduis.fr</a>
                          </div>

                          <div>
                            <span>June, 2022 · 1 month</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="mt-4">
                      <p>J'ai reconstruis l'application frontend qui étais très lente à cause de la mauvaise gestion du flow de données. Mon travail a été de refactoriser le code et optimizer les performances de l'application et de designer les interfaces pour les rendre plus agréable.</p>
                      <p><strong>Skills:&nbsp;</strong>Angular · NGRX · TypeScript</p>
                    </div>


                    <div>
                      <div class="col-lg-12">

                        <div>
                          <Carousel>
                            <div>
                                <img width={`100%`} src={jeconduisImage} alt="project" />
                            </div>

                            <div>
                                <img src={jeconduis2Image} alt="project" />
                            </div>

                            <div>
                                <img src={jeconduis3Image} alt="project" />
                            </div>
                          </Carousel>
                        </div>
  

                      </div>
                    </div>
                  </div>
                  
                  <div class="coding-list-item">
                    <div class="coding-list-item-postion">
                      <h3>Backend Engineer</h3>
                      <p>Freelance</p>
                    </div>

                    <div class="row mt-4">
                      <div class="coding-company col-md-5 col-12">
                        <div class="coding-company-logo">
                          <img height="70" src="" alt="No logo available" />
                        </div>
                      </div>
                      
                      <div class="col-md-7 col-12">
                        <div>
                          <h5>
                            <svg class="octicon octicon-organization" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M1.5 14.25c0 .138.112.25.25.25H4v-1.25a.75.75 0 01.75-.75h2.5a.75.75 0 01.75.75v1.25h2.25a.25.25 0 00.25-.25V1.75a.25.25 0 00-.25-.25h-8.5a.25.25 0 00-.25.25v12.5zM1.75 16A1.75 1.75 0 010 14.25V1.75C0 .784.784 0 1.75 0h8.5C11.216 0 12 .784 12 1.75v12.5c0 .085-.006.168-.018.25h2.268a.25.25 0 00.25-.25V8.285a.25.25 0 00-.111-.208l-1.055-.703a.75.75 0 11.832-1.248l1.055.703c.487.325.779.871.779 1.456v5.965A1.75 1.75 0 0114.25 16h-3.5a.75.75 0 01-.197-.026c-.099.017-.2.026-.303.026h-3a.75.75 0 01-.75-.75V14h-1v1.25a.75.75 0 01-.75.75h-3zM3 3.75A.75.75 0 013.75 3h.5a.75.75 0 010 1.5h-.5A.75.75 0 013 3.75zM3.75 6a.75.75 0 000 1.5h.5a.75.75 0 000-1.5h-.5zM3 9.75A.75.75 0 013.75 9h.5a.75.75 0 010 1.5h-.5A.75.75 0 013 9.75zM7.75 9a.75.75 0 000 1.5h.5a.75.75 0 000-1.5h-.5zM7 6.75A.75.75 0 017.75 6h.5a.75.75 0 010 1.5h-.5A.75.75 0 017 6.75zM7.75 3a.75.75 0 000 1.5h.5a.75.75 0 000-1.5h-.5z"></path></svg>
                            <span>Nohellef</span>
                          </h5>
                        </div>

                        <div>
                          <div>
                            <svg class="octicon octicon-location" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M11.536 3.464a5 5 0 010 7.072L8 14.07l-3.536-3.535a5 5 0 117.072-7.072v.001zm1.06 8.132a6.5 6.5 0 10-9.192 0l3.535 3.536a1.5 1.5 0 002.122 0l3.535-3.536zM8 9a2 2 0 100-4 2 2 0 000 4z"></path></svg>
                            <span>Yaoundé, Cameroon</span>
                          </div>

                          <div>
                            <span>Feb - May 2022 · 5 week</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="mt-4">
                      <p>J'ai architecturé et construis le backend de l'application qui comptait 17 modules. Il s'agissait d'une application de E-learning destiné au suivie des élèves du secondaires.</p>
                      <p><strong>Skills:&nbsp;</strong>Nodejs · Nestjs · TypeScript · Restfull API · Docker · MySQL · Socket.io</p>
                    </div>


                    <div>
                      <div class="col-lg-12">

                      <div>
                            {/* <img src={jsDSA} alt="JavaScript Datastructure Certification" /> */}
                            <video width={'100%'} src={nohellefVideo} autoPlay loop></video>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="coding-list-item">
                    <div class="coding-list-item-postion">
                      <h3>Miqo</h3>
                      <p>Freelance</p>
                    </div>

                    <div class="row mt-4">
                      <div class="coding-company col-md-5 col-12">
                        <div class="coding-company-logo">
                          <img height="70" src="images/conding/miqo-logo2.svg" alt="" />
                        </div>
                      </div>
                      
                      <div class="col-md-7 col-12">
                        <div>
                          <h5>
                            <svg class="octicon octicon-organization" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M1.5 14.25c0 .138.112.25.25.25H4v-1.25a.75.75 0 01.75-.75h2.5a.75.75 0 01.75.75v1.25h2.25a.25.25 0 00.25-.25V1.75a.25.25 0 00-.25-.25h-8.5a.25.25 0 00-.25.25v12.5zM1.75 16A1.75 1.75 0 010 14.25V1.75C0 .784.784 0 1.75 0h8.5C11.216 0 12 .784 12 1.75v12.5c0 .085-.006.168-.018.25h2.268a.25.25 0 00.25-.25V8.285a.25.25 0 00-.111-.208l-1.055-.703a.75.75 0 11.832-1.248l1.055.703c.487.325.779.871.779 1.456v5.965A1.75 1.75 0 0114.25 16h-3.5a.75.75 0 01-.197-.026c-.099.017-.2.026-.303.026h-3a.75.75 0 01-.75-.75V14h-1v1.25a.75.75 0 01-.75.75h-3zM3 3.75A.75.75 0 013.75 3h.5a.75.75 0 010 1.5h-.5A.75.75 0 013 3.75zM3.75 6a.75.75 0 000 1.5h.5a.75.75 0 000-1.5h-.5zM3 9.75A.75.75 0 013.75 9h.5a.75.75 0 010 1.5h-.5A.75.75 0 013 9.75zM7.75 9a.75.75 0 000 1.5h.5a.75.75 0 000-1.5h-.5zM7 6.75A.75.75 0 017.75 6h.5a.75.75 0 010 1.5h-.5A.75.75 0 017 6.75zM7.75 3a.75.75 0 000 1.5h.5a.75.75 0 000-1.5h-.5z"></path></svg>
                            <span>Angular Developer</span>
                          </h5>
                        </div>

                        <div>
                          <div>
                            <svg class="octicon octicon-location" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M11.536 3.464a5 5 0 010 7.072L8 14.07l-3.536-3.535a5 5 0 117.072-7.072v.001zm1.06 8.132a6.5 6.5 0 10-9.192 0l3.535 3.536a1.5 1.5 0 002.122 0l3.535-3.536zM8 9a2 2 0 100-4 2 2 0 000 4z"></path></svg>
                            <span>Yaoundé, Cameroon</span>
                          </div>

                          <div>
                            <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-link">
                                <path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path>
                            </svg>
                            <a href="https://www.mymiqo.com" rel="noreferrer" target="_blank">https://www.mymiqo.com</a>
                          </div>

                          <div>
                            <span>Sept - Nov, 2021 · 2 months</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="mt-4">
                      <p>J'ai construis le frontend de l'application backoffice permettant de gérer les opérations de l'entreprise et leur clients.</p>
                      <p><strong>Skills:&nbsp;</strong>CSS · SCSS · Angular · Angular Material · Firebase</p>
                    </div>


                    <div>
                      <div class="col-lg-12">

                      <div class="no-project-preview-content">
                            {/* <img src={jsDSA} alt="JavaScript Datastructure Certification" /> */}
                            {/* <video width={'100%'} src={geocadreVideo} autoPlay loop></video> */}
                            {/* <p className="legend">Geocadre template design</p> */}
                            <p>No Preview content</p>
                        </div>
  
                        {/* <div class="owl-carousel owl-theme">
                          <div class="item">
                            <div class="project-info">
                              <img src="images/project/project-image01.png" class="img-fluid" alt="project" />
                            </div>
                          </div>
    
                          <div class="item">
                            <div class="project-info">
                              <img src="images/project/project-image02.png" class="img-fluid" alt="project" />
                            </div>
                          </div>
                        </div> */}
                      </div>
                    </div>
                  </div>
    
                  <div class="coding-list-item">
                    <div class="coding-list-item-postion">
                      <h3>FullStack JavaScript Developer</h3>
                      <p>CDI . Remote postion</p>
                    </div>

                    <div class="row mt-4">
                      <div class="coding-company col-md-5 col-12">
                        <div class="coding-company-logo">
                          <img height="70" src="images/conding/datnek-logo.jpeg" alt="" />
                        </div>
                      </div>
                      
                      <div class="col-md-7 col-12">
                        <div>
                          <h5>
                            <svg class="octicon octicon-organization" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M1.5 14.25c0 .138.112.25.25.25H4v-1.25a.75.75 0 01.75-.75h2.5a.75.75 0 01.75.75v1.25h2.25a.25.25 0 00.25-.25V1.75a.25.25 0 00-.25-.25h-8.5a.25.25 0 00-.25.25v12.5zM1.75 16A1.75 1.75 0 010 14.25V1.75C0 .784.784 0 1.75 0h8.5C11.216 0 12 .784 12 1.75v12.5c0 .085-.006.168-.018.25h2.268a.25.25 0 00.25-.25V8.285a.25.25 0 00-.111-.208l-1.055-.703a.75.75 0 11.832-1.248l1.055.703c.487.325.779.871.779 1.456v5.965A1.75 1.75 0 0114.25 16h-3.5a.75.75 0 01-.197-.026c-.099.017-.2.026-.303.026h-3a.75.75 0 01-.75-.75V14h-1v1.25a.75.75 0 01-.75.75h-3zM3 3.75A.75.75 0 013.75 3h.5a.75.75 0 010 1.5h-.5A.75.75 0 013 3.75zM3.75 6a.75.75 0 000 1.5h.5a.75.75 0 000-1.5h-.5zM3 9.75A.75.75 0 013.75 9h.5a.75.75 0 010 1.5h-.5A.75.75 0 013 9.75zM7.75 9a.75.75 0 000 1.5h.5a.75.75 0 000-1.5h-.5zM7 6.75A.75.75 0 017.75 6h.5a.75.75 0 010 1.5h-.5A.75.75 0 017 6.75zM7.75 3a.75.75 0 000 1.5h.5a.75.75 0 000-1.5h-.5z"></path></svg>
                            <span>Datnek</span>
                          </h5>
                        </div>

                        <div>
                          <div>
                            <svg class="octicon octicon-location" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M11.536 3.464a5 5 0 010 7.072L8 14.07l-3.536-3.535a5 5 0 117.072-7.072v.001zm1.06 8.132a6.5 6.5 0 10-9.192 0l3.535 3.536a1.5 1.5 0 002.122 0l3.535-3.536zM8 9a2 2 0 100-4 2 2 0 000 4z"></path></svg>
                            <span>Bresstraat 21, Belgium</span>
                          </div>

                          <div>
                            <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-link">
                                <path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path>
                            </svg>
                            <a href="https://datnek.be" rel="noreferrer" target="_blank">https://datnek.be</a>
                          </div>

                          <div>
                            <span>Aug 2020 - Oct 2021 · 1 year . 3 months</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="mt-4">
                      <p>Au sein d'une équipe de Developeurs FullStack comme moi, j'ai participé à 2 projects majeurs <strong>Brain-maker</strong> et <strong>Delenscio</strong></p>

                      <p><strong>Brain-maker</strong> est une application de e-learning similaire à udemy qu'on a dévéllopé avec Angular et Nestjs. Il y a avait 3 types d'utilisateurs, les apprenants, les instructerus et les admins. Nous avons conçue l'application en deux partie le front office accessible par les utilisateurs et les instructeurs et le backoffice accessible uniquement par les administrateurs.</p>
                      <p><strong>Delenscio</strong> est un réseau social professionel comme linkedin, j'ai participé au début du projet. Il s'agisait d'une vaste application architecturée en microservices. Le backend comptait 9 applications concue en ASP.net et le frontend 4 applications conçue avec Angular</p>

                      <p><strong>Skills:&nbsp;</strong>Angular · SCSS · JavaScript · Node.js · Nestjs · MySQL · TypeORM  · WebRTC · Socket.io  · NgRX · NgXS</p>
                    </div>


                    <div>
                      <div class="col-lg-12">

                      <div>
                            {/* <img src={jsDSA} alt="JavaScript Datastructure Certification" /> */}
                            <video width={'100%'} src={brainMakerVideo} autoPlay loop></video>
                        </div>
  
                        {/* <div class="owl-carousel owl-theme">
                          <div class="item">
                            <div class="project-info">
                              <img src="images/project/project-image01.png" class="img-fluid" alt="project" />
                            </div>
                          </div>
    
                          <div class="item">
                            <div class="project-info">
                              <img src="images/project/project-image02.png" class="img-fluid" alt="project" />
                            </div>
                          </div>
                        </div> */}
                      </div>
                    </div>
                  </div>
                  
                  <div class="coding-list-item">
                    <div class="coding-list-item-postion">
                      <h3>React Developer</h3>
                      <p>Freelance</p>
                    </div>

                    <div class="row mt-4">
                      <div class="coding-company col-md-5 col-12">
                        <div class="coding-company-logo">
                          <img height="70" src="images/conding/dastudy-logo.png" alt="" />
                        </div>
                      </div>
                      
                      <div class="col-md-7 col-12">
                        <div>
                          <h5>
                            <svg class="octicon octicon-organization" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M1.5 14.25c0 .138.112.25.25.25H4v-1.25a.75.75 0 01.75-.75h2.5a.75.75 0 01.75.75v1.25h2.25a.25.25 0 00.25-.25V1.75a.25.25 0 00-.25-.25h-8.5a.25.25 0 00-.25.25v12.5zM1.75 16A1.75 1.75 0 010 14.25V1.75C0 .784.784 0 1.75 0h8.5C11.216 0 12 .784 12 1.75v12.5c0 .085-.006.168-.018.25h2.268a.25.25 0 00.25-.25V8.285a.25.25 0 00-.111-.208l-1.055-.703a.75.75 0 11.832-1.248l1.055.703c.487.325.779.871.779 1.456v5.965A1.75 1.75 0 0114.25 16h-3.5a.75.75 0 01-.197-.026c-.099.017-.2.026-.303.026h-3a.75.75 0 01-.75-.75V14h-1v1.25a.75.75 0 01-.75.75h-3zM3 3.75A.75.75 0 013.75 3h.5a.75.75 0 010 1.5h-.5A.75.75 0 013 3.75zM3.75 6a.75.75 0 000 1.5h.5a.75.75 0 000-1.5h-.5zM3 9.75A.75.75 0 013.75 9h.5a.75.75 0 010 1.5h-.5A.75.75 0 013 9.75zM7.75 9a.75.75 0 000 1.5h.5a.75.75 0 000-1.5h-.5zM7 6.75A.75.75 0 017.75 6h.5a.75.75 0 010 1.5h-.5A.75.75 0 017 6.75zM7.75 3a.75.75 0 000 1.5h.5a.75.75 0 000-1.5h-.5z"></path></svg>
                            <span>Dastudy</span>
                          </h5>
                        </div>

                        <div>
                          <div>
                            <svg class="octicon octicon-location" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M11.536 3.464a5 5 0 010 7.072L8 14.07l-3.536-3.535a5 5 0 117.072-7.072v.001zm1.06 8.132a6.5 6.5 0 10-9.192 0l3.535 3.536a1.5 1.5 0 002.122 0l3.535-3.536zM8 9a2 2 0 100-4 2 2 0 000 4z"></path></svg>
                            <span>Douala, Cameroon</span>
                          </div>

                          <div>
                            <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-link">
                                <path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path>
                            </svg>
                            <a href="https://www.dastudy.net/" rel="noreferrer" target="_blank">https://www.dastudy.net</a>
                          </div>

                          <div>
                            <span>Aug 2020 - Mai 2022 · 10 months</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="mt-4">
                      <p>J'ai construis la seconde version du frontend l'application en utilisant React, Redux et Ant Design. La première version était sur wordpress et il était question de créer l'application à une seul page avec React</p>
                      <p><strong>Skills:&nbsp;</strong>React · Redux · Ant Design</p>
                    </div>


                    <div>
                      <div class="col-lg-12">
                      <Carousel>
                        <div>
                            <img width={`100%`} src={dastudyImage} alt="project" />
                        </div>

                        <div>
                            <img src={dastudy2Image} alt="project" />
                        </div>


                        <div>
                            <img src={dastudy3Image} alt="project" />
                        </div>
                      </Carousel>
                      </div>
                    </div>
                  </div>
                </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  
  </>;
}

export default Coding;