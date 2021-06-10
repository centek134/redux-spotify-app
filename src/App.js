import './App.css';
import React, { useEffect } from 'react';
import Login from './containers/Login';
import { getToken } from './spotify';
//import {loginUrl} from './spotify';

function App() {
  
  useEffect(() => {
    const token = getToken();
    console.log("mój token = " + token);
    setTimeout(()=> console.log(token), 1000)
  },[]);

  return (
    <div className="App">
      <Login></Login>
    </div>
  );
}




export default App;
