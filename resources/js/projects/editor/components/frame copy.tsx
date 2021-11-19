import React, {FunctionComponent, useRef, useState,useEffect } from 'react';
import { createUseStyles } from "react-jss";
import { AppProps } from "myModule";
import Hammer from "hammerjs";

const Frame:FunctionComponent<AppProps> = ({theme}) => {
  useEffect(()=>{
    let stage = document.getElementById('too') as HTMLElement;
    var mc = new Hammer.Manager(stage);
    var Rotate = new Hammer.Pan({
    });
    mc.add(Rotate);
    var lastPosX = stage.offsetLeft;
    var lastPosY = stage.offsetTop;
    var isDragging = false;
    mc.on('pan', function(e) {
      var elem = e.target;
      if ( ! isDragging ) {
        isDragging = true;
      }
      var posX = e.deltaX + lastPosX;
      var posY = e.deltaY + lastPosY;
      if (e.isFinal) {
        isDragging = false;lastPosX = posX;
        lastPosY = posY;
      }
        var distance = Math.round(e.distance);    
        stage.style.transform = 'translate('+posX+'px,'+posY+'px)';
    });
 })
  const useStyles = createUseStyles({
        editor: {
          color: "red",
          display: "flex",
          height: "70vh"
        },
        box: {
            border: "2px solid #000",
            borderRadius: "10px",
            height: "150px",
            width: "200px",
            transition: "all .1s linear"
        }
      });
  const classes = useStyles({ theme });
 
    return (
      <>
        <div id="too" className={classes.box}></div>
      </>
    );
  };
  export default Frame;
  