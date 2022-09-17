import { useState, useEffect } from "react";
import Header from "./Components/Header/Header";
import Projects from "./Components/Projects/Projects";
import Profile from "./Components/Profile/Profile";
import About from "./Components/About/About";
import Nickname from "./Components/Nickname/Nickname";
import Links from "./Components/Links/Links";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Nickname />
      <Header />
      <Profile />
      <Projects />
      <About />
      <Links />
    </div>
  );
}

export default App;
