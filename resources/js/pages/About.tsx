import React, {FunctionComponent} from 'react';
import { AppProps } from "myModule";
const About:FunctionComponent<AppProps> = ({theme}) => {
    const h: React.CSSProperties = {
      height: "50vh"
    };
    return (
      <>
        <>About</>
        <div style={h} className="container reveal">
          one
        </div>
        <div style={h} className="container reveal">
          two
        </div>
        <div style={h} className="container reveal">
          three
        </div>
        <div style={h} className="container reveal">
          four
        </div>
        <div style={h} className="container reveal">
          five
        </div>
      </>
    );
  };
  export default About;
  