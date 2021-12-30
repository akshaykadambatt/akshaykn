import axios from 'axios';
import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Page from './Page';
import Space from './Space';

function App() {
  const [token, setToken] = useState<string | null>(null);
  if(!token && !sessionStorage.getItem('token')){
    return <Space setToken={setToken} />
  }else if(sessionStorage.getItem('token') && !token){
    setToken(sessionStorage.getItem('token'))
  }
  axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return (
    <div className="wrapper">
      <Page />
      {token}
    </div>
  );
}

export default App;