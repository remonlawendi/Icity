function AboutUs() {
    return (
      <section id="about-us">
      <div className="container">
        <div className="section_heading">
          <h1>About <span>Us</span></h1>
          <div className="separator">
            <ul>
              <li></li>
              <li></li>
              <li></li>
            </ul>
          </div>
          <div className="heading_content"> Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </div>
        </div>
        <div className="col-lg-12 col-md-12 col-xs-12 content_sec">
          <div className="row row-safari">
            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 wow animated fadeInLeft img-area"> <img className="img_sec" src='img/about_us.png' alt="About" /> </div>
            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 wow animated fadeInRight content-area">
              <h5>Providing best business solution for growing your business</h5>
              <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
              <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting.</p>
              <a className="defualt-button view_more" href="about-us.html">View More</a> </div>
          </div>
        </div>
      </div>
    </section>
    );
  }
  
  export default AboutUs;
  