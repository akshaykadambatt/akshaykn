import React, {FunctionComponent, useRef, useState,useEffect, RefObject } from 'react';
import withStyles, { createUseStyles } from "react-jss";
import nested from 'jss-plugin-nested';
import { AppProps } from "myModule";
import Hammer from "hammerjs";
import ReactDOM from 'react-dom';
import Dropper from "./dropper";
import Texter from "./texter";
import Control from "./control";
import Slider from '@mui/material/Slider';
import { VscArrowRight, VscActivateBreakpoints, VscTrash, VscDebugStepBack, VscMove, VscTextSize } from "react-icons/vsc";
import { BiImage, BiFontColor, BiMinusFront, BiBold } from "react-icons/bi";
import { RiDownloadLine } from "react-icons/ri";
import html2canvas from 'html2canvas';
type JSSStyles = { [keys: string]: React.CSSProperties | JSSStyles };

interface ComponentProps {
    classes: any,
    type: string
  }
interface MyState {
    height?: Number,
    width?: Number,
    x?: number,
    y?: number,
    showComponent?: boolean,
    boldText?: boolean,
    fontSizeSlider?: boolean,
    fontSize?: String,
    controlToDropper?: boolean,
    textColor?: String | undefined,
    textBackColor?: String | undefined
}
const styles:JSSStyles = {
      box: {
          border: "2px solid rgb(122 122 122 / 10%)",
          borderRadius: "5px",
          height: "162px",
          width: "200px",
          backdropFilter: "blur(10px)",
          '&:hover': {
            backgroundColor: 'rgb(122 122 122 / 10%)'
          },
      },
      handle: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        opacity: '0',
        transition: "opacity 0.1s",
        "&:hover $handleHeight": {
          transform: "scale(1.1)",
          width: "74px"
        },
        "&:hover $handleWidth": {
          transform: "scale(1.1)",
          height: "64px"
        }
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
        transition: "all 0.2s",
        cursor: "n-resize"
      },
      handleWidth: {
        background: "#040404",
        width: "10px",
        height: "60px",
        position: "relative",
        transition: "all 0.2s",
        left: "-6px",
        borderRadius: "10px",
        cursor: "e-resize"
      },
      one: {
        display: "flex",
        flexWrap: "nowrap",
        height: "10px",
        width: "10px",
        '&:hover $handle': {
          opacity: '1'
        },
        '&:hover $box': {
          border: "2px solid rgb(122 122 122 / 100%)",
        },
        '&:hover $controls': {
          opacity: "1",
        },
        '&:hover $controlsRight': {
          right: "-55px",
        },
        '&:hover $controlsBottom': {
          bottom: "-48px",
        }
      },
      controls: {
        position: "absolute",
        opacity: "0",
        transition: "opacity 0.2s, bottom 0.2s, right 0.2s",
        display: "flex"
      },
      controlsRight: {
        bottom: "0px",
        right: "-45px",
        width: "50px",
        height: "100%",
        flexDirection: "column",
        justifyContent: "flex-end",
      },
      controlsBottom: {
        justifyContent: "right",
        width: "100%",
        bottom: "-35px",
        height: "41px",
      },
      icons: {
        display: "flex",
        justifyContent: "center",
        padding: "10px",
        background: "#ff000026",
        borderRadius: "5px",
        transition: "all 0.2s",
        margin: "2px 6px",
        cursor: "pointer",
        "&:hover": {
          background: "#ff000045",
          transform: "scale(1.05)"
        },
        "&:active": {
          background: "#ff000061",
          transform: "scale(0.95)"
        }
      },
      hidden: {
        opacity: 0,
        zIndex: -10
      },
      iconsUndo: {
        animation: "disappear 2.5s none 0.1s 1 normal",
        height: "40px",
        opacity: 0,
        position: "absolute",
        left: "10px",
        bottom: "10px",
        width: "90px",
        fontSize: "13px",
        zIndex: -10
      },
      slider: {
        position: "absolute",
        transition: "all 0.3s ease 0s",
        height: "100px",
        width: "200px",
        background: "rgb(246, 246, 246)",
        padding: "10px",
        borderRadius: "10px",
        boxShadow: "rgb(145 145 145 / 21%) 0px 0px 0px 1px, rgb(173 163 163 / 13%) -1px 5px 14px 0px",
      },
      noEvents: {
        pointerEvents: "none"
      },
      events: {
        pointerEvents: "all"
      },
      colorInput: {
        opacity: "0",
        width: "0",
        height: "0",
        padding: "0"
      },
      downloader: {
        backdropFilter: 'none',
        minHeight: "262px",
        minWidth: "250px",
        height: "100%",
        width: "100%",
      }
  };
  function hasParentWithMatchingSelector (target:Node, selector:string) {
    const allSubMenus : NodeListOf<Element> = document.querySelectorAll(selector) 
    let myArray = Array.from(allSubMenus)
    return [...myArray].some(el =>
      el !== target && el.contains(target)
    )
  }
class Frame extends React.Component<ComponentProps, MyState> {
    constructor(props: ComponentProps | Readonly<ComponentProps>) {
        super(props);
        this.state = {
          height: 0,
          width: 0,
          x: 0,
          y: 0,
          showComponent: true,
          fontSizeSlider: false,
          fontSize: "18px",
          boldText: false,
          controlToDropper: false,
          textColor: 'red',
          textBackColor: 'transparent'
        };
      }
    
    masterRef = React.createRef<HTMLInputElement>();
    heightRef = React.createRef<HTMLInputElement>();
    widthRef = React.createRef<HTMLInputElement>();
    downloaderRef = React.createRef<HTMLInputElement>();
    sliderRef = React.createRef<HTMLInputElement>();
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
        const XY = (x:number,y:number) => {
          this.setState({ x: x });
          this.setState({ y: y });
        }
        mc.on('pan', function(e) {
          // return false
          if(e.target.classList.contains('disableHammer')) return false
          if(hasParentWithMatchingSelector(e.target, '.disableHammer')) return false
          if(!Boolean(Number(localStorage.getItem('control')))) return false
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
              XY(posX,posY);
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
    
    toggleShowComponentState = () => {
      this.setState({ showComponent: this.state.showComponent? false : true });
    }
    toggleTextBoldState = () => {
      this.setState({ boldText: this.state.boldText? false : true });
    }
    handleFontSizeState = (event:React.MouseEvent<HTMLElement>) => {
      this.setState({ fontSizeSlider: this.state.fontSizeSlider? false : true });
    }
    handleFontSizeChange = (event:MouseEvent ) => {
      this.setState({ fontSize: (event.target as any).value+"px" });
    }
    toggleControlToDropper = () => {
      this.setState({ controlToDropper: this.state.controlToDropper? false : true });
      localStorage.setItem('control', (this.state.controlToDropper? '1':'0'));
    }
    handleFontColorChange = (event:React.FormEvent<HTMLInputElement>) => {
      this.setState({ textColor: event.currentTarget.value });
    }
    handleBackgroundColorChange = (event:React.FormEvent<HTMLInputElement>) => {
      this.setState({ textBackColor: event.currentTarget.value });
    }
    handleDownload = () => {
      let downloader = this.downloaderRef.current as HTMLElement;
      if(downloader){    
        // setTimeout(() => {
          html2canvas(document.getElementById('download') as HTMLElement,{
            useCORS: true,
            scale: 2,
            x: downloader.getBoundingClientRect().x,
            y: downloader.getBoundingClientRect().top,
            height: downloader.getBoundingClientRect().height,
            width: downloader.getBoundingClientRect().width,
          }).then(function(canvas) {
            document.body.appendChild(canvas);
            var myImage = canvas.toDataURL("image/png");
            var link = document.createElement("a");
            document.body.appendChild(link);
            link.setAttribute("href", myImage);
            link.setAttribute("download", 'yoo.png');
            link.click();
            canvas.remove();
          });
        // }, 1000);
      }
    }
    render(): JSX.Element {
      const {classes, children} = this.props;
      return(
        <>
        <div className={classes.one + ' ' + ((this.state.showComponent)? null:classes.hidden)}>
            <div>
                <div ref={this.masterRef} className={classes.box + ' ' + (this.props.type == "downloader" && classes.downloader)}>
                {this.props.type == "text" &&
                <Texter color={this.state.textColor} size={this.state.fontSize} bold={this.state.boldText} background={this.state.textBackColor} />
                }
                {this.props.type == "downloader" &&
                <div ref={ this.downloaderRef } className={classes.downloader}></div>
                }
                {this.props.type == "image" &&
                  <Dropper control={this.state.controlToDropper} />
                }
                <div className={classes.controls+' '+classes.controlsRight}>
                  {this.props.type == "text" &&
                    <>
                      {/* <div className={classes.icons}><VscActivateBreakpoints /></div> Color Picker */}
                      <Control ev={this.toggleTextBoldState}><BiBold /></Control>{/* Bold */}
                      <Control ev={this.handleFontSizeState}><VscTextSize /></Control>{/* Bold */}
                      <label className={classes.icons}><BiFontColor /><input onChange={this.handleFontColorChange} type="color" className={classes.colorInput}></input></label> {/* Background */}
                      <label className={classes.icons}><BiImage /><input onChange={this.handleBackgroundColorChange} type="color" className={classes.colorInput}></input></label> 
                    </>
                  }
                  {this.props.type == "downloader" &&
                    <>
                      <div className={classes.icons} onClick={this.handleDownload}><RiDownloadLine /></div> {/* Color Picker */}
                    </>
                  }
                  <div className={classes.icons}><BiMinusFront /></div> {/* Bring to front */}
                </div>
                <div className={classes.controls+' '+classes.controlsBottom}>
                  {this.props.type == "image" &&
                    <>
                    <Control ev={this.toggleControlToDropper}><VscMove /></Control>
                    {/* <input className={classes.sliderBottom + " disableHammer"} type="range" min="1" max="100" defaultValue="50"></input> */}
                    </>
                  }
                  {/* Slider */}
                  <Control ev={this.toggleShowComponentState}><VscTrash /></Control>{/* Delete */}
                </div>  
                </div>
                <div ref={this.heightRef} style={ { width: `${ this.state.width }px` } } className={classes.handle + ' controls'}><div className={classes.handleHeight}></div></div>
            </div>
            <div ref={this.widthRef} style={ { height: `${ this.state.height }px` } } className={classes.handle + ' ' + classes.styleFix + ' controls'}><div className={classes.handleWidth}></div></div>
        </div>
        { this.state.showComponent ? null : 
          <div className={classes.iconsUndo}>
            {/* Somehow derive values like {50% 50%} from an input 
            method for adding to background-position style */}
            <Control ev={this.toggleShowComponentState}><VscDebugStepBack /> Undo</Control>{/* Delete */}
          </div> 
        }
        {this.state.fontSizeSlider? <div ref={this.widthRef} style={{top: `${this.state.y as number+110}px`,left: `${this.state.x as number+220}px`}} className={classes.slider}><Slider onChange={(e:Event)=>{this.handleFontSizeChange(e as MouseEvent );}} /></div>:null}
        </>
      )
  }
}

  export default withStyles(styles)(Frame);
