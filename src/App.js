import React, { useEffect, useState } from 'react';
import './App.css';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import Button from '@material-ui/core/Button';
function App() {
  const [like,setLike]=useState('')
  const [user,setUser]=useState([])
  const [person,setPerson]=useState({})
  const [random,setRandom]=useState({})
 const handleLike=()=>{
   setLike(like ? '': 'primary' )
 }
 useEffect(()=>{
  fetch('https://jsonplaceholder.typicode.com/users')
  .then(res=>res.json())
  .then(data=>{
    setUser(data)
  })


  fetch('https://jsonplaceholder.typicode.com/users/1')
  .then(res=>res.json())
  .then(data=>setPerson(data))


  fetch('https://randomuser.me/api/')
  .then(res=>res.json())
  .then(data=>{
    setRandom(data.results[0])
  })
 },[])
 
  return (
    <div className="App">
     <h2>Hi baby fuck</h2>
     
     <Button onClick={()=>setLike(handleLike)} color={like}><ThumbUpAltIcon/></Button>
     <h2>{person.name}</h2>
     <h5>{random.gender}</h5>
     <p>{random.name && random.name.title} </p>
     {
       user.map((user)=>{
         return <li key={user.id}>{user.name}</li>
       })
     }
    </div>
  );
}

export default App;
