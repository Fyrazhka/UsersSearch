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
                <div className="login">
                    <h1 style={{display:"flex", justifyContent:"center"}}>Страница авторизации</h1>
                    <form className="login__form" onSubmit={login}>
                        <div>
                            <label>Логин</label>
                            <MyInput type="text" placeholder="Логин"></MyInput>
                        </div>
                        <div>
                            <label>Пароль</label>
                            <MyInput type="password" placeholder="Пароль"></MyInput>
                        </div>


                        <MyButton>Войти</MyButton>
                    </form>
                </div>
            </div>
    );
};

export default Login;