import React, {useContext} from 'react';
import MyInput from "../component/UI/input/MyInput";
import MyButton from "../component/UI/button/MyButton";
import {AuthContext} from "../context";
import Navbar from "../component/UI/navbar/Navbar";


const Login = () => {

    const{isAuth,setIsAuth}=useContext(AuthContext)
    const login=event=>{
        event.preventDefault();
        setIsAuth(true);
        localStorage.setItem('auth','true')
    }
    return (
            <div>
                <Navbar/>
                <h1 style={{display:"flex", justifyContent:"center"}}>Страница авторизации</h1>
                <form className="login" onSubmit={login}>
                    <label>Логин</label>
                    <MyInput type="text" placeholder="Логин"></MyInput>
                    <label>Пароль</label>
                    <MyInput type="password" placeholder="Пароль"></MyInput>
                    <MyButton>Войти</MyButton>
                </form>
            </div>
    );
};

export default Login;