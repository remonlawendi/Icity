import Navbar from "../components/navbar"
import Banner from "../components/Banner"
import ServiceCounter from "../components/ServiceCounter"
import Footer from "../components/footer"
import Services from "../components/Services"
import ServiceDetails from "../components/serviceDetails"
function portfolioDetail() {
  return (
    <div className="wraper">
      <Navbar></Navbar>
      <Banner></Banner>
      <ServiceDetails></ServiceDetails>
      <ServiceCounter></ServiceCounter>
      <Services></Services>
      <Footer></Footer>
    </div>
  );
}

export default portfolioDetail;
