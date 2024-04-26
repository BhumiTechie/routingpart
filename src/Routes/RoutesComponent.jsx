
import { Route, Routes } from 'react-router-dom'
import Entry from '../Components/Entry';
import Home from '../Components/Home';
import Library from '../Components/Library'
import Details from '../Components/Details'

const RoutesComponent = () => {
  return (
	<Routes>
	<Route path="/" element={<Home />} />
	<Route path="/create" element={<Entry />} />
	<Route path="/show" element={<Library/>} />
		<Route path = "/show/:id" element = {<Details/>} />
  </Routes>
  );
}

export default RoutesComponent