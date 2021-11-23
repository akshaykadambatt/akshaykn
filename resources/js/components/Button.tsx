import { NavLink } from "react-router-dom";
import React, {FunctionComponent} from 'react';
import { VscArrowRight } from "react-icons/vsc";
interface Props {
    text:string,
    to:string
}
interface bProps {
  text:string
}
export function Button(props:bProps) {
  return (
      <div className="button reveal">{props.text}<VscArrowRight className="icon" /></div>
  );
}
export function Navlink(props:Props) {
  return (
    <>
      <NavLink to={props.to}
      className={({ isActive }) => "button reveal" + (isActive ? " activated" : "")}
      >
        {props.text}
        <VscArrowRight className="icon" />
      </NavLink>
    </>
  );
}
