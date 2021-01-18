function Portfolio() {
    return (
        <section id="portfolio" className="portfolio">
    <div className="container">
      <div className="section_heading ">
        <h2>Portfolio</h2>
        <div className="separator">
          <ul>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>
        <div className="heading_content"> Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </div>
      </div>
      <div className="col-lg-12 col-md-12 col-xs-12 content_sec ">
        <div className="portfolio-sort">
            <ul className="sorting clearfix center-grid">
                    <li className="sort-btn active" data-filter="*">All</li>
                    <li className="sort-btn" data-filter=".design">Web Design</li>
                    <li className="sort-btn" data-filter=".development">Web Development</li>
                    <li className="sort-btn" data-filter=".logo">Logo Design</li>
                    <li className="sort-btn" data-filter=".app">App Design</li>
            </ul>
          </div>
          </div>
        <div className="row portfolio-gallary">
                    <div className="col-lg-4 col-md-6 col-sm-6 col-xs-12 port-item design development">
                        <div className="project portfolio-inner">
                            <img src='img/portfolio/thumbnail/project_1.jpg' alt="project"/>
                            <div className="label">
                                <div className="label-text"> <a href="portfolio-detail.html" className="text-title">Photography</a> </div>
                                <div className="label-bg"></div>
                            </div>       
                            <div className="zoom"> 
                            <a href="img/portfolio/large/project_1.jpg" className="popup-box"  data-lightbox="image" data-title="Project"> <i className="flat flaticon-magnifying-glass"></i> 
                            </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-6 col-xs-12 port-item app logo">
                        <div className="project portfolio-inner">
                            <img src='img/portfolio/thumbnail/project_1.jpg' alt="project"/>
                            <div className="label">
                                <div className="label-text"> <a href="portfolio-detail.html" className="text-title">Ecommerce</a> </div>
                                <div className="label-bg"></div>
                            </div>
                            <div className="zoom"> <a href="img/portfolio/large/project_2.jpg" className="popup-box"  data-lightbox="image" data-title="Project"> <i className="flat flaticon-magnifying-glass"></i> </a> </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-6 col-xs-12 port-item development logo">
                        <div className="project portfolio-inner">
                            <img src='img/portfolio/thumbnail/project_1.jpg' alt="project"/>
                            <div className="label">
                                <div className="label-text"> <a href="portfolio-detail.html" className="text-title">Education</a>
                                </div>
                                <div className="label-bg"></div>
                            </div>
                            <div className="zoom"> <a href="img/portfolio/large/project_3.jpg" className="popup-box"  data-lightbox="image" data-title="Project"> <i className="flat flaticon-magnifying-glass"></i> </a> </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 col-sm-6 col-xs-12 port-item design development logo">
                        <div className="project portfolio-inner">
                            <img src='img/portfolio/thumbnail/project_1.jpg' alt="project"/>
                            <div className="label">
                                <div className="label-text"> <a href="portfolio-detail.html" className="text-title">Real Estate</a> </div>
                                <div className="label-bg"></div>
                            </div>
                            <div className="zoom"> <a href='img/portfolio/thumbnail/project_1.jpg' className="popup-box"  data-lightbox="image" data-title="Project"> <i className="flat flaticon-magnifying-glass"></i> </a> </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-6 col-xs-12 port-item app web development">
                        <div className="project portfolio-inner">
                            <img src='img/portfolio/thumbnail/project_1.jpg' alt="project"/>
                            <div className="label">
                                <div className="label-text"> <a href="portfolio-detail.html" className="text-title">Bar & Restaurant</a></div>
                                <div className="label-bg"></div>
                            </div>
                            <div className="zoom"> <a href="img/portfolio/large/project_5.jpg" className="popup-box"  data-lightbox="image" data-title="Project"> <i className="flat flaticon-magnifying-glass"></i> </a> </div>
                        </div>
                    </div>
                      <div className="col-lg-4 col-md-6 col-sm-6 col-xs-12 port-item design development">
                        <div className="project portfolio-inner">
                            <img src='img/portfolio/thumbnail/project_1.jpg' alt="project"/>
                            <div className="label">
                                <div className="label-text"> <a href="portfolio-detail.html" className="text-title">Saloon & Spa</a></div>
                                <div className="label-bg"></div>
                            </div>
                            <div className="zoom"> <a href="img/portfolio/large/project_6.jpg" className="popup-box"  data-lightbox="image" data-title="Project"> <i className="flat flaticon-magnifying-glass"></i> </a> </div>
                        </div>
                    </div>
                </div>        
      </div>
  </section>
    );
  }
  
  export default Portfolio;
  