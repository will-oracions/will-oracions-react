import { Carousel } from 'react-responsive-carousel'
import { Link } from 'react-router-dom';

import "react-responsive-carousel/lib/styles/carousel.min.css";

import jsDSA from '../../assets/certifications/freecodecamp-js-dsa.png';

const HomeCoding = () => {
  return <>
      <section className="project py-5" id="project">
      <div className="container">     
        <div className="row">
          <div className="col-lg-11 col-12">

            <div className="col-lg-12">
              <h2 className="text-primary mb-4 mt-4">Personal Projects</h2>
              <Carousel>
                <div>
                    <img src={jsDSA} alt="JavaScript Datastructure Certification" />
                    <p className="legend">Freecodecamp JavaScript Datastructure Certification</p>
                </div>
              </Carousel>

              <Link to="projects">
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