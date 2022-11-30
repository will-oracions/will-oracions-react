const HomeContact = () => {
  return <>
      <section className="project py-5">
      <div className="container">
              
        <div  className="row">
          <div id="contact" className="col-lg-11 col-12">

              <div className="col-lg-12">
                <h2 className="text-primary">Contact Me</h2>

                <div className="contact-content">
                  <div className="contact-location">
                    <p>
                      <span>Yaoundé, Cameroon</span><br />
                      <span>Oracions.dev@gmail.com</span><br />
                      <span>+(237) 652-033-708</span><br />
                      <span>+(237) 656-914-671</span>
                    </p>
                    <p>
                      <span>Github</span>
                      <span>Twitter</span>
                      <span>LinkedIn</span>
                    </p>
                  </div>

                  <div className="map">
                    {/* <div className="mapouter"><div className="gmap_canvas"><iframe width="316" height="234" id="gmap_canvas" src="https://maps.google.com/maps?q=yaound%C3%A9,%20ngoa%20%C3%A9k%C3%A9l%C3%A9&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe><a href="https://fmovies-online.net"></a><br><style>.mapouter{position:relative;text-align:right;height:234px;width:316px;}</style><a href="https://www.embedgooglemap.net">how to add a google map to html</a><style>.gmap_canvas {overflow:hidden;background:none!important;height:234px;width:316px;}</style></div></div> */}
                  </div>
                </div>
                
                <div>
                  <form>
                    <div className="row">
                      <div className="col-md-6 col-6 form-group">
                        <input type="text" className="form-control" name="firstName" placeholder="Firstname" />
                      </div>
                      
                      <div className="col-md-6 col-6 form-group">
                        <input type="text" className="form-control" name="lastName" placeholder="Lastname" />
                      </div>
                    </div>

                    <div className="form-group">
                      <input type="email" className="form-control" name="email" placeholder="Email address" />
                    </div>
                    
                    <div className="form-group">
                      <textarea rows="5" className="form-control" placeholder="Type your message here"></textarea>
                    </div>

                    <div>
                      <a href="#contact" className="btn custom-btn custom-btn-bg custom-btn-link">Send Message</a>
                    </div>
                  </form>
                </div>
              </div>


          </div>
        </div>
      </div>
    </section>
  </>;
}

export default HomeContact;