import React, {useEffect, useRef, useState} from 'react';
import {useUsers} from "../hooks/useUsers";
import PostsService from "../API/PostService";
import UsersList from "../component/UsersList";
import Navbar from "../component/UI/navbar/Navbar";
import {useObserver} from "../hooks/useObserver";
import {useFetching} from "../hooks/useFetching";

const AllUsers = () => {
    const [users,setUsers]=useState([])
    const [filter, setFilter]=useState({sort:'', query:''})
    const lastElement=useRef()
    const [page,setPage]=useState(1)
    const pageLimit=10;



    useEffect(()=>{
        fetchUsers()
    },[page])

    const sortedAndSearchedUsers=useUsers(users,filter.sort,filter.query)

    const[fetchUsers,isLoading]=useFetching(async ()=>{
        const response=await PostsService.getAll(10,false)
        setUsers([...users,...response]);
    })
    useObserver(lastElement,page<pageLimit, isLoading,() =>{
        setPage(page+1)
    })

    // async function fetchUsers(){
    //     const response=await PostsService.getAll(10,false)
    //     setUsers([...users,...response]);
    // }

    return (
        <div className="App">
            <Navbar filter={filter} setFilter={setFilter}/>
            <UsersList users={sortedAndSearchedUsers} title="Список людей"/>
            <div ref={lastElement} style={{height:20}}/>
            {isLoading && <div>Загрузка</div>}

         </div>

    );
};

export default AllUsers;