import { NavLink } from "react-router-dom";
import "../style.css";
import * as React from 'react';
import { createUseStyles } from "react-jss";
import { useEffect, useState, FunctionComponent } from "react";
import { RiReactjsFill } from "react-icons/ri";
import { FaLaravel, FaWordpressSimple, FaPhp } from "react-icons/fa";
import { IoLogoJavascript, IoLogoElectron, IoLogoPython, IoLogoFirebase } from "react-icons/io5";
import { GrMysql, GrHeroku } from "react-icons/gr";
import { AiOutlineHtml5 } from "react-icons/ai";
import { VscGithubAlt } from "react-icons/vsc";
import { SiWebpack, SiLinux } from "react-icons/si";
type AppProps = {
};
const SkillBlock:FunctionComponent<AppProps> = () => {

  const useStyles = createUseStyles({
    
  });
  const classes = useStyles();
  return (
    <div className={`bubbles`}>
      <div className="circle-wrapper"><div className={`reveal circle center`}>Things I do</div></div>
      <div className="circle-wrapper"><div className={`reveal circle`} data-delay={13} ><FaLaravel /></div></div>
      <div className="circle-wrapper"><div className={`reveal circle`} data-delay={15} ><IoLogoJavascript /></div></div>
      <div className="circle-wrapper"><div className={`reveal circle`} data-delay={17} ><RiReactjsFill /></div></div>
      <div className="circle-wrapper"><div className={`reveal circle`} data-delay={18} ><FaWordpressSimple /></div></div>
      <div className="circle-wrapper"><div className={`reveal circle`} data-delay={110} ><FaPhp /></div></div>
      <div className="circle-wrapper"><div className={`reveal circle`} data-delay={112} ><GrMysql /></div></div>
      <div className="circle-wrapper"><div className={`reveal circle`} data-delay={113} ><AiOutlineHtml5 /></div></div>
      <div className="circle-wrapper"><div className={`reveal circle`} data-delay={116} ><VscGithubAlt /></div></div>
      <div className="circle-wrapper"><div className={`reveal circle`} data-delay={114} ><IoLogoElectron /></div></div>
      <div className="circle-wrapper"><div className={`reveal circle`} data-delay={16} ><IoLogoPython /></div></div>
      <div className="circle-wrapper"><div className={`reveal circle`} data-delay={13} ><IoLogoFirebase /></div></div>
      <div className="circle-wrapper"><div className={`reveal circle`} data-delay={17} ><GrHeroku /></div></div>
      <div className="circle-wrapper"><div className={`reveal circle`} data-delay={19} ><SiWebpack /></div></div>
      <div className="circle-wrapper"><div className={`reveal circle`} data-delay={11} ><SiLinux /></div></div>
    </div>
  );
};
export default SkillBlock;
