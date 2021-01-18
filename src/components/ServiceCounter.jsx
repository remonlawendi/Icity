
function ServiceCounter() {
    return (
        <section id="services-counter" className="text-center">
  <div className="container">
    <h3 className="d-none">heading</h3>
    <div className="col-lg-12">
      <div className="row">
        <div className="counter-column col-lg-4 col-md-4 col-sm-4 col-xs-12">
          <div className="counter_content">
            <div className="display"><span className="counter">3</span>K</div>
            <div className="title">Projects Done</div>
          </div>
        </div>
        <div className="counter-column col-lg-4 col-md-4 col-sm-4 col-xs-12">
          <div className="counter_content">
            <div className="display"><span className="counter">8782</span></div>
            <div className="title">Hours Work</div>
          </div>
        </div>
        <div className="counter-column col-lg-4 col-md-4 col-sm-4 col-xs-12">
          <div className="counter_content">
            <div className="display"><span className="counter">682</span></div>
            <div className="title">Clients</div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="overlay"></div>
</section>
    );
  }
  
  export default ServiceCounter;
  