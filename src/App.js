import React, { Component } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Menu from "./components/Menu";
import AboutUs from "./components/AboutUs";
import NavBar from "./components/NavBar";

class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <div className="App">
            <NavBar />
            <Routes>
              <Route exact path="/" element={<Home />}></Route>
              <Route exact path="/about" element={<AboutUs />}></Route>
              <Route exact path="/menu" element={<Menu />}></Route>
            </Routes>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;