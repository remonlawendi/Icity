function Footer() {
    return (
        <footer>
        <div className="container">
          <div className="col-lg-12">
            <div className="row">
              <div className="col-lg-4 col-md-12 col-sm-12 column">
                <div className="footer_about_content">
                  <div className="footer_logo"><a href="index.html" title="Bizler"><img src='img/logo.png' alt="Bizler" /></a> </div>
                  <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                  <p>It has survived not only five centuries, but also the leap into electronic typesetting.</p>
                  <a className="view_more" href="javascript:void(0)">View More</a> </div>
              </div>
      
              <div className="col-lg-6 offset-md-2 col-md-5 col-sm-5 col-xs-12 column">
                <h5>Contact Info</h5>
                <div className="contact_info">
                  <ul>
                    <li> <i className="flat flaticon-facebook-placeholder-for-locate-places-on-maps"></i>123, Street Name, City Name, State Name, Country Name, Pin Code : 123456 </li>
                    <li> <i className="flat flaticon-phone-receiver"></i>0123-456-789, 0123-456-789 </li>
                    <li> <i className="flat flaticon-mail-black-envelope-symbol"></i>info@bizler.com </li>
                  </ul>
                  <div className="follow_us_on"> <a href="javascript:void(0)"><i className="flat flaticon-facebook-logo"></i></a> <a href="javascript:void(0)"><i className="flat flaticon-twitter"></i></a> <a href="javascript:void(0)"><i className="flat flaticon-google-plus-logo"></i></a> <a href="javascript:void(0)"><i className="flat flaticon-linkedin-logo"></i></a> <a href="javascript:void(0)"><i className="flat flaticon-instagram"></i></a> </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-12">
            <div className="newsletter">
              <div className="row">
                <div className="col-md-3">
                  <h4>Our Newsletter</h4>
                </div>
                <div className="col-md-9">
                  <form action="https://wpshopmart.com/index.html">
                    <div className="row">
                      <div className="col-md-4">
                        <input type="text" placeholder="Name" />
                      </div>
                      <div className="col-md-4">
                        <input type="text" placeholder="Email" />
                      </div>
                      <div className="col-md-4">
                        <button type="Submit">Subscribe</button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
           <div className="copyright col-lg-12">
      <div className="row">
                <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12"> Copyright &copy; 2020
                  <span className="separator-pipesign"></span>
                  All Rights Reserved
                  </div>
                <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 text-right"> <a href="javascript:void(0)">Privacy Policy</a>
                  <span className="separator-pipesign"></span>
                  <a href="javascript:void(0)">Terms &amp; Conditions</a>
                  <span className="separator-pipesign"></span>
                  <a href="faq.html">FAQ's</a> </div>
              </div>
          </div>
        </div>
      </footer>
    );
  }
  
  export default Footer;
  