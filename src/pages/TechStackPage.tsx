import { useState } from "react";
import "../styles/main.sass";

import Switch from "@mui/material/Switch";

import HtmlIcon from "../assets/icons/html-icon.svg";
import CssIcon from "../assets/icons/css-icon.svg";
import TypescriptIcon from "../assets/icons/typescript-icon.svg";
import ReactIcon from "../assets/icons/react-icon.svg";
import SassIcon from "../assets/icons/sass-icon.svg";
import JavascriptIcon from "../assets/icons/javascript-icon.svg";
import FlutterIcon from "../assets/icons/flutter-icon.svg";
const TechStackPage = () => {
  const [mode, setMode] = useState(true);

  return (
    <section id="tech-stack" className="tech__stack section">
      <header>
        <h2>My Teck Stack</h2>
        <p>Technologies I've been working with recently</p>
      </header>
      <main>
        <header className="switch">
          <span>Web</span>
          <Switch value={mode} onChange={(e) => setMode(!mode)} />
          <span>Mobile</span>
        </header>
        <main className="tech__container">
          <section className="web">
            <img className="icon" src={HtmlIcon} alt="" />
            <img className="icon" src={CssIcon} alt="" />
            <img className="icon" src={SassIcon} alt="" />          
            <img className="icon" src={JavascriptIcon} alt="" />          
            <img className="icon" src={TypescriptIcon} alt="" />          
            <img className="icon" src={ReactIcon} alt="" />                     
          </section>
          <section className="mobile">
            <img className="icon" src={FlutterIcon} alt="" />            
          </section>
        </main>
        
      </main>
    </section>
  );
};

export default TechStackPage;
