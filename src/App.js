import "./styles.css";


import "bootstrap/dist/css/bootstrap.min.css";


import { BrowserRouter as Router, Switch,  Route } from 'react-router-dom'
import About from "./components/about/About";
import Home from "./components/Home/Home";

export default function App() {

  return (
  <Router>
    <Switch>
      <Route path="/">
        <Home />
      </Route>
      <Route path="/about">
        <About />
      </Route>
    </Switch>
  </Router>
  )
}
