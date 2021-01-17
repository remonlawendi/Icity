import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../src/assets/css/GlobalStyle.css'
import '../src/assets/css/MainRules.css'
import '../src/assets/css/Responsive.css'
import './assets/css/Animate.css'
import './assets/css/lightbox.css'
import Home from "./views/Home_page"
import AboutUS from "./views/AboutUs_page"
// import Services from "./views/Services_page"
// import ServicesDetailsPage from "./views/ServiceDetails_page"
function App() {
  return (
    <div className="wraper">
      <Home></Home>
    </div>
  );
}

export default App;
