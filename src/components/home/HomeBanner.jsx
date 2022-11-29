const HomeBanner = () => {
  return <>
  <section className="about full-screen d-lg-flex justify-content-center align-items-center" id="about">
        <div className="container">
            <div className="header-banner row">
                
                <div className="col-lg-7 col-md-12 col-12 d-flex align-items-center">
                    <div className="about-text">
                        <h5 className="text">Want to build web application with</h5>
                        <h3 className="animated animated-text">
                          <div className="animated-info">
                              <span className="animated-item">Angular React Vue Node</span>
                              <span className="animated-item">AWS Docker Kubernetes</span>
                              <span className="animated-item">Prometheus Grafana</span>
                          </div>
                        </h3>
                        
                        <p className="intro">Hi! I’m <strong>Louis Mary MONJENGUE</strong>. Self-taught and passionate software developer. I’m mainly interested in <span className="text-hightlighted">Web development, Cloud infrastructure and DevOps</span>. I enjoy finding elegant solutions to relatively complex problems you might encounter. But what I like the most is to share and learn from others 🙂</p>

                        <div className="custom-btn-group mt-4">
                          <a href="/resume" target="_blank" className="btn mr-lg-2 custom-btn"><i className='uil uil-file-alt'></i> Resume</a>
                          <a href="#coding" className="btn custom-btn custom-btn-bg custom-btn-link">My Works</a>
                        </div>
                    </div>
                </div>

                <div className="profile-card col-lg-5 col-md-12 col-12">
                    <div className="about-image svg">
                        <img id="profile-image" src="images/profile/profile2.png" className="img-fluid" alt="my profile" />
                    </div>
                    <div>
                      <p className="text-center mt-4">You can find me here:</p>
                      <p>
                        github<i className="fa fa-github" style={{fontSize: '1rem'}}></i>
                        twitter<i className="fa fa-linkedin" style={{fontSize: '1rem'}}></i>
                        linkedin<i className="fa fa-twitter" style={{fontSize: '1rem'}}></i>
                        Email<i className="fa fa-envelope"></i>
                      </p>
                    </div>
                </div>

            </div>
        </div>
    </section>
  </>;
}

export default HomeBanner;