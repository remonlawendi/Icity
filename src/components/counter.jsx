import "./counter.css"

function Footer() {
    return (
        <section id="counter">
        <div className="container">
          <div className="col-lg-12">
            <div className="row row-safari">
              <div className="counter-column col-lg-3 col-md-6 col-sm-6 col-xs-12">
                <div className="count_icon"> <i className="flat flaticon-happiness"></i> </div>
                <div className="counter_content">
                  <h2><span className="counter">200</span>+</h2>
                  <div className="title">Happy Client</div>
                </div>
              </div>
              <div className="counter-column col-lg-3 col-md-6 col-sm-6 col-xs-12">
                <div className="count_icon"> <i className="flat flaticon-coffee-cup"></i> </div>
                <div className="counter_content">
                  <h2><span className="counter">750</span>+</h2>
                  <div className="title">Cups of Coffee</div>
                </div>
              </div>
              <div className="counter-column col-lg-3 col-md-6 col-sm-6 col-xs-12">
                <div className="count_icon"> <i className="flat flaticon-like"></i> </div>
                <div className="counter_content">
                  <h2><span className="counter">1800</span>+</h2>
                  <div className="title">Projects Done</div>
                </div>
              </div>
              <div className="counter-column col-lg-3 col-md-6 col-sm-6 col-xs-12">
                <div className="count_icon"> <i className="flat flaticon-building"></i> </div>
                <div className="counter_content">
                  <h2><span className="counter">15</span></h2>
                  <div className="title">Office Locations</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="overlay"></div>
      </section>
      
    );
  }
  
  export default Footer;
  