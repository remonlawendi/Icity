import Footer from "../components/footer"
import AboutUs from "../components/AboutUs"
import Counter from "../components/counter"
import Testimonials from "../components/Testimonials"
import Portfolio from "../components/Portfolio"
import Clients from "../components/client.jsx"
import Services from "../components/Services"
import OurTeam from "../components/ourTeam.jsx"
import Slider from "../components/Slider"
function Home() {
  return (
    <div className="wraper">
      <Slider></Slider>
      <AboutUs></AboutUs>
      <Counter></Counter>
      <Services></Services>
      <OurTeam></OurTeam>
      <Portfolio></Portfolio>
      <Clients></Clients>
      <Testimonials></Testimonials>
    </div>
  );
}

export default Home;
