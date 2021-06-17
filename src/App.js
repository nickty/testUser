import "./styles.css";


import "bootstrap/dist/css/bootstrap.min.css";


import { BrowserRouter as Router, Switch,  Route } from 'react-router-dom'
import About from "./components/about/About";
import Home from "./components/Home/Home";
import Contact from "./components/contact/Contact";
import Register from "./components/Register/Register";

export default function App() {

  return (
  <Router>
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/about">
        <About />
      </Route>
      <Route exact path="/contact">
        <Contact />
      </Route>
      <Route exact path="/register">
        <Register />
      </Route>
    </Switch>
  </Router>
  )
}
