import React, {FunctionComponent, useRef, useState,useEffect } from 'react';
import withStyles, { createUseStyles } from "react-jss";
import { AppProps } from "myModule";
import Hammer from "hammerjs";
type JSSStyles = { [keys: string]: React.CSSProperties | JSSStyles };

interface ComponentProps {
    classes:any,
    ev: any
  }
interface MyState {
    height?: Number,
    width?: Number
}
const styles:JSSStyles = {
    icons: {
      display: "flex",
      justifyContent: "space-between",
      padding: "10px",
      background: "#ff000026",
      borderRadius: "5px",
      transition: "all 0.2s",
      margin: "2px 6px",
      cursor: "pointer",
      alignItems: "center",
      "&:hover": {
        background: "#ff000045",
        transform: "scale(1.05)"
      },
      "&:active": {
        background: "#ff000061",
        transform: "scale(0.95)"
      }
    },
  };
class Control extends React.Component<ComponentProps, MyState> {
    constructor(props: ComponentProps | Readonly<ComponentProps>) {
        super(props);
      }
    render() {
      const {classes, children} = this.props
      return(
           <div className={classes.icons} onClick={this.props.ev}>{this.props.children}</div>
        )
    }
  }

  export default withStyles(styles)(Control);
