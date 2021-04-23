import React from 'react'
import {BrowserRouter as Router} from 'react-router-dom'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import {useRoutes} from "./routes"
import NavBar from "./components/NavBar.js";

const App = () => {
  let isAuthenticated = true
  const routes = useRoutes(isAuthenticated)
  return (
    <Router>
      <NavBar/>
      <div className="container">
        {routes}
      </div>
    </Router>
  );
}

export default App;
