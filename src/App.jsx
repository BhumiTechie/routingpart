// eslint-disable-next-line no-unused-vars
import axios from "./Helpers/axios";
import Nav from './Components/Nav';
import RoutesComponent from './Routes/RoutesComponent';




const App = () => {
  

  const getusers = async() =>{
    try {                // try catch using for error handling
      const { data } = await axios.get("/users") 
 
    console.log(data);
    } catch (error){
      console.log(error)
    }
     };
  return (
    <div className="w-[80%] m-auto h-screen bg-gray-300 ">
      <Nav/>
      <hr />
     <button className="bg-green-300 py-2 px-5" onClick={getusers}>Get Users
     </button>
     <hr/>
      <RoutesComponent/>
    </div>
  )
}

export default App