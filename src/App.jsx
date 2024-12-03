import React from "react";
// import "./images/logo.png"
// import "./public/images/logo.png"
import "../public/images/logo.png"
import UtilityNav from "./components/UtilityNav";
import Navbar from "./components/Navbar";
import HomePage from "./components/HomePage";
import Footer from "./components/Footer";
const App = () => {
  return <div>
    <UtilityNav/>
    <Navbar currentPage={"home"}/>  
    <HomePage/>
    <Footer />
  </div>;
};

export default App;
