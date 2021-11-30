import React, {FunctionComponent} from 'react';
import { Button, Navlink } from "../components/Button";
import { AppProps } from "myModule";
const Works:FunctionComponent<AppProps> = ({theme}) => {
    const h: React.CSSProperties = {
        height: "10vh"
      };
    return (
      <>
<div style={h} className="container reveal">
          one
        </div>
        <>Works</>
        <Navlink to="./projects/editor" text="Editor project" />
        <Navlink to="./projects/react-table" text="react-table" />
      </>
    );
  };
  export default Works;
  