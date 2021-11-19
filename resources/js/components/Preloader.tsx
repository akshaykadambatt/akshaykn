import { useEffect, useState } from "react";
import * as React from 'react';

export default function Preloader() {
  const pre: React.CSSProperties = {
    height: "100vh",
    width: "100vw"
  };
  const slider: React.CSSProperties = {
    height: "2px",
    width: "100vw",
    background: "var(--main-color)",
    position: "absolute",
    bottom: "23vh",
    animation: "slider 1.6s cubic-bezier(1, 0, 0.35, 1.08) 0s 1 normal"
  };
  const head: React.CSSProperties = {
    fontSize: "40px",
    fontWeight: 100,
    position: "absolute",
    top: "23vh",
    width: "100vw",
    textAlign: "center"
  };
  useEffect(() => {});
  return (
    <div>
      <div style={pre}>
        <div style={head}>Loading</div>
        <div style={slider}></div>
      </div>
    </div>
  );
}
