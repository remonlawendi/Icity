import { Link, NavLink } from "react-router-dom";
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
                    <Link className="navbar-brand" to="/" title="Bizler">
                    <img src='img/logo.png' alt="Bizler" />
                    </Link>
                </h2>
                <button className="navbar-toggler" type="button"
                        data-toggle="collapse" data-target="#nav-content"  aria-controls="nav-content"
                        aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                  <span className="navbar-toggler-icon"></span>
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div className="main-menu collapse navbar-collapse" id="nav-content">
                  <ul className="navbar-nav">
                    <li className="nav-item dropdown">
                      <NavLink exact to="/" className="nav-link" >Home</NavLink>
                    </li>
                     <li className="nav-item dropdown">
                      <NavLink className="nav-link" to="/aboutus" >About Us</NavLink>
                    </li>
                     <li className="nav-item dropdown">
                      <NavLink className="nav-link" to="/service">Services</NavLink>
                    </li>
                    <li className="nav-item dropdown">
                      <NavLink className="nav-link" to="/portfolio">Portfolio</NavLink>
                    </li>
                     <li className="nav-item dropdown">
                      <NavLink className="nav-link" to="contactus">Contact Us</NavLink>
                    </li>
                  </ul>
                </div>
              </nav>
        </div>
      </header>
    );
  }
  
  export default Navbar;