import section_photo from "../assets/img/about_us.png"
function AboutUs() {
    return (
      <section id="about-us">
      <div class="container">
        <div class="section_heading">
          <h1>About <span>Us</span></h1>
          <div class="separator">
            <ul>
              <li></li>
              <li></li>
              <li></li>
            </ul>
          </div>
          <div class="heading_content"> Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </div>
        </div>
        <div class="col-lg-12 col-md-12 col-xs-12 content_sec">
          <div class="row row-safari">
            <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12 wow animated fadeInLeft img-area"> <img class="img_sec" src={ section_photo } alt="About" /> </div>
            <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12 wow animated fadeInRight content-area">
              <h5>Providing best business solution for growing your business</h5>
              <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
              <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting.</p>
              <a class="defualt-button view_more" href="about-us.html">View More</a> </div>
          </div>
        </div>
      </div>
    </section>
    );
  }
  
  export default AboutUs;
  