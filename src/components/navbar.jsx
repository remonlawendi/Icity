import { BrowserRouter as Router, Link } from "react-router-dom";
import Routes from "../Routes.js"
import Logo from "../assets/img/logo.png"
import axios from "axios"
import "./navbar.css"
function Navbar() {
  axios.get('http://20.36.212.104:880/api/front/GetAllGeneralData').then( res => {
    this.setState ={
        
    }
  })
    return (
        <header className="header">
        <div className="container">
           <nav className="navbar navbar-expand-lg">
                <h2 className="nav-brand">
                  <Router>
                    <Link className="navbar-brand" to="/" title="Bizler">
                    <img src={Logo} alt="Bizler" />
                    </Link>
                  </Router>
                </h2>
                <button className="navbar-toggler" type="button"
                        data-toggle="collapse" data-target="#nav-content"  aria-controls="nav-content"
                        aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                  <span className="navbar-toggler-icon"></span>
                  <span className="navbar-toggler-icon"></span>
                </button>
                <Router>
                <div className="main-menu collapse navbar-collapse" id="nav-content">
                  <ul className="navbar-nav">
                    <li className="nav-item dropdown active">
                      <Link to="/" className="nav-link" data-toggle="dropdown" >Home</Link>
                    </li>
                     <li className="nav-item dropdown">
                      <Link className="nav-link" data-toggle="dropdown" to="/aboutus" >About Us</Link>
                    </li>
                     <li className="nav-item dropdown">
                      <Link className="nav-link" data-toggle="dropdown" to="/service">Services</Link>
                    </li>
                    <li className="nav-item dropdown">
                      <Link className="nav-link" data-toggle="dropdown" to="/portfolio">Portfolio</Link>
                    </li>
                     <li className="nav-item dropdown">
                      <Link className="nav-link"  data-toggle="dropdown" to="contactus">Contact Us</Link>
                    </li>
                  </ul>
                </div>
                </Router>
              </nav>
        </div>
      </header>
    );
  }
  
  export default Navbar;