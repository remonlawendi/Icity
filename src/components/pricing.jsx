function Pricing() {
    return (
        <section id="pricing">
        <div className="container">
          <div className="section_heading">
            <h2>Our <span>Pricing</span></h2>
            <div className="separator">
              <ul>
                <li></li>
                <li></li>
                <li></li>
              </ul>
            </div>
            <div className="heading_content">
             Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
            </div>
          </div>
          <div className="col-lg-12 col-md-12 col-sm-6 col-xs-12 content_sec">
            <div className="row">
              <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12 price_card">
                <div className="plan-title">
                  <h4>Personal</h4>
                  <div className="separator">
                    <ul>
                      <li></li>
                      <li></li>
                      <li></li>
                    </ul>
                  </div>
                </div>
                <div className="price_amount"> From<strong>$9</strong>/mo </div>
                <div className="features">
                  <ul>
                    <li>One Feature</li>
                    <li className="deactive">Another Feature</li>
                    <li className="deactive">More Feature</li>
                    <li className="deactive">Extra Feature</li>
                  </ul>
                </div>
                <div className="purchase"> <a className="purchase_now" href="javascript:void(0)" title="Purchase Now">Purchase Now</a> </div>
              </div>
              <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12 price_card ultimate">
                <div className="plan-title">
                  <h4>Ultimate</h4>
                  <div className="separator">
                    <ul>
                      <li></li>
                      <li></li>
                      <li></li>
                    </ul>
                  </div>
                </div>
                <div className="price_amount"> From<strong>$199</strong>/mo </div>
                <div className="features">
                  <ul>
                    <li>One Feature</li>
                    <li>Another Feature</li>
                    <li>More Feature</li>
                    <li>Extra Feature</li>
                  </ul>
                </div>
                <div className="purchase"> <a className="purchase_now" href="javascript:void(0)" title="Purchase Now">Purchase Now</a> </div>
              </div>
              <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12 price_card">
                <div className="plan-title">
                  <h4>Business</h4>
                  <div className="separator">
                    <ul>
                      <li></li>
                      <li></li>
                      <li></li>
                    </ul>
                  </div>
                </div>
                <div className="price_amount"> From<strong>$99</strong>/mo </div>
                <div className="features">
                  <ul>
                    <li>One Feature</li>
                    <li>Another Feature</li>
                    <li>More Feature</li>
                    <li className="deactive">Extra Feature</li>
                  </ul>
                </div>
                <div className="purchase"> <a className="purchase_now" href="javascript:void(0)" title="Purchase Now">Purchase Now</a> </div>
              </div>
            </div>
          </div>
        </div>
        <div className="clearfix"></div>
      </section>

    );
  }
  
  export default Pricing;
  