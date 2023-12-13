import React, {useState} from 'react';
import UsersItem from "./UsersItem";

const UsersList = ({users,title}) => {

    if(!users.length)
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
            {users.map((user)=>
                <UsersItem key={user.id} user={user}/>
            )}
        </div>
    );
};

export default UsersList;