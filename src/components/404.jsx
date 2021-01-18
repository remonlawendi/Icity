function Four0Four() {
  return (
    <section id="page-not-found" className="gray-bg">
    <div className="container">
      <div className="row">
          <div className="col-lg-5 col-md-4 col-sm-12 col-xs-12 text-center img_sec">
              <img src="img/error_404.png" alt="Errow 404" />
          </div>
          <div className="col-lg-7 col-md-8 col-sm-12 col-xs-12 text-center content_sec">
              <div className="errow-heading">
                  <img src="img/oops.png" alt="oops" />
              </div>
              <div className="error-content">
                <h4>Page Not Found!</h4>
                <div className="separator">
                  <ul>
                    <li></li>
                    <li></li>
                    <li></li>
                  </ul>
                </div>
                <p>This is not the page your are looking for. Reach out with your feelings and try refining your search or return to base.</p>
                <a href="index.html" title="Homepage">Back to Home</a>
              </div>
          </div>
      </div>
    </div>
  </section>
  );
}

export default Four0Four;
