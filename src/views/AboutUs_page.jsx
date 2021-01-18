import Banner from "../components/Banner"
import AboutCompany from "../components/aboutCompny"
import Counter from "../components/counter"
import OurTeam from "../components/ourTeam"
import Qualities from "../components/qualities"
import AboutDetails from "../components/AboutDetails"
function AboutUS() {
  return (
    <div className="wraper">
      <Banner></Banner>
      <AboutCompany></AboutCompany>
      <Qualities></Qualities>
      <AboutDetails></AboutDetails>
      <OurTeam></OurTeam>
      <Counter></Counter>
    </div>
  );
}

export default AboutUS;
