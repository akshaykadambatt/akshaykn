import { NavLink } from "react-router-dom";
import React, {FunctionComponent} from 'react';
import { VscArrowRight } from "react-icons/vsc";
interface Props {
    text:string,
    to:string
}
export function Button(props:Props) {
  return (
    <>
      <button className="button reveal">{props.text}</button>
    </>
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
