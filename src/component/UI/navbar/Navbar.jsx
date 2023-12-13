import React, {useContext, useState} from 'react';
import UserFilter from "../../UserFilter";
import MyButton from "../button/MyButton";
import {useNavigate} from "react-router-dom";
import {AuthContext} from "../../../context";


const Navbar = ({filter=null,setFilter=null}) => {
    const navigate = useNavigate();
    const{isAuth,setIsAuth}=useContext(AuthContext)
    const handleRedirectLogin = () => {
        if(localStorage.getItem('auth'))
            localStorage.removeItem('auth');
        setIsAuth(false);
        navigate('/Login');
    };
    const handleRedirectUsers = () => {
        navigate('/allUsers');
    };

    return (
        <div className="header">
            {filter!==null
                ?<UserFilter
                    filter={filter}
                    setFilter={setFilter}
                />
                :null
            }
            {localStorage.getItem('auth')
                    ? <div  className="header__login" >
                        <MyButton style={{borderRadius:0, width:100}} children="Пользователи" onClick={handleRedirectUsers}/>
                        <MyButton children="Выход" onClick={handleRedirectLogin}/>
                       </div>
                    :<div  className="header__login" >
                        <MyButton style={{borderRadius:0, width:100}} children="Пользователи" onClick={handleRedirectUsers}/>
                        <MyButton children="Вход" onClick={handleRedirectLogin}/>
                     </div>
            }

        </div>
    );
};

export default Navbar;