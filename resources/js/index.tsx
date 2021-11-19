import React, { StrictMode } from "react";
import { render } from "react-dom";
import Entry from "./Entry";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";

render(<StrictMode>
  <BrowserRouter><Entry /></BrowserRouter>
    
  </StrictMode>, document.getElementById("app"));
