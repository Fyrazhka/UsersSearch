import React from 'react';
import {useNavigate} from "react-router-dom";

const UsersItem = (props) => {
    const navigate = useNavigate();

    const handleRedirect = () => {
        navigate('/User');
    };

    return (
            <div className="post" onClick={handleRedirect}>
                <div key={props.post.id} className="post__content">
                    <strong>{props.post.title}</strong>
                    <div>{props.post.body}</div>
                </div>
            </div>
    );
};

export default UsersItem;