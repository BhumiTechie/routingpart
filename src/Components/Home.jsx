
import axios from "axios";
import { useState } from "react";

const Home = () => {
  const[ users , setusers] = useState([])
  //  eslint-disable-next-line no-unused-vars
  const getusers = async() =>{
    try {                // try catch using for error handling
      const { data } = await axios.get("/users") 
    setusers(data);
    console.log(data);
    } catch (error){
      console.log(error)
    }
     };

     let renderusers = "Loading users...";
     if(users.length > 0){
        //  eslint-disable-next-line no-unused-vars
        
        renderusers = users.map((user)=>{
        <div className="bg-red-100 p-3 mr-2 mb-2" key={user.id}>
          <h1 className="font-2xl">{user.name}</h1>
          <small>{user.email}</small>
        </div>
      })
     }
  return (
	<div>
    HEY THIS IS A HOME PAGE!
    <button className="w-28 p-3 mb-3 text-white bg-sky-400 m-5" onClick={getusers}>Get users</button> 
  </div>
  )
}

export default Home