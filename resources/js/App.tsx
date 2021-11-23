import { BrowserRouter, Link, Route, Routes, useLocation } from "react-router-dom";
import Navigation from "./components/Navigation";
import React, { FC, ReactDOM, useRef } from 'react';
import Home from "./pages/Home";
import Works from "./pages/Works";
import Blog from "./pages/Blog";
import About from "./pages/About";
import Footer from "./components/Footer";
import Editor from "./projects/editor/Editor";
import "./style.css";
import { useEffect, useState } from "react";
import ScrollReveal from "scrollreveal";


export default function App() {
  const navSpacerElem = useRef(null);
  const location = useLocation();
  const [navSpacerHeight, setNavSpacerHeight] = useState('0');

  React.useEffect(() => {
    if(location.pathname == '/' || location.pathname == '/works/projects/editor'){
      // console.log(navSpacerElem.current);
      setNavSpacerHeight('0');
    }else{
      setNavSpacerHeight('9vh');
    }
    setCount(count + 1);
  }, [location]);

  const [count, setCount] = useState(0);
  useEffect(() => {
    ScrollReveal().watch  = function (target: string | HTMLElement | NodeListOf<Element>, onEnter: any, onExit: () => void) {
      onExit = onExit || function () {};
      if (typeof onEnter === "function" && typeof onExit === "function") {
        const noEffect = {
          delay: 0,
          distance: '0',
          duration: 0,
          scale: 1,
        //   opacity: 1,
          rotate: { x: 0, y: 0, z: 0 },
          reset: true,
          beforeReset: onExit,
          beforeReveal: onEnter
        };
        this.reveal(target, noEffect);
      } else {
        throw new Error("invalid arguments");
      }
    };
    (window as any).sr = ScrollReveal({ reset: false });
    (window as any).sr.watch(
      ".reveal",
      function onEnter(el:HTMLElement) {
        if (!el.classList.contains("active")) {
          visible(el);
        }
        el.classList.add("active");

        el.classList.remove("up");
      },
      function onExit(el:HTMLElement) {
        let a = el.getBoundingClientRect();
        if (a.y / a.height < 0) {
          el.classList.add("up");
          // console.log("0% " + el.innerText);
        } else {
          el.classList.remove("active");
          el.style.opacity = "0";
          // console.log("100% " + el.innerText);
        }
      }
    );
    function visible(e:HTMLElement) {
      let delay: any = e.dataset.delay ? e.dataset.delay : 0;
      const visible = [
        // keyframes
        {
          offset: 0,
          transform: "translateY(40px) rotate(4deg)",
          opacity: "0"
        },
        {
          offset: 0.5,
          transform: "translateY(40px) rotate(3deg)",
          opacity: "0"
        },
        { offset: 1, transform: "translateY(0px) rotate(0deg)", opacity: "1" }
      ];
      e.animate(visible, {
        // timing options
        delay: parseInt(delay, 10),
        duration: 500,
        easing: "cubic-bezier(0.42, 0, 0.58, 1)",
        iterations: 1
      });
      setTimeout(() => {
        e.style.opacity = "1";
      }, 2 * parseInt(delay, 10));
    }
    let backtext = document.querySelectorAll(".backtext") as NodeList;
    backtext.forEach((e:any) => {
      let el =
        e.getBoundingClientRect().top -
        document.body.getBoundingClientRect().top;
      // console.log(el);
      window.addEventListener("scroll", function () {
        // console.log(document.documentElement.scrollTop);
        if (
          el - 300 < document.documentElement.scrollTop &&
          el + 400 > document.documentElement.scrollTop
        ) {
          let speed = e.dataset.speed;
          let top = e.dataset.top;
          // console.log("reach");
          e.style.opacity = 0.8;
          e.style.position = "relative";
          e.style.top =
            parseInt(top, 10) +
            (document.documentElement.scrollTop - el) / parseInt(speed, 10) +
            "px";
          // } else if (el + 500 < document.documentElement.scrollTop) {
        } else {
          // console.log("out");
          e.style.opacity = 0;
        }
      });
    });
  }, [count]);
  const theme = {
    mainColor: "red",
    accentColor: "#000",
    tertiaryColor: "#000",
    backgroundColor: "rgba(235, 235, 235, 0.433)",
    textColor: "#000",
    colorOne: "rgb(255, 0, 0)",
    colorOneLight: "rgba(255, 0, 0, 0.205)"
  };
  return (
    <>
      <div onClick={() => setCount(count + 1)}>
        <Navigation theme={theme} />
      </div>
      <div ref={navSpacerElem} style={{height:navSpacerHeight}}></div>
      <Routes>
        <Route path="/" element={<Home theme={theme}/>} />
        <Route path="/about/*" element={<About theme={theme}/>} />
        <Route path="/works/*" element={<Works theme={theme}/>} />
        <Route path="/blog/*" element={<Blog theme={theme}/>} />
        <Route path="/works/projects/editor" element={<Editor theme={theme}/>} />
      </Routes>
      <Footer />
    </>
  );
}