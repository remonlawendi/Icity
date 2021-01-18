import team_mimber2 from "../assets/img/team-member-pic2.jpg"
import team_mimber3 from "../assets/img/team-member-pic3.jpg"
function OurTeam() {
    return (
        <section id="our_team" className="gray-bg">
        <div className="container">
          <div className="section_heading">
            <h2>Our <span>Team</span></h2>
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
            <div className="team-slider owl-two owl-carousel owl-theme">
              <div className="item team-card">
                
                <div className="client_dp"> <img src={team_mimber3} alt="Team" /> </div>
                <div className="name_designation">
                  <h5><a href="team-member-detail.html">Tania Andrew</a></h5>
                  <span>Designer</span> </div>
                <div className="description">
                  <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown</p>
                </div>
              
              </div>
              <div className="item team-card">
                
                <div className="client_dp"> <img src={team_mimber2} alt="Team" /> </div>
                <div className="name_designation">
                  <h5><a href="team-member-detail.html">Alec Thompson</a></h5>
                  <span>Developer</span> </div>
                <div className="description">
                  <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown</p>
                </div>              
              </div>

            </div>
          </div>
        </div>
        <div className="clearfix"></div>
      </section>    
    );
  }
  
  export default OurTeam;
  