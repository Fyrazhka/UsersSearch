import React, {useEffect, useState} from 'react';
import Navbar from "../component/UI/navbar/Navbar";
import PostsService from "../API/PostService";

const User = () => {
    const [user,setUser]=useState([])
    const [isLoading,setIsLoading]=useState(true)

    useEffect(()=>{
        fetch()
    },[])
    async function fetch(){
        const user=await PostsService.getAll(1,true)
        setUser(user);
        setIsLoading(false)
    }

    return (
        <div>
            <Navbar/>
            {isLoading
            ? <div>Загрузка</div>
            : <div className="user" >
                    <div key={user[0].id} className="user__content" >
                        <img src={user[0].imageUrl} alt="Image description"/>
                        <div style={{ marginLeft: "10px" }}>
                            <strong>{user[0].title}</strong>
                            <div>{user[0].body}</div>
                        </div>
                    </div>
                </div>
            }

        </div>
    );
};

export default User;