import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AboutUs from "./Components/Pages/AboutUs";
import Services from "./Components/Pages/Services";
import Portfolio from "./Components/Pages/Portfolio";
import Blog from "./Components/Pages/Blog";
import ContactUs from "./Components/Pages/ContactUs";
import Home from "./Components/Pages/Home";
import NavBar from "./Components/NavBar";

function App() {
  return (
    <div>
      <Switch>
        <Route path="/aboutus">
          <NavBar />
          <AboutUs />
        </Route>
        <Route path="/services">
          <NavBar />
          <Services />
        </Route>
        <Route path="/portfolio">
          <NavBar />
          <Portfolio />
        </Route>
        <Route path="/blog">
          <NavBar />
          <Blog />
        </Route>
        <Route path="/contactus">
          <NavBar />
          <ContactUs />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
