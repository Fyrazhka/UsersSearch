import './styles/App.css';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import React, {useEffect, useState} from "react";
import AppRouter from "./component/AppRouter";
import {AuthContext} from "./context";


function App() {
    const [isAuth,setIsAuth]=useState(false)
    const [isLoading,setIsLoading]=useState(true)

    useEffect(() =>{
        if(localStorage.getItem('auth')){
            console.log("YEs")
            setIsAuth(true)
        }
        setIsLoading(false)
    },[])


  return (
      <AuthContext.Provider value={{
          isAuth,
          setIsAuth,
          isLoading
      }}>
          <BrowserRouter>
              <AppRouter/>
          </BrowserRouter>
      </AuthContext.Provider>

  );
}

export default App;
