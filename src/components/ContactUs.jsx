function ContactUS() {
    return (
        <section id="contact-us">
        <div className="container">
      
           <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 contact-detail">
          <div className="row">
            <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
              <div className="contact-card">
              <div className="icon"><i className="flat flaticon-phone-receiver"></i></div>
              <div className="heading">
                <h5>Phone No.</h5>
              </div>
              <div className="description">
                <p>0123-456-789, 0123-456-789</p>
              </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
              <div className="contact-card">
              <div className="icon"><i className="flat flaticon-facebook-placeholder-for-locate-places-on-maps"></i></div>
              <div className="heading">
                <h5>Address</h5>
              </div>
              <div className="description">
                <p>123, Street Name, City Name, State Name, Country Name, Pin Code : 123456 </p>
              </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
              <div className="contact-card">
              <div className="icon"><i className="flat flaticon-mail-black-envelope-symbol"></i></div>
              <div className="heading">
                <h5>Email Id</h5>
              </div>
              <div className="description">
                <p>info@bizler.com </p>
              </div>
              </div>
            </div>
           </div>
          <div className="mid-content">
          <div className="row">    
              <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
                 <h3>Let’s Get In Touch!</h3>
                 <div className="separator left-align ">
                  <ul>
                    <li></li>
                    <li></li>
                    <li></li>
                  </ul>
                </div>
                <div className="description">
                  It would be great to hear from you! If you got any questions, please do not hesitate to send us a message. We are looking forward to hearing from you ! <span> We reply within 24 hours!</span>
                </div>
              </div>
              <div className="col-lg-8 col-md-8 col-sm-6 col-xs-12">
                  <form action="https://wpshopmart.com/index.html">
                    <div className="row">
                      <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12 form-group">
                        <input value="" type="text" placeholder="Full Name" />
                      </div>
                      <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12 form-group">
                        <input value="" type="text" placeholder="Email" />
                      </div>
                      <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12 form-group">
                        <input value="" type="text" placeholder="Phone No." />
                      </div>
                      <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12 form-group">
                        <input value="" type="text" placeholder="Subject" />
                      </div>
                      <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 form-group">
                        <textarea placeholder="Message"></textarea>
                      </div>
                      <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 form-group text-center">
                        <button type="submit">Send Message <i className="flat flaticon-plane"></i></button>
                      </div>
                    </div>
                  </form>
              </div>
          </div>
          </div>
        </div>
      </div>
      </section>
    );
  }
  
  export default ContactUS;
  