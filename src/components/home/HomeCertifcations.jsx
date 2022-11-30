import jsDSA from '../../assets/certifications/freecodecamp-js-dsa.png';
import jsIntermediate from '../../assets/certifications/hackerrank-js-intermediate.png';
import uiDesign from '../../assets/certifications/freecodecamp-ui-design.png';
import angularBasic from '../../assets/certifications/hackerrank-angular-basic.png';
import reactBasic from '../../assets/certifications/hackerrank-react-basic.png';
import jsBasic from '../../assets/certifications/hackerrank-js-basic.png';


import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const HomeCertifications = () => {
  return <>
  
  <section className="project py-5" id="project">
    <div id="certifications" className="container">
        
        <div className="row">
          <div className="col-lg-11 col-12">

              <div className="col-lg-12">
                <h2 className="text-primary mb-4">Certifications</h2>
                
                <div className="certifications-list">
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
                    <div>
                        <img src={angularBasic} alt="Angular Basic Certification" />
                        <p className="legend">Hackerrank Angular Basic Certification</p>
                    </div>
                    <div>
                        <img src={reactBasic} alt="React Basic Certification" />
                        <p className="legend">Hackerrank React Basic Certification</p>
                    </div>
                    <div>
                        <img src={uiDesign} alt="Freecodecamp UI Design Certification" />
                        <p className="legend">Freecodecamp UI Design Certification</p>
                    </div>
                  </Carousel>
                </div>
                {/* <div>
                  <a href="skills.html" className="btn custom-btn custom-btn-bg custom-btn-link">See all</a>
                </div> */}
              </div>


          </div>
        </div>
    </div>
    </section>

  </>;
}

export default HomeCertifications;