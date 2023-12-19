import React from "react";
import HeroSlider from "./components/HeroSlider";
import Header from "./components/Header";
import './App.css'
import ParallaxSlider from "./components/ParallaxSlider";
const App = () => {
  return (
    <div className="App">
      <Header />
      <HeroSlider />
      <ParallaxSlider></ParallaxSlider>
    </div>
  );
};

export default App;
