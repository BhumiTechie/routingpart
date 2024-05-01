// eslint-disable-next-line no-unused-vars
import axios from "./Helpers/axios";
import Nav from './Components/Nav';
import RoutesComponent from './Routes/RoutesComponent';

const App = () => {
  return (
    <div className="w-[80%] m-auto h-screen bg-gray-300 ">
      <Nav/>
      <hr />
     
      <RoutesComponent/>
    </div>
  )
}

export default App