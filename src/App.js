import { Routes } from './Routes'
import '../src/assets/css/GlobalStyle.css'
import '../src/assets/css/MainRules.css'
import '../src/assets/css/Responsive.css'
import './assets/css/Animate.css'
import './assets/css/lightbox.css'
import Navbar from "./components/navbar"
import Footer from "./components/footer"
function App() {
  return (
    <div className="wraper">
    <Navbar></Navbar>
      <Routes />
    <Footer></Footer>
    </div>
  );
}

export default App;
