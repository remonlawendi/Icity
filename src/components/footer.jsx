import "./footer.css"
import Logo from "../assets/img/logo.png"
function Footer() {
    return (
        <footer>
        <div class="container">
          <div class="col-lg-12">
            <div class="row">
              <div class="col-lg-4 col-md-12 col-sm-12 column">
                <div class="footer_about_content">
                  <div class="footer_logo"><a href="index.html" title="Bizler"><img src={Logo} alt="Bizler" /></a> </div>
                  <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                  <p>It has survived not only five centuries, but also the leap into electronic typesetting.</p>
                  <a class="view_more" href="javascript:void(0)">View More</a> </div>
              </div>
      
      
              <div class="col-lg-6 offset-md-2 col-md-5 col-sm-5 col-xs-12 column">
                <h5>Contact Info</h5>
                <div class="contact_info">
                  <ul>
                    <li> <i class="flat flaticon-facebook-placeholder-for-locate-places-on-maps"></i>123, Street Name, City Name, State Name, Country Name, Pin Code : 123456 </li>
                    <li> <i class="flat flaticon-phone-receiver"></i>0123-456-789, 0123-456-789 </li>
                    <li> <i class="flat flaticon-mail-black-envelope-symbol"></i>info@bizler.com </li>
                  </ul>
                  <div class="follow_us_on"> <a href="javascript:void(0)"><i class="flat flaticon-facebook-logo"></i></a> <a href="javascript:void(0)"><i class="flat flaticon-twitter"></i></a> <a href="javascript:void(0)"><i class="flat flaticon-google-plus-logo"></i></a> <a href="javascript:void(0)"><i class="flat flaticon-linkedin-logo"></i></a> <a href="javascript:void(0)"><i class="flat flaticon-instagram"></i></a> </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-12">
            <div class="newsletter">
              <div class="row">
                <div class="col-md-3">
                  <h4>Our Newsletter</h4>
                </div>
                <div class="col-md-9">
                  <form action="https://wpshopmart.com/index.html">
                    <div class="row">
                      <div class="col-md-4">
                        <input type="text" placeholder="Name" />
                      </div>
                      <div class="col-md-4">
                        <input type="text" placeholder="Email" />
                      </div>
                      <div class="col-md-4">
                        <button type="Submit">Subscribe</button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
           <div class="copyright col-lg-12">
      <div class="row">
                <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12"> Copyright &copy; 2020
                  <span class="separator-pipesign"></span>
                  All Rights Reserved
                  </div>
                <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12 text-right"> <a href="javascript:void(0)">Privacy Policy</a>
                  <span class="separator-pipesign"></span>
                  <a href="javascript:void(0)">Terms &amp; Conditions</a>
                  <span class="separator-pipesign"></span>
                  <a href="faq.html">FAQ's</a> </div>
              </div>
          </div>
        </div>
      </footer>
    );
  }
  
  export default Footer;
  