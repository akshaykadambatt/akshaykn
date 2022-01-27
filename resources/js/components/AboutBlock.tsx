import * as React from 'react';
import { NavLink } from "react-router-dom";
import { Button, Navlink } from "../components/Button";
import { createUseStyles, ThemeProvider, useTheme } from "react-jss";
import { RiFacebookLine, RiInstagramLine, RiGithubLine, RiStackOverflowLine, RiWhatsappLine } from "react-icons/ri";
import { AiOutlineLinkedin } from 'react-icons/ai';

export default function AboutBlock() {
  const theme = {
    background: "#f7df1e",
    color: "#24292e"
  };
  const useStyles = createUseStyles({
    back: {
      display: "flex",
      justifyContent: "space-around",
      alignItems: "flex-start",
      "@media (max-width:600px)": {
        flexDirection: "column",
        alignItems: "center",
      }
    },
    round: {
      // border: "1px solid #000",
      aspectRatio: "1/1",
      marginTop: "10%",
      height: "220px",
      minWidth: "220px",
      borderRadius: "100%",
      background: "url('/images/akshay.jpg') top left/100% no-repeat",
      boxShadow: "0 0 0 90px rgba(var(--main-color-hex),.05), 0 0 0 250px rgba(var(--main-color-hex),.05)",
      // boxShadow:
      //   "rgb(0 0 0 / 10%) 3px 3px 4px 2px,rgb(255 255 255 / 91%) -3px -3px 4px 2px,inset rgb(255 255 255 / 83%) 0 0 0 0, inset rgb(241 237 237 / 91%) 0 0 0 0",
      "@media (max-width:600px)": {
      }
    },
    text: {
      display: "flex",
      flexDirection: "column",
      maxWidth: "65%",
      margin: "0 0 0 5%",
      alignItems: "flex-start",
      "@media (max-width:600px)": {
        maxWidth: "93%",
      }
    },
    head: {
      marginBottom: "2px"
    },
    socials: {
      display: "flex",
      "& a": {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "11px",
        margin: "10px 4vw 20px 0",
        borderRadius: "100%",
        height: "28px",
        width: "28px",
        boxSizing: "content-box",
        transition: "all 0.1s",
        backdropFilter: "blur(8px)",
        textAlign: "center",
        boxShadow:
          "rgb(0 0 0 / 10%) 3px 3px 4px 2px,rgb(255 255 255 / 91%) -3px -3px 4px 2px,inset rgb(255 255 255 / 83%) 0 0 0 0, inset rgb(241 237 237 / 91%) 0 0 0 0"
      },
      "& a:hover": {
        boxShadow:
          "rgb(0 0 0 / 10%) 0 0 0 0, rgb(255 255 255 / 91%) 0 0 0 0,inset rgb(255 255 255 / 83%) -3px -3px 4px 2px,inset rgb(241 237 237 / 91%) 3px 4px 4px 2px"
      }
    },
    "@media (prefers-color-scheme: dark)": {},
    wrapper: {
    //   background: ({ theme }) => theme.background
    }
  });
  const classes = useStyles({ theme });
  return (
    <>
      <div className={classes.back}>
        <div className={`reveal ${classes.round}`}></div>
        <div className={`reveal ${classes.text}`}>
          <h2 className={`reveal ${classes.head}`}>Akshay K Nair</h2>
          <p>
            Hello there, lorem ipsum dolor sit amet, consectetur adipiscing
            elit, sed do eiusmod tempor incididunt ut labore et dolore magna
            aliqua.Hello there, lorem ipsum dolor sit amet, consectetur
            adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua.
          </p>
          <p>
            Hello there, lorem ipsum dolor sit amet, consectetur adipiscing
            elit, sed do eiusmod tempor incididunt ut labore et dolore magna
            aliqua.
          </p>
          <div className={classes.socials}>
            <a href="https://www.linkedin.com/in/akshay-k-nair/" target="_blank" className="reveal" data-delay={0}>
              <AiOutlineLinkedin />
            </a>
            <a href="https://stackoverflow.com/users/7481663/akshay-k-nair" target="_blank" className="reveal" data-delay={60}>
              <RiStackOverflowLine />
            </a>
            <a href="https://github.com/akshayknz" target="_blank" className="reveal" data-delay={100}>
              <RiGithubLine />
            </a>
            <a href="https://wa.me/%2B918301044114?text=Hello%20there%2C%20Akshay!" target="_blank" className="reveal" data-delay={230}>
              <RiWhatsappLine />
            </a>
          </div>
          <Navlink to="/about" text="about" />
        </div>
      </div>
    </>
  );
}
