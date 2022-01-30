import { Box, Modal, Skeleton, Button } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Navlink } from "../../components/Button";
import {AddItem, Blank} from "./Components";

function Page() {
    const [addItem, setAddItem] = useState<boolean>(false);
    useEffect(()=>{
        let formData = new FormData();
        formData.append('email', 'username');
        axios.post('http://127.0.0.1:8000/api/getSpaceItems', formData)
        .then((response) => {
            console.log(response.data);
        })
        .catch(function (error) {
        if (error.response) {
            console.log(error.response.data);
        }
        });
    },[])
    function handleAddItem() {
        setAddItem(true);
    }
    return (
        <>
            <h2>Space</h2>
            <Skeleton animation="wave" variant="rectangular" width={210} height={118} />
            <Button onClick={handleAddItem}>Open modal</Button>
            <Navlink to="/logout" text="logout" /> 
            <AddItem open={addItem} setOpen={setAddItem} />
        </>
    );
}
export default Page;
