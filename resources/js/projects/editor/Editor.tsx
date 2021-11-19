import React, {FunctionComponent, useRef, useState,useEffect } from 'react';
import { createUseStyles } from "react-jss";
import { AppProps } from "myModule";
import Hammer from "hammerjs";
import Welcome from "./components/frame";
const Editor:FunctionComponent<AppProps> = ({theme}) => {
  const [count, setCount] = useState(0) // Name it however you wish
  const useStyles = createUseStyles({
        editor: {
          color: "red",
          display: "flex",
          height: "70vh"
        }
      });
  const classes = useStyles({ theme });
    return (
      <>
      Spacer
        <>Editor</>
        <div className={classes.editor}>
            Editable
            { [...Array(count)].map((_, i) => <Welcome key={i} />) }
        </div>
        <div>
            Elements
            <button onClick={() => setCount(count + 1)}>Click me</button>
    

        </div>
      </>
    );
  };
  export default Editor;
  