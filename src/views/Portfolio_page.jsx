import Navbar from "../components/navbar"
import Banner from "../components/Banner"
import Counter from "../components/Counter"
import Footer from "../components/footer"
import Portfolio from "../components/Portfolio"
function ServiceDetailsPage() {
  return (
    <div className="wraper">
      <Navbar></Navbar>
      <Banner></Banner>
    <Portfolio></Portfolio>
      <Counter></Counter>
      <Footer></Footer>
    </div>
  );
}

export default ServiceDetailsPage;