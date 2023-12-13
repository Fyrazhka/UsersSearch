import React from 'react';
import {useNavigate} from "react-router-dom";

const UsersItem = (props) => {
    const navigate = useNavigate();

    const handleRedirect = () => {
        navigate('/User');
    };

    return (
            <div className="users" onClick={handleRedirect}>
                <div key={props.user.id} className="users__content">
                    <strong>{props.user.title}</strong>
                    <div>{props.user.body}</div>
                </div>
            </div>
    );
};

export default UsersItem;