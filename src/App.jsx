import { Route, Routes } from 'react-router-dom'
import Entry from './Components/Entry';
import Home from './Components/Home';
import Library from './Components/Library'
import Nav from './Components/Nav'
import Details from './Components/Details'

const App = () => {
  return (
    <div className="w-[80%] m-auto h-screen">
      <Nav/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<Entry />} />
        <Route path="/show" element={<Library/>} />
            <Route path = "/show/:id" element = {<Details/>} />
            
      </Routes>
    </div>
  )
}

export default App