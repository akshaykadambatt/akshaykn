import { createUseStyles } from "react-jss";
import * as React from 'react';

export default function RecentBlock() {
  const useStyles = createUseStyles({
    wrap: {
      display: "grid",
      gridTemplateColumns: "repeat(3, 1fr)",
      gridAutoRows: "100px",
      gridColumnGap: "23px",
      gridRowGap: "26px",
      padding: "31px",
      boxSizing: "border-box",
      maxWidth: "900px"
    },
    box: {
      borderRadius: "10px",
      backdropFilter: "blur(15px)",
      cursor: "pointer",
      transition: "all 0.1s",
      boxShadow:
        "rgb(0 0 0 / 10%) 3px 3px 4px 2px,rgb(255 255 255 / 91%) -3px -3px 4px 2px,inset rgb(255 255 255 / 83%) 0 0 0 0, inset rgb(241 237 237 / 91%) 0 0 0 0",
      "&:hover": {
        boxShadow:
          "rgb(0 0 0 / 10%) 0 0 0 0, rgb(255 255 255 / 91%) 0 0 0 0,inset rgb(255 255 255 / 83%) -3px -3px 4px 2px,inset rgb(241 237 237 / 91%) 3px 4px 4px 2px"
      }
    },
    box1: {
      gridColumnStart: 1,
      gridColumnEnd: 4,
      gridRowStart: 1,
      gridRowEnd: 3
    },
    box2: {
      gridArea: "5/1/3/3"
    },
    box3: {
      gridArea: "3/3/4/3"
    },
    box4: {
      gridArea: "4/3/4/3"
    },
    box5: {
      gridArea: "5 /2 / 7 / 1"
    },
    box6: {
      gridArea: "5 / 2 / 7 / 4"
    },
    boxInsideWrap: {
      display: "-webkit-box",
      WebkitLineClamp: "6",
      WebkitBoxOrient: "vertical",
      overflow: "hidden",
      textAlign: "left",
      padding: "0 20px"
    },
    tag: {
      position: "absolute",
      left: "20px",
      bottom: "15px",
      fontSize: "13px",
      fontWeight: "500",
      display: "inline-block",
      background: "#cdcdcd36",
      padding: "3px 10px",
      borderRadius: "100px",
      border: "1px solid #8f8f8f4d",
      cursor: "pointer",
      transition: "all 0.25s",
      "&:hover": {
        background: "#63636336",
        padding: "3px 12px",
        border: "1px solid #0000004d"
      }
    }
  });
  const classes = useStyles();
  return (
    <>
        <div className={`reveal ${classes.wrap}`}>
          <div
            data-delay="0"
            className={`reveal ${classes.box1} ${classes.box}`}
          >
            <div className={classes.tag}>#work</div>
            <div className={classes.boxInsideWrap}>
              <h2>Works</h2>
              <p>
                The timeline of all the projects I've done and the personal
                projects I've created
              </p>
            </div>
          </div>
          <div
            className={`reveal ${classes.box2} ${classes.box}`}
            data-delay="10"
          >
            <div className={classes.tag}>#blog</div>
            <div className={classes.boxInsideWrap}>
              <h2>Blog</h2>
              <p>The blog has a log of all the shit I've posted.</p>
            </div>
          </div>
          <div
            data-delay="10"
            className={`reveal ${classes.box3} ${classes.box}`}
          >
            <div className={classes.boxInsideWrap}>
              <p>Links to the outside</p>
            </div>
          </div>
          <div
            data-delay="10"
            className={`reveal ${classes.box4} ${classes.box}`}
          >
            <div className={classes.boxInsideWrap}>
              <p>About.</p>
            </div>
          </div>
          <div
            data-delay="20"
            className={`reveal ${classes.box5} ${classes.box}`}
          >
            <div className={classes.tag}>#blog</div>
            <div className={classes.boxInsideWrap}>
              <p>The blog has a log of all the shit I've posted.</p>
            </div>
          </div>
          <div
            data-delay="20"
            className={`reveal ${classes.box6} ${classes.box}`}
          >
            <div className={classes.tag}>#blog</div>
            <div className={classes.boxInsideWrap}>
              <h2>Blog</h2>
              <p>The blog has a log of all the shit I've posted.</p>
            </div>
          </div>
        </div>
    </>
  );
}
