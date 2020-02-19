import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Portfolio from "./pages/Portfolio";
import About from "./pages/About";
import Search from "./pages/Search";
import Resume from "./pages/Resume";
// import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper";
import Navbar2 from "./components/Navbar2";
 

function App() {
  return (
    <Router>
      <div>
        <Navbar2></Navbar2>
        {/* <Navbar></Navbar>  */}
        <Wrapper>
          <Route exact path="/" component={About} />
          <Route exact path="/about" component={About} />
          <Route exact path="/portfolio" component={Portfolio} />
          <Route exact path="/search" component={Search} />
          <Route exact path="/resume" component={Resume} />
          
        </Wrapper>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
