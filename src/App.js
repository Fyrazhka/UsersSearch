import './App.css';
import UsersList from "./component/UsersList";
import MySelect from "./component/UI/select/MySelect";
import {useMemo, useState} from "react";
import MyInput from "./component/UI/input/MyInput";

function App() {

    const [posts,setPosts]=useState([
        {"id":1, "title":"1Nesterkov Dmitriy","body":"Front-end developer"},
        {"id":2, "title":"2Nesterkov Dmitriy","body":"2Front-end developer"},
        {"id":3, "title":"Nesterkov Dmitriy","body":"1Front-end developer"},
        {"id":4, "title":"Nesterkov Dmitriy","body":"Front-end developer"}])

    const [selectedSort,setSelectedSort]=useState('')
    const[searchQuery,setSearchQuery]=useState('')

    const sortedPosts=useMemo(()=>{
        console.log("cjhnbhjdrf")
        if(selectedSort) {
            return [...posts].sort((a,b)=> a[selectedSort].localeCompare(b[selectedSort]))
        }
        return posts
    },[selectedSort,posts])

    const sortedAndSearchedPosts=useMemo(()=>{
        return sortedPosts.filter(post=>post.title.toLowerCase().includes(searchQuery))
    },[searchQuery,sortedPosts])

    const sortPosts=(sort)=>{
        setSelectedSort(sort)
    }

  return (
    <div className="App">
        <div className="header">
            <MyInput
                value={searchQuery}
                onChange={e=> setSearchQuery(e.target.value)}
                placeholder="Поиск"
            />
            <MySelect
                value={selectedSort}
                onChange={sortPosts}
                options={[
                    { value: 'title', name: 'По названию' },
                    { value: 'body', name: 'По описанию' }
                ]}
                defaultValue={'Сортировка по '}

            />
        </div>
        <UsersList posts={sortedAndSearchedPosts} title="Список людей"/>
    </div>
  );
}

export default App;
