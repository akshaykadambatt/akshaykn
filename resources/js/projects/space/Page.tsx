import { Skeleton } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
function Page() {
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
    
    return (
        <>
            <h2>Space</h2>
            <Skeleton animation="wave" variant="rectangular" width={210} height={118} />
        </>
    );
}
export default Page;
