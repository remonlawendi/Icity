
import cli1 from "../assets/img/client-1.jpg"
import cli2 from "../assets/img/client-2.jpg"
import cli3 from "../assets/img/client-3.jpg"
import cli4 from "../assets/img/client-4.jpg"
import cli5 from "../assets/img/client-5.jpg"
import cli6 from "../assets/img/client-6.jpg"

function Clients() {
    return (
        <div id="client">
        <div className="container">
          <div className="col-lg-12 ">
            <div className="team-slider owl-three owl-carousel owl-theme">
              <div className="item"> <img src={ cli1 } alt="Client" /> </div>
              <div className="item"> <img src={ cli2 } alt="Client" /> </div>
              <div className="item"> <img src={ cli3 } alt="Client" /> </div>
              <div className="item"> <img src={ cli4 } alt="Client" /> </div>
              <div className="item"> <img src={ cli5 }alt="Client" /> </div>
              <div className="item"> <img src={ cli6 } alt="Client" /> </div>
            </div>
          </div>
        </div>
        <div className="clearfix"></div>
        <div className="overlay"></div>
      </div>
      
    );
  }
  
  export default Clients;
  