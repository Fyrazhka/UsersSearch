import React, {useContext, useState} from 'react';
import UserFilter from "../../UserFilter";
import MyButton from "../button/MyButton";
import {useNavigate} from "react-router-dom";
import {AuthContext} from "../../../context";


const Navbar = ({filter=null,setFilter=null}) => {
    const navigate = useNavigate();
    const{isAuth,setIsAuth}=useContext(AuthContext)
    const handleRedirect = () => {
        if(localStorage.getItem('auth'))
            localStorage.removeItem('auth');
        setIsAuth(false);
        navigate('/Login');
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
                    ? <div  className="header__login" onClick={handleRedirect}>
                        <MyButton children="Выход" />
                       </div>
                    :<div  className="header__login" onClick={handleRedirect}>
                        <MyButton children="Вход" />
                     </div>
            }

        </div>
    );
};

export default Navbar;