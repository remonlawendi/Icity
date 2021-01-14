import Navbar from "../components/navbar"
import Banner from "../components/Banner"
import Servicing from "../components/Servicing"
import Pricing from "../components/pricing"
import Counter from "../components/counter"
import Footer from "../components/footer"

function Services() {
  return (
    <div className="wraper">
      <Navbar></Navbar>
      <Banner></Banner>
        <Servicing></Servicing>
        <Pricing></Pricing>
      <Counter></Counter>
      <Footer></Footer>
    </div>
  );
}

export default Services;
