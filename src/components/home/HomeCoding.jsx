import { Link } from 'react-router-dom';
import { Carousel } from 'react-responsive-carousel';

import "react-responsive-carousel/lib/styles/carousel.min.css";

import jsDSA from '../../assets/certifications/freecodecamp-js-dsa.png';
import jsIntermediate from '../../assets/certifications/hackerrank-js-intermediate.png';
import jsBasic from '../../assets/certifications/hackerrank-js-basic.png';

const HomeCoding = () => {
  return <>
      <section className="project py-5" id="project">
      <div  id="coding" className="container">
              
              <div className="row">
                <div className="col-lg-11 col-12">
                    <div className="col-lg-12">
                      <h2 className="text-primary mb-4">Things I have built for digital companies</h2>
                      <Carousel>
                        <div>
                            <img src={jsDSA} alt="JavaScript Datastructure Certification" />
                            <p className="legend">Freecodecamp JavaScript Datastructure Certification</p>
                        </div>
                        <div>
                            <img src={jsIntermediate} alt="JavaScript Intermediate Level Certification" />
                            <p className="legend">Hackerrank JavaScript Intermediate Leve Certification</p>
                        </div>
                        <div>
                            <img src={jsBasic} alt="JavaScript Basic Certification" />
                            <p className="legend">Hackerrank JavaScript Basic Certification</p>
                        </div>
                      </Carousel>

                      <Link to="/coding">
                        <div>
                          <a href="skills.html" className="btn custom-btn custom-btn-bg custom-btn-link">See all</a>
                        </div>
                      </Link>
                  </div>
                </div>
              </div>
      </div>
    </section>
  </>;
}

export default HomeCoding;