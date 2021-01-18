import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from "./views/Home_page"
import AboutUs  from "./views/AboutUs_page"
import Service from "./views/Services_page"
import Portfolio from "./views/Portfolio_page"
import ContactUs from "./views/ContactUs_page"
import Notfound from "./views/404_page"

export const Routes = () => <Router>
  <Switch>
    <Route path="/" exact>
      <Home />
    </Route>
    <Route path="/aboutus" exact>
      <AboutUs/>
    </Route>
    <Route path="/service" exact>
      <Service/>
    </Route>
    <Route path="/portfolio" exact>
      <Portfolio/>
    </Route>
    <Route path="/contactus"  exact>
      <ContactUs/>
    </Route>
    <Route>
      <Notfound />
    </Route>
  </Switch>
</Router>