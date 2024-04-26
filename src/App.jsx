
import axios from "axios";
import Nav from './Components/Nav';
import RoutesComponent from './Routes/RoutesComponent';
const App = () => {
  // eslint-disable-next-line no-unused-vars
  const getusers = async() =>{
    try {                // try catch using for error handling
      const { data} = await axios.get("https://jsonplaceholder.typicode.com/users") 
    
    console.log(data);
    } catch (error){
      console.log(error)
    }
     };
  
  return (
    <div className="w-[80%] m-auto h-screen">
      <Nav/>
      <hr />
      <button className="w-28 p-3 bg-green-300" onClick={getusers}>Get users</button>
      <RoutesComponent/>
    </div>
  )
}

export default App