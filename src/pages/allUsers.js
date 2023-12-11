import React, {useEffect, useState} from 'react';
import {usePosts} from "../hooks/usePosts";
import PostsService from "../API/PostService";
import UsersList from "../component/UsersList";
import Navbar from "../component/UI/navbar/Navbar";

const AllUsers = () => {
    const [posts,setPosts]=useState([])
    const [filter, setFilter]=useState({sort:'', query:''})


    useEffect(()=>{
        fetchPosts()
    },[])

    const sortedAndSearchedPosts=usePosts(posts,filter.sort,filter.query)

    async function fetchPosts(){
        const posts=await PostsService.getAll()
        setPosts(posts);
    }

    return (
        <div className="App">
            <Navbar filter={filter} setFilter={setFilter}/>
            <UsersList posts={sortedAndSearchedPosts} title="Список людей"/>
         </div>

    );
};

export default AllUsers;