
import Logo from "../assets/img/logo.png"
import "./navbar.css"
function Navbar() {
    return (
        <header class="header">
        <div class="container">
    
           <nav class="navbar navbar-expand-lg">
                <h2 class="nav-brand">
                  <a class="navbar-brand" href="index.html" title="Bizler"><img src={Logo} alt="Bizler" /></a>
                </h2>
    
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#nav-content" aria-controls="nav-content"
                aria-expanded="false" aria-label="Toggle navigation">
                  <span class="navbar-toggler-icon"></span>
                  <span class="navbar-toggler-icon"></span>
                  <span class="navbar-toggler-icon"></span>
                </button>
                <div class="main-menu collapse navbar-collapse" id="nav-content">
                  <ul class="navbar-nav">
                    <li class="nav-item dropdown active">
                      <a class="nav-link" data-toggle="dropdown" href="#">Home</a>
                    </li>
                     <li class="nav-item dropdown">
                      <a class="nav-link" data-toggle="dropdown" href="#">About Us</a>
                    </li>
                     <li class="nav-item dropdown">
                      <a class="nav-link" data-toggle="dropdown" href="#">Services</a>
                    </li>
                    <li class="nav-item dropdown">
                      <a class="nav-link" data-toggle="dropdown" href="#">Portfolio</a>
                    </li>
                     <li class="nav-item dropdown">
                      <a class="nav-link"  data-toggle="dropdown" href="#">Contact Us</a>
                    </li>
                  </ul>
                </div>
              </nav>
        </div>
      </header>
    );
  }
  
  export default Navbar;
  