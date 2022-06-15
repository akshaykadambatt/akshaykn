import React, {FunctionComponent, useRef, useState,useEffect } from 'react';
import { createUseStyles } from "react-jss";
import { AppProps } from "myModule";
import Hammer from "hammerjs";
import { Button, Navlink } from "../../components/Button";
import Frame from "./components/frame";
const Editor:FunctionComponent<AppProps> = ({theme}) => {
  const [countImage, setCountImage] = useState(0) // Name it however you wish
  const [countText, setCountText] = useState(0) // Name it however you wish
  const [countDownload, setCountDownload] = useState(0) // Name it however you wish
  const useStyles = createUseStyles({
        editor: {
          color: "red",
          display: "flex",
          height: "84vh",
          flexWrap: "wrap",
          border: "2px solid #b5b0b0",
          paddingTop: "9vh"
        },
        buttons: {
          display: "flex",
          justifyContent: "space-around",
          backdropFilter: "blur(10px)",
          padding: "10px 10px 20px 10px"
        },
        editorWrap: {
          overflow: "hidden"
        }
      });
  const classes = useStyles({ theme });
    return (
      <>
        <div className={classes.editorWrap}>
          <div className={classes.editor} id="download">
              { [...Array(countImage)].map((_, i) => <Frame type="image" key={i} />) }
              { [...Array(countText)].map((_, i) => <Frame type="text" key={i} />) }
              { [...Array(countDownload)].map((_, i) => <Frame type="downloader" key={i} />) }
          </div>
          <div className={classes.buttons}>
              <div onClick={() => setCountImage(countImage + 1)}>
                <Button text="Add image" />
              </div>
              <div onClick={() => setCountText(countText + 1)}>
                <Button text="Add text" />
              </div>
              <div onClick={() => setCountDownload(countDownload + 1)}>
                <Button text="Download image" />
              </div>
          </div>
        </div>
      </>
    );
  };
  export default Editor;
  