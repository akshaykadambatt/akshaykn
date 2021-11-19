import React, {FunctionComponent, useRef, useState,useEffect } from 'react';
import withStyles, { createUseStyles } from "react-jss";
import nested from 'jss-plugin-nested';
import { AppProps } from "myModule";
import Hammer from "hammerjs";
import ReactDOM from 'react-dom';
type JSSStyles = { [keys: string]: React.CSSProperties | JSSStyles };

interface ComponentProps {
    classes:any,
  }
interface MyState {
    height?: Number,
    width?: Number
}
const styles:JSSStyles = {
    editor: {
        color: "red",
        display: "flex",
        height: "70vh"
      },
      box: {
          border: "2px solid #000",
          borderRadius: "3px",
          height: "150px",
          width: "200px",
          transition: "all 0s linear",
          padding: "5px",
          '& div': {
            background: 'red'
          },
      },
      handle: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
      },
      styleFix: {
        overflowY: "clip"
      },
      handleHeight: {
        background: "#040404",
        width: "70px",
        height: "10px",
        position: "relative",
        top: "-6px",
        borderRadius: "10px",
        cursor: "n-resize"
      },
      handleWidth: {
        background: "#040404",
        width: "10px",
        height: "60px",
        position: "relative",
        left: "-6px",
        borderRadius: "10px",
        cursor: "e-resize"
      },
      one: {
        display: "flex",
        flexWrap: "nowrap"
      }
  };
class Welcome extends React.Component<ComponentProps, MyState> {
    constructor(props: ComponentProps | Readonly<ComponentProps>) {
        super(props);
        this.state = {
          height: 0,
          width: 0
        };
      }
    
    masterRef = React.createRef<HTMLInputElement>();
    heightRef = React.createRef<HTMLInputElement>();
    widthRef = React.createRef<HTMLInputElement>();
    componentDidMount(){
        const stage = this.masterRef.current as HTMLElement;
        const widthstage = this.widthRef.current as HTMLElement;
        const heightstage = this.heightRef.current as HTMLElement;
        const height = stage.offsetHeight;
        this.setState({ height: height });
        const width = stage.offsetWidth;
        this.setState({ width: width }); 
        let mc = new Hammer.Manager(stage);
        let Pan = new Hammer.Pan({});
        mc.add(Pan);
        let lastPosX = 0;
        let lastPosY = 0;
        let isDragging = false;
        mc.on('pan', function(e) {
            if ( ! isDragging ) {
                isDragging = true;
            }
            let posX = e.deltaX + lastPosX;
            let posY = e.deltaY + lastPosY;
            if (e.isFinal) {
                isDragging = false;lastPosX = posX;
                lastPosY = posY;
            }else{
                stage.style.transform = 'translate('+posX+'px,'+posY+'px)';
                widthstage.style.transform = 'translate('+posX+'px,'+posY+'px)';
                heightstage.style.transform = 'translate('+posX+'px,'+posY+'px)';
            }
        });

        let heightmc = new Hammer.Manager(heightstage);
        let heightPan = new Hammer.Pan({});
        heightmc.add(heightPan);
        let heightlastPosX = height;
        let heightlastPosY = height;
        let heightisDragging = false;
        heightmc.on('pan', (e) => {
            e.srcEvent.stopPropagation()
            if ( ! heightisDragging ) {
                heightisDragging = true;
            }
            let posX = e.deltaX + heightlastPosX;
            let posY = e.deltaY + heightlastPosY;
            if (e.isFinal) {
                heightisDragging = false;heightlastPosX = posX;
                heightlastPosY = posY;
                lastPosX = lastPosX;
                lastPosY = lastPosY;
            }
            let el = this.masterRef.current as HTMLElement;
            el.style.height=posY+"px";
            this.setState({ height: posY });
        });

        let widthmc = new Hammer.Manager(widthstage);
        let widthPan = new Hammer.Pan({});
        widthmc.add(widthPan);
        let widthlastPosX = width;
        let widthlastPosY = width;
        let widthisDragging = false;
        widthmc.on('pan', (e) => {
            if ( ! widthisDragging ) {
                widthisDragging = true;
            }
            let posX = e.deltaX + widthlastPosX;
            let posY = e.deltaY + widthlastPosY;
            if (e.isFinal) {
                widthisDragging = false;widthlastPosX = posX;
                widthlastPosY = posY;
            }
            let el = this.masterRef.current as HTMLElement;
            el.style.width=posX+"px";
            this.setState({ width: posX });
        });
    }
    render() {
      const {classes, children} = this.props
      return(
        <div className={classes.one}>
            <div>
                <div contentEditable ref={this.masterRef} className={classes.box}>
                </div>
                <div ref={this.heightRef} style={ { width: `${ this.state.width }px` } } className={classes.handle}><div className={classes.handleHeight}></div></div>
            </div>
            <div ref={this.widthRef} style={ { height: `${ this.state.height }px` } } className={classes.handle + ' ' + classes.styleFix}><div className={classes.handleWidth}></div></div>
        </div>
        )
    }
  }

  export default withStyles(styles)(Welcome);
