import React, { Dispatch, Ref, RefObject, useEffect, useRef, useState } from "react";
import { TextField } from "@mui/material";
import { createUseStyles } from "react-jss";
import { VscArrowRight } from "react-icons/vsc";
import { FiUserPlus, FiChevronRight, FiLogIn } from "react-icons/fi";
import { Button } from "../../components/Button";
import axios from "axios";
type Props = {
    setToken: React.Dispatch<React.SetStateAction<any>>;
};
const Space: React.FC<Props> = ( { setToken } ) => {
    const useStyles = createUseStyles({
        form: {
          display: "block",
        //   width: "320px",
          overflow: "hidden",
          width: "400px"
        },
        formWrap: {
          padding: "9vh 70px 3vh 40px",
          display: "flex",
            justifyContent: "center"
        },
        textInput: {
            width: "94%",
            fontSize: "20px",
            fontFamily: "inherit",
            fontWeight: "300",
            padding: "13px",
            margin: "10px",
            border: "2px solid transparent",
            borderRadius: "10px",
            transition: "all .1s",
            background: "var(--background-color)",
            boxShadow: "rgb(0 0 0 / 10%) 3px 3px 4px 2px, rgb(255 255 255 / 91%) -3px -3px 4px 2px, inset rgb(255 255 255 / 83%) 0 0 0 0, inset rgb(241 237 237 / 91%) 0 0 0 0",
            "&:focus": {
                outlineWidth: "0px",
                boxShadow: "rgb(0 0 0 / 10%) 0 0 0 0, rgb(255 255 255 / 91%) 0 0 0 0, inset rgb(255 255 255 / 83%) -3px -3px 4px 2px, inset rgb(217 217 217 / 46%) 3px 4px 4px 2px",
            }
        },
        next: {
            background: "var(--background-color)",
            fontSize: "20px",
            borderRadius: "10px",
            transition: "boxShadow .1s, transform .3s",
            margin: "10px",
            padding: "13px",
            boxShadow: "rgb(0 0 0 / 10%) 3px 3px 4px 2px, rgb(255 255 255 / 91%) -3px -3px 4px 2px, inset rgb(255 255 255 / 83%) 0 0 0 0, inset rgb(241 237 237 / 91%) 0 0 0 0",
            "&:hover": {
                boxShadow: "rgb(0 0 0 / 10%) 0 0 0 0, rgb(255 255 255 / 91%) 0 0 0 0, inset rgb(255 255 255 / 83%) -3px -3px 4px 2px, inset rgb(217 217 217 / 46%) 3px 4px 4px 2px",
            },
            "&:focus": {
                outlineWidth: "0px",
                boxShadow: "rgb(0 0 0 / 10%) 0 0 0 0, rgb(255 255 255 / 91%) 0 0 0 0, inset rgb(255 255 255 / 83%) -3px -3px 4px 2px, inset rgb(217 217 217 / 46%) 3px 4px 4px 2px",
            }
        },
        hovered: {
            boxShadow: "rgb(0 0 0 / 10%) 0 0 0 0, rgb(255 255 255 / 91%) 0 0 0 0, inset rgb(255 255 255 / 83%) -3px -3px 4px 2px, inset rgb(217 217 217 / 46%) 3px 4px 4px 2px",
        },
        dropIcon: {
            display: "inline",
            stroke: "#000000ed",
            strokeWidth: "1px"
          },
        head: {
          margin: "10px"
        },
        dFlex: {
            display: "flex"
        },
        action: {
            fontFamily: "inherit",
            fontSize: "18px",
        },
        login: {
            transform: "translateX(65px)"
        },
        register: {
            transform: "translateX(-65px)"
        },
        opacityZero: {
            opacity: 0
        },
        error: {
            color: "red",
            border: "2px solid #ff000042",
            "::placeholder": {
                color: "red"
            }
        }
      });
    const classes = useStyles({  });
    const button = useRef<HTMLButtonElement>(null);
    const nameInput = useRef<HTMLInputElement>(null);
    const usernameInput = useRef<HTMLInputElement>(null);
    const passwordInput = useRef<HTMLInputElement>(null);
    const confirmPasswordInput = useRef<HTMLInputElement>(null);
    const heading = useRef<HTMLDivElement>(null);
    const [action, setAction] = useState('login');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [name, setName] = useState('');
    function handleChange(event: React.ChangeEvent<HTMLInputElement>){
        event.currentTarget.classList.remove(classes.error)
        if(event.currentTarget.name == 'username'){
            setUsername(event.currentTarget.value);
        }else if(event.currentTarget.name == 'password'){
            setPassword(event.currentTarget.value);
        }else if(event.currentTarget.name == 'name'){
            setName(event.currentTarget.value);
        }else if(event.currentTarget.name == 'confirm_password'){
            setConfirmPassword(event.currentTarget.value);
        }
    }
    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        button.current!.classList.add(classes.hovered);
        setTimeout(() => { button.current!.classList.remove(classes.hovered); }, 100);
        let formData = new FormData();
        formData.append('email', username);
        formData.append('password', password);
        if(action=='login'){
            axios.post('http://127.0.0.1:8000/api/login', formData)
            .then((response) => {
                console.log(response.data.data.token);
                setToken(response.data.data.token);
                sessionStorage.setItem('token', response.data.data.token)
            })
            .catch(function (error) {
              if (error.response) {
                console.log(error.response.data);
                for (const property in error.response.data.data) {
                    addErrorClass(usernameInput);
                    addErrorClass(passwordInput);
                }
              }
            });
        }else if(action == 'register'){
            formData.append('name', name);
            formData.append('password', password);
            formData.append('confirm_password', confirmPassword);
            axios.post('http://127.0.0.1:8000/api/register', formData)
            .then((response) => {
                console.log(response.data);
                button.current!.click();
            })
            .catch(function (error) {
              if (error.response) {
                console.log(error.response.data);
                for (const property in error.response.data.data) {
                    usernameInput.current!.focus();
                    console.log(`${property}: ${error.response.data.data[property]}`);
                    if(property=='name'){
                        addErrorClass(nameInput);
                    }
                    if(property=='email'){
                        addErrorClass(usernameInput);
                    }
                    if(property=='password'){
                        addErrorClass(passwordInput);
                    }
                    if(property=='confirm_password'){
                        addErrorClass(confirmPasswordInput);
                    }
                }
              }
            });
        }
    }
    function addErrorClass(ref:RefObject<HTMLInputElement>) {
        ref.current!.classList.add(classes.error);
        usernameInput.current!.focus();
    }
    function removeErrorClass() {
        if(usernameInput.current){
            usernameInput.current!.classList.remove(classes.error);
        }
        if(passwordInput.current){
            passwordInput.current!.classList.remove(classes.error);
        }
        if(nameInput.current){
            nameInput.current!.classList.remove(classes.error);
        }
        if(confirmPasswordInput.current){
            confirmPasswordInput.current!.classList.remove(classes.error);
        }
    }
    function handleRegister(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
        if(action=='register') return;
        e.preventDefault();
        removeErrorClass();
        // usernameInput.current!.focus();
        setAction('register');
    }
    function handleLogin(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
        if(action=='login') return;
        e.preventDefault();
        removeErrorClass();
        // usernameInput.current!.focus();
        setAction('login');
    }
    useEffect(()=>{
        console.log(action, heading.current);
        var arrive = [
            { transform: 'translatex(-15px)', opacity: "0", offset: 0 },
            { transform: 'translatex(0px)', opacity: "1", offset: 1 },
          ];
          heading.current!.animate(arrive, {
            duration: 100
          });
          setTimeout(() => {
              heading.current!.classList.remove(classes.opacityZero)
          }, 100);
    }, [action])
    return(
        <div>
            <form onSubmit={(event) => handleSubmit(event)} className={classes.formWrap}>
                <div className={classes.form}>
                    <h2 className={classes.head+' '+classes.opacityZero} ref={heading}>
                        {action=='login'? <>Login</>:action=='register'? <>Register</>:null}
                    </h2>
                    <input autoComplete="off" placeholder="username" className={classes.textInput} type="text" name="username" onChange={(event)=>handleChange(event)} ref={usernameInput}/>
                    {action=='register'? <input autoComplete="off" placeholder="name" className={classes.textInput} type="text" name="name" onChange={(event)=>handleChange(event)}  ref={nameInput}/>:null}
                    <input autoComplete="off" placeholder="password" className={classes.textInput} type="password" name="password" onChange={(event)=>handleChange(event)}  ref={passwordInput}/>
                    {action=='register'? <input autoComplete="off" placeholder="confirm password" className={classes.textInput} type="password" name="confirm_password" onChange={(event)=>handleChange(event)}  ref={confirmPasswordInput}/>:null}
                    <div className={classes.dFlex}>
                        <button type={action=='login'? "submit": undefined} className={classes.next+' '+(action=='register'? classes.login:null)} ref={button} onClick={(event)=>handleLogin(event)}>
                            {action=='login'? <FiChevronRight className={classes.dropIcon} />:null}
                            {action=='register'? <FiLogIn className={classes.dropIcon} />:null}
                        </button>
                        <button type={action=='register'? "submit": undefined} className={classes.next+' '+classes.action+' '+(action=='register'? classes.register:null)} onClick={(event)=>handleRegister(event)}>
                            {action=='register'? <FiChevronRight className={classes.dropIcon} />:null}
                            {action=='login'? <FiUserPlus className={classes.dropIcon}/>:null} 
                        </button>
                    </div>
                    
                </div>
            </form>
            
        </div>
    )
}
export default Space;