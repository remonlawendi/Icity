import Navbar from "../components/navbar"
import Banner from "../components/Banner"
import AboutCompany from "../components/aboutCompny"
import Counter from "../components/counter"
import OurTeam from "../components/ourTeam"
import Footer from "../components/footer"
import Qualities from "../components/qualities"
import AboutDetails from "../components/AboutDetails"
function AboutUS() {
  return (
    <div className="wraper">
      <Navbar></Navbar>
      <Banner></Banner>
      <AboutCompany></AboutCompany>
      <Qualities></Qualities>
      <AboutDetails></AboutDetails>
      <OurTeam></OurTeam>
      <Counter></Counter>
      <Footer></Footer>
    </div>
  );
}

export default AboutUS;
