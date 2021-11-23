import React, {FunctionComponent, useRef, useState,useEffect } from 'react';
import withStyles, { createUseStyles } from "react-jss";
import { AppProps } from "myModule";
import Hammer from "hammerjs";
type JSSStyles = { [keys: string]: React.CSSProperties | JSSStyles };

interface ComponentProps {
    classes:any,
    color: String | undefined,
    background: String | undefined,
  }
interface MyState {
    height?: Number,
    width?: Number
}
const styles:JSSStyles = {
      one: {
        height: "100%",
        width: "100%"
      }
  };
class Texter extends React.Component<ComponentProps, MyState> {
    constructor(props: ComponentProps | Readonly<ComponentProps>) {
        super(props);
      }
    render() {
      const {classes, children} = this.props
      return(
        <div contentEditable suppressContentEditableWarning={true} style={{color: `${this.props.color}`,background: `${this.props.background}`}} className={classes.one}>
          text
        </div>
        )
    }
  }

  export default withStyles(styles)(Texter);
