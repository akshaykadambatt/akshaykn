import * as React from 'react';
export default function Footer() {
    const back = {
      background: "rgba(0,0,0,0.051)"
    };
    const inner: React.CSSProperties = {};
    const backtext: React.CSSProperties = {
      fontSize: "100px",
      WebkitTextStroke: "1px var(--main-color)",
      WebkitTextFillColor: "transparent",
      height: "0",
      position: "relative",
      left: "-5px",
      top: "-20px"
    };
    return (
      <>
        <div style={back}>
          <div className="container" style={inner}>
            <div style={backtext}>Footer</div>
            goto links goto links goto links goto links goto links goto links goto
            links goto links goto links goto links goto links goto links goto
            links goto links goto links goto links goto links goto links goto
            links goto links goto links goto links goto links goto links goto
            links goto links goto links goto links goto links goto links goto
            links goto links goto links goto links goto links goto links goto
            links goto links goto links goto links goto links goto links goto
            links goto links goto links goto links goto links goto links goto
            links goto links goto links goto links goto links goto links goto
            links
          </div>
        </div>
      </>
    );
  }
  