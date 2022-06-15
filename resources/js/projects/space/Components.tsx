import { Modal, Box, Typography, Button, TextField, Paper } from "@mui/material";
import React from "react";
import ReactCSSTransitionGroup   from 'react-transition-group/TransitionGroup';
export const Blank = ()=>{
    return <></>
}
type Props = {
    setOpen: React.Dispatch<React.SetStateAction<any>>;
    open: boolean;
};
export const AddItem: React.FC<Props> = ({open, setOpen}) => {
    function handleOpen() {
        setOpen(true)
    }
    function handleClose() {
        setOpen(false)
    }
    const modal = {
        display:'flex',
        alignItems:'center',
        justifyContent:'center'
    }
    const modalContent = {
        background: "#fff",
        padding: "16px",
        maxWidth: "360px",
        minWidth: "210px",
        width: "50%",
        borderRadius: "6px",
        boxShadow: "0px 7px 16px 8px #00000026"
    }
    const input = {
        margin: "0 0 15px 0",
        fontWeight: 600
    }
    return(
        <>
            <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            style={modal}>
                <Paper style={modalContent}>
                    <h2 style={{margin:"5px 0 14px 4px"}}>Add an item</h2>
                    <TextField fullWidth style={input} label="Name" />
                    <TextField fullWidth style={input} label="Link" />
                    <Button
                        style={input} variant="outlined"
                    >
                        add entry
                    </Button>
                </Paper>
            </Modal>
        </>
    )
}