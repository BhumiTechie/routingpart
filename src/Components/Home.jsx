
import axios from '../Helpers/axios';
import { useEffect, useState } from "react";

const Home = () => {
  const[ users , setusers] = useState([])
  // const[images , setimages] = useState([])
  // const[page , setpage] = useState(1);
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



  //  eslint-disable-next-line no-unused-vars
    // const getimages  = async () =>{
    //   try {
    //     const { data} = await axios.get(`https://picsum.photos/v2/list?page=${page}&limit=10`)
  
    // setimages(data);
    //   } catch (error) {
    //     console.log(error); 
    //   }
      

      // let renderimages = "Loading.........";
      // if(images.length >0){
      //   renderimages = images.map(iamge) =>(
      //     <div className='shadow w-[25%] p-3 mr-2' key={image.id}>
      //       <img className='' src="{image.download_url}" alt="" />
      //     </div>
      //   )
      // }

      


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
   useEffect(()=>{
    // console.log("HEy")
    console.log("Home.jsx mounted to ");
}, [])

// useeffect mean page reload hona!
console.log("heloo")

  return (
	<div>
    HEY THIS IS A HOME PAGE!
    <h1 className='text-2xl font-extrabold'>Homepage</h1>
    <button className=" text-white bg-sky-400 py-2 px-5 my-5" onClick={getusers}>Get Users</button>
    <hr />
    <div></div> 
  </div>
  )
}

export default Home