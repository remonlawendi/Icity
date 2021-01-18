import { Switch, Route } from 'react-router-dom'
import Home from "./views/Home_page"
import AboutUs  from "./views/AboutUs_page"
import Service from "./views/Services_page"
import Portfolio from "./views/Portfolio_page"
import ContactUs from "./views/ContactUs_page"
import Notfound from "./views/404_page"

export const Routes = () => <Switch>
    <Route path="/aboutus">
      <AboutUs/>
    </Route>
    <Route path="/service">
      <Service/>
    </Route>
    <Route path="/portfolio">
      <Portfolio/>
    </Route>
    <Route path="/contactus">
      <ContactUs/>
    </Route>
    <Route path="/" exact={true}>
      <Home />
    </Route>
    <Route>
      <Notfound />
    </Route>
  </Switch>