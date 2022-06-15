import { NavLink } from "react-router-dom";
import * as React from 'react';
import { createUseStyles } from "react-jss";
import { useEffect, useState, FunctionComponent } from "react";
type AppProps = {
  theme: any;
};
const Navigation:FunctionComponent<AppProps> = ({ theme }) => {
  const [menu, setMenu] = useState(false);

  const useStyles = createUseStyles({
    nav: {
      color: "red",
      background: "rgb(149 149 149 / 8%)",
      width: "100vw",
      height: "10vh",
      display: "flex",
      justifyContent: "space-around",
      position: "fixed",
      alignItems: "center",
      backdropFilter: "blur(8px)",
      zIndex: "100",
      boxShadow:
        "rgb(179 178 178 / 39%) 1px 1px 0px 0px, rgb(92 92 92 / 17%) 1px 1px 20px 5px",
      animation: "navArrive 1s cubic-bezier(1, 0, 0.35, 1.08) 0s 1 normal"
    },

    logoWrapper: {
      fontWeight: "600",
      width: "50vw"
    },
    navLink: {
      border: "2px solid rgba(0, 0, 0,0)",
      padding: "5px 5px",
      fontWeight: "500",
      transition: "all cubic-bezier(0.19, 0.29, 0.23, 1.32) .3s"
    },
    lineWrap: {
      cursor: "pointer",
      height: "85%",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      width: "50px",
      alignItems: "center"
    },
    line: {
      // border: "2px solid " + theme.mainColor,
      height: "4px",
      width: "32px",
      borderRadius: "900px",
      transition: "all ease .3s",
      background: theme.accentColor
    },
    line1: {
      transform: "translatey(-4px)"
    },
    line2: {
      opacity: "1"
    },
    line3: {
      transform: "translatey(4px)"
    },
    opened: {
      "& $line1": {
        transform: "translatey(3px) rotate(45deg)"
      },
      "& $line2": {
        opacity: "0"
      },
      "& $line3": {
        transform: "translatey(-5px) rotate(-45deg)"
      }
    },
    linkWrapper: {
      display: "flex",
      width: "75vw",
      justifyContent: "space-around",
      maxWidth: "500px",
      alignItems: "center",
      flexDirection: "column"
    },
    menuWrapper: {
      position: "fixed",
      backdropFilter: "blur(20px)",
      top: "0",
      left: "0",
      display: "flex",
      zIndex: "-50",
      opacity: "0",
      transition: "all ease .3s",
      height: "100vh",
      width: "100vw",
      justifyContent: "space-evenly",
      flexDirection: "column",
      alignItems: "center",
      background: "rgba(255,255,255,.4)",
      boxSizing: "border-box",
      padding: "10vh 0 2vh 0"
    },
    open: {
      zIndex: "50",
      opacity: "1",
      padding: "24vh 0 14vh 0"
    },
    active: {
      padding: "5px 15px",
      border: "2px solid rgba(0, 0, 0,1)",
      fontWeight: "600"
    },
    p: {
      padding: "10vw",
      textAlign: "center",
      width: "100vw",
      boxSizing: "border-box"
    }
  });
  const classes = useStyles({ theme });
  return (
    <>
      <nav className={classes.nav}>
        <div className={classes.logoWrapper}>
          <NavLink to="/">
            Akshay K Nair
          </NavLink>
        </div>
        <div
          className={`${classes.lineWrap} ${
            menu === true ? `${classes.opened}` : ""
          }`}
          onClick={() => setMenu((prevMenu) => !prevMenu)}
        >
          <div className={`${classes.line} ${classes.line1}`}></div>
          <div className={`${classes.line} ${classes.line2}`}></div>
          <div className={`${classes.line} ${classes.line3}`}></div>
        </div>
      </nav>
      <div
        className={`${classes.menuWrapper} ${
          menu === true ? `${classes.open}` : ""
        }`}
      >
        <div className={classes.linkWrapper}>
          <NavLink
            className={isActive =>
              classes.navLink + (!isActive ? classes.active : "")
            }
            onClick={() => setMenu((prevMenu) => !prevMenu)}
            to="/"
          >
            {" "}
            home
          </NavLink>
          <NavLink
            className={isActive =>
              classes.navLink + (!isActive ? classes.active : "")
            }
            onClick={() => setMenu((prevMenu) => !prevMenu)}
            to="/works"
          >
            {" "}
            work
          </NavLink>
          <NavLink
            className={isActive =>
              classes.navLink + (!isActive ? classes.active : "")
            }
            onClick={() => setMenu((prevMenu) => !prevMenu)}
            to="/blog"
          >
            {" "}
            blog
          </NavLink>
          <NavLink
            className={isActive =>
              classes.navLink + (!isActive ? classes.active : "")
            }
            onClick={() => setMenu((prevMenu) => !prevMenu)}
            to="/about"
          >
            {" "}
            about
          </NavLink>
        </div>
        <div className={classes.p}>
          <p>
            Hi there, stranger.
          </p>
        </div>
      </div>
    </>
  );
};
export default Navigation;
