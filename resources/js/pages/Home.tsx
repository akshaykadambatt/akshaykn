import React, { useState, FunctionComponent  } from "react";
import { NavLink } from "react-router-dom";
import RecentBlock from "../components/RecentBlock";
import ItemBlock from "../components/ItemBlock";
import AboutBlock from "../components/AboutBlock";
import SkillBlock from "../components/SkillBlock";
import { AppProps } from "myModule";
import { Button, Navlink } from "../components/Button";

const Home:FunctionComponent<AppProps> = () => {
  const heading: React.CSSProperties = {
    fontWeight: 700,
    WebkitTextStroke: "1px var(--main-color)",
    WebkitTextFillColor: "transparent"
  }; 
  const intro: React.CSSProperties = {
    height: "100vh",
    display: "flex",
    alignItems: "flex-end",
    padding: "12vh 8vw",
    boxSizing: "border-box",
    position: "relative",
    overflow: "hidden",
    marginBottom: "10px"
  };
  const paddingbottom: React.CSSProperties = {
    padding: "0px 0 20px 0"
  };
  return (
    <>
      {/* How to use Loco correctly https://stackoverflow.com/questions/68264720/how-to-correctly-use-locomotive-scroll-with-next-js-routing */}
      <div style={intro}>
        <div id="backWrap">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div>
          <h1 style={heading} data-delay="0" className="reveal">
            Complexity as Simplicity
          </h1>
          <p data-delay="20" className="reveal">
            Hello there, I'm Akshay. I focus on making and keeping things simple. As a great man once said, simplicity is the ultimate sophistication.
          </p>
          <Navlink to="/works" text="works" />
        </div>
      </div>
      <div className="container">
        <SkillBlock />
      </div>
      <div className="container">
        <h1 className="reveal">Recents</h1>
        <div data-speed="2" data-top="300" className="backtext">
          Recents
        </div>
        <RecentBlock />
      </div>
      <div className="container">
        <h1 className=" reveal">Quickview</h1>
        <ItemBlock />
        <p style={paddingbottom}>
          Hello there, its me here. Hello there, its me here. Hello there, its
          me here. Hello there, its me here. Hello there, its me here.
        </p>
        <Navlink to="/work" text="work" />
      </div>
      <div className="container">
        <h1 className=" reveal">About</h1>
        <div data-speed="2" data-top="300" className="backtext">
          About
        </div>
        <AboutBlock />
      </div>
    </>
  );
};
export default Home;
