import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import * as React from 'react';
import App from "./App";
import Preloader from "./components/Preloader";
import "./style.css";
import { useEffect, useState } from "react";

export default function Entry() {
  const [state, setState] = useState(0);
  useEffect(() => {
    setTimeout(() => {
      setState(1);
    }, 0); 
  }, [state]);
  return (
    <div>
      <App />
      {//state === 0 && <Preloader />
      }
      {//state === 1 && <><App /></>
      }
    </div>
  );
}
