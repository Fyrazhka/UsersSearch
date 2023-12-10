import React from 'react';

const UsersItem = (props) => {
    return (
        <div className="post">
            <div key={props.post.id} className="post__content">
                <strong>{props.post.title}</strong>
                <div>{props.post.body}</div>
            </div>
        </div>
    );
};

export default UsersItem;