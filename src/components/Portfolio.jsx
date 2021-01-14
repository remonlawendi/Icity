import Photography_photo from "../assets/img/portfolio/thumbnail/project_1.jpg"
function Portfolio() {
    return (
        <section id="portfolio" className="portfolio">
    <div class="container">
      <div class="section_heading ">
        <h2>Portfolio</h2>
        <div class="separator">
          <ul>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>
        <div class="heading_content"> Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </div>
      </div>
      <div class="col-lg-12 col-md-12 col-xs-12 content_sec ">
        <div class="portfolio-sort">
            <ul class="sorting clearfix center-grid">
                    <li class="sort-btn active" data-filter="*">All</li>
                    <li class="sort-btn" data-filter=".design">Web Design</li>
                    <li class="sort-btn" data-filter=".development">Web Development</li>
                    <li class="sort-btn" data-filter=".logo">Logo Design</li>
                    <li class="sort-btn" data-filter=".app">App Design</li>
            </ul>
          </div>
          </div>
        <div class="row portfolio-gallary">
                    <div class="col-lg-4 col-md-6 col-sm-6 col-xs-12 port-item design development">
                        <div class="project portfolio-inner">
                            <img src={Photography_photo} alt="project"/>
                            <div class="label">
                                <div class="label-text"> <a href="portfolio-detail.html" class="text-title">Photography</a> </div>
                                <div class="label-bg"></div>
                            </div>       
                            <div class="zoom"> 
                            <a href="img/portfolio/large/project_1.jpg" class="popup-box"  data-lightbox="image" data-title="Project"> <i class="flat flaticon-magnifying-glass"></i> 
                            </a>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6 col-sm-6 col-xs-12 port-item app logo">
                        <div class="project portfolio-inner">
                            <img src={Photography_photo} alt="project"/>
                            <div class="label">
                                <div class="label-text"> <a href="portfolio-detail.html" class="text-title">Ecommerce</a> </div>
                                <div class="label-bg"></div>
                            </div>
                            <div class="zoom"> <a href="img/portfolio/large/project_2.jpg" class="popup-box"  data-lightbox="image" data-title="Project"> <i class="flat flaticon-magnifying-glass"></i> </a> </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6 col-sm-6 col-xs-12 port-item development logo">
                        <div class="project portfolio-inner">
                            <img src={Photography_photo} alt="project"/>
                            <div class="label">
                                <div class="label-text"> <a href="portfolio-detail.html" class="text-title">Education</a>
                                </div>
                                <div class="label-bg"></div>
                            </div>
                            <div class="zoom"> <a href="img/portfolio/large/project_3.jpg" class="popup-box"  data-lightbox="image" data-title="Project"> <i class="flat flaticon-magnifying-glass"></i> </a> </div>
                        </div>
                    </div>

                    <div class="col-lg-4 col-md-6 col-sm-6 col-xs-12 port-item design development logo">
                        <div class="project portfolio-inner">
                            <img src={Photography_photo} alt="project"/>
                            <div class="label">
                                <div class="label-text"> <a href="portfolio-detail.html" class="text-title">Real Estate</a> </div>
                                <div class="label-bg"></div>
                            </div>
                            <div class="zoom"> <a href={Photography_photo} class="popup-box"  data-lightbox="image" data-title="Project"> <i class="flat flaticon-magnifying-glass"></i> </a> </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6 col-sm-6 col-xs-12 port-item app web development">
                        <div class="project portfolio-inner">
                            <img src={Photography_photo} alt="project"/>
                            <div class="label">
                                <div class="label-text"> <a href="portfolio-detail.html" class="text-title">Bar & Restaurant</a></div>
                                <div class="label-bg"></div>
                            </div>
                            <div class="zoom"> <a href="img/portfolio/large/project_5.jpg" class="popup-box"  data-lightbox="image" data-title="Project"> <i class="flat flaticon-magnifying-glass"></i> </a> </div>
                        </div>
                    </div>
                      <div class="col-lg-4 col-md-6 col-sm-6 col-xs-12 port-item design development">
                        <div class="project portfolio-inner">
                            <img src={Photography_photo} alt="project"/>
                            <div class="label">
                                <div class="label-text"> <a href="portfolio-detail.html" class="text-title">Saloon & Spa</a></div>
                                <div class="label-bg"></div>
                            </div>
                            <div class="zoom"> <a href="img/portfolio/large/project_6.jpg" class="popup-box"  data-lightbox="image" data-title="Project"> <i class="flat flaticon-magnifying-glass"></i> </a> </div>
                        </div>
                    </div>
                </div>        
      </div>
  </section>
    );
  }
  
  export default Portfolio;
  