import React, {useState} from 'react';
import UsersItem from "./UsersItem";

const UsersList = ({posts,title}) => {

    if(!posts.length)
    {
        return (<h1 style={{ textAlign: 'center' }}>
            Пользователи не найдены!
        </h1>)
    }
    return (

        <div>
            <h1 style={{ textAlign: 'center' }}>
                {title}
            </h1>
            {posts.map((post)=>
                <UsersItem key={post.id} post={post}/>
            )}
        </div>
    );
};

export default UsersList;