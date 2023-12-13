import {useMemo} from "react";

export const useSortedUser=(users,sort)=>{
    const sortedUsers=useMemo(()=>{
        if(sort) {
            return [...users].sort((a,b)=> a[sort].localeCompare(b[sort]))
        }
        return users
    },[sort,users])

    return sortedUsers
}


export const useUsers=(users, sort, query)    => {
    const sortedUsers=useSortedUser(users,sort)

    const sortedAndSearchedUsers=useMemo(()=>{
        return sortedUsers.filter(user=>user.title.toLowerCase().includes(query))
    },[query,sortedUsers])

    return sortedAndSearchedUsers
}