import React, {FunctionComponent, useRef, useState,useEffect } from 'react';
import withStyles, { createUseStyles } from "react-jss";
import { AppProps } from "myModule";
import Hammer from "hammerjs";
import { RiDragDropFill } from "react-icons/ri";
import ReactDOM from 'react-dom';
type JSSStyles = { [keys: string]: React.CSSProperties | JSSStyles };

interface ComponentProps {
    classes:any,
    control: any
  }
interface MyState {
  edit: Boolean,
  dropped: Boolean
}
const styles:JSSStyles = {
      one: {
        height: "100%",
        width: "100%",
        transition: "all 0.2s"
      },
      two: {
        height: "100%",
        width: "100%",
        transition: "all 0.2s",
        backgroundSize: "cover",
        borderRadius: "5px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        overflow: "hidden",
        "&:hover $pin": {
          boxShadow: "0 0 0 10px rgb(0 0 0 / 10%)"
        }
      },
      pin: {
        height:"30px",
        width:"30px",
        background: "#ff2424",
        // border: "3px solid #fffc",
        borderRadius: "20px",
        transition: "all 0.3s"
      },
      pinActive: {
        boxShadow: "0 0 0 4px rgb(0 0 0 / 40%), 0 0 0 14px rgb(0 0 0 / 40%) !important"
      },
      noEvents: {
        pointerEvents: "none"
      },
      dropIcon: {
        height: "14%",
        width: "20%",
        opacity: "77%"
      }
  };
class Dropper extends React.Component<ComponentProps, MyState> {
    constructor(props: ComponentProps | Readonly<ComponentProps>) {
        super(props);
        this.state = {
          edit: false,
          dropped: false,
        };
      }
    masterRef = React.createRef<HTMLDivElement>();
    imageRef = React.createRef<HTMLDivElement>();
    pinRef = React.createRef<HTMLDivElement>();
    dropEffect(e:React.DragEvent<HTMLDivElement>): void {
      e.preventDefault();
      (this.imageRef.current as HTMLElement).style.boxShadow = "rgb(0 0 0 / 22%) 0px 0px 32px 0px";
    }
    dropLeaveEffect(e:React.DragEvent<HTMLDivElement>): void {
      e.preventDefault();
      this.dle();
    }
    dle(){
      (this.imageRef.current as HTMLElement).style.boxShadow = "rgb(0 0 0 / 13%) 0px 0px 0px 0px";
    }
    drop(e:React.DragEvent<HTMLDivElement>): void {
      e.preventDefault();
      let fileList = e.dataTransfer.files;
      this.readImage(fileList[0], this.imageRef.current as HTMLElement);
      this.dle();
    }
    readImage = (file: File, ref: HTMLElement) => {
        const reader = new FileReader();
        reader.onload = function(e: any) {
          console.log(e.target.result);
          let uploaded_image = e.currentTarget.result;
          ref.style.backgroundImage = `url(${uploaded_image})`;
        };
        this.setState({ dropped: true });
        reader.readAsDataURL(file);
    }
    componentDidUpdate(prevProps: ComponentProps, prevState: MyState): void {
      if(prevProps.control==true){}
        const stage = this.imageRef.current as HTMLElement;
        const pin = this.pinRef.current as HTMLElement;
        const {classes, children} = this.props
        let mc = new Hammer.Manager(stage);
        let Pan = new Hammer.Pan({});
        mc.add(Pan);
        let lastPosX = 0;
        let lastPosY = 0;
        let isDragging = false;
        mc.on('pan', function(e) {
          if(stage && pin){
            if((e.deltaX < 100) && (e.deltaX > -100) && (e.deltaY < 100) && (e.deltaY > -100)){
              stage.style.backgroundPosition = `${-1*e.deltaX}% ${-1*e.deltaY}%`;
            }
            pin.style.transform = `translate(${e.deltaX}px, ${e.deltaY}px)`;
            pin.classList.add(classes.pinActive);
            if (e.isFinal) {
              pin.style.transform = `translate(0, 0)`;
              pin.classList.remove(classes.pinActive);
            }
          }
          return false
        });
    }
    render() {
      const {classes, children} = this.props
      return(
        <div ref={this.masterRef} 
        onDragOver={(e) => this.dropEffect(e)} 
        onDragLeave={(e) => this.dropLeaveEffect(e)}
        onDrop={(e) => this.drop(e)}
        className={classes.one}>
          <div ref={this.imageRef} className={classes.two+' '+(this.props.control? null:classes.noEvents)}>
            {this.state.dropped? null:<RiDragDropFill className={classes.dropIcon} />}
            {this.props.control? <div ref={this.pinRef} className={classes.pin}></div>:null}
          </div>
        </div>
        )
    }
  }

  export default withStyles(styles)(Dropper);
