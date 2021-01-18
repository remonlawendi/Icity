
import Banner from "../components/Banner"
import Servicing from "../components/Servicing"
import Pricing from "../components/pricing"
import Counter from "../components/counter"

function Services() {
  return (
    <div className="wraper">
      <Banner></Banner>
      <Servicing></Servicing>
      <Pricing></Pricing>
      <Counter></Counter>
    </div>
  );
}

export default Services;
