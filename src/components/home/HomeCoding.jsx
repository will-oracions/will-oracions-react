import { Link } from 'react-router-dom';
import { Carousel } from 'react-responsive-carousel';

import "react-responsive-carousel/lib/styles/carousel.min.css";

import jeconduisImage from '../../assets/myWorks/images/jeconduis.png';
import jeconduis2Image from '../../assets/myWorks/images/jeconduis2.png';
import jeconduis3Image from '../../assets/myWorks/images/jeconduis3.png';
import geocadreImage from '../../assets/myWorks/images/geocadre.png';
import geocadre1Image from '../../assets/myWorks/images/geocadre1.png';
import geocadre2Image from '../../assets/myWorks/images/geocadre2.png';
import dastudyImage from '../../assets/myWorks/images/dastudy.png';
import dastudy2Image from '../../assets/myWorks/images/dastudy2.png';
import dastudy3Image from '../../assets/myWorks/images/dastudy3.png';


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
                            <img src={geocadreImage} alt="my work" />
                        </div>
                        <div>
                            <img src={geocadre1Image} alt="my work" />
                        </div>
                        <div>
                            <img src={geocadre2Image} alt="my work" />
                        </div>
                        <div>
                            <img src={jeconduisImage} alt="my work" />
                        </div>
                        <div>
                            <img src={jeconduis2Image} alt="my work" />
                        </div>
                        <div>
                            <img src={jeconduis3Image} alt="my work" />
                        </div>

                        <div>
                            <img src={dastudyImage} alt="my work" />
                        </div>

                        <div>
                            <img src={dastudy2Image} alt="my work" />
                        </div>

                        <div>
                            <img src={dastudy3Image} alt="my work" />
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