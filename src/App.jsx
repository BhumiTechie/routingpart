import { Route, Routes } from 'react-router-dom'
import Entry from './Components/Entry';
import Home from './Components/Home';
import Library from './Components/Library'
import Nav from './Components/Nav'

const App = () => {
  return (
    <div className="w-[80%] m-auto h-screen">
      <Nav/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<Entry />} />
        <Route path="/show" element={<Library/>} />
        <Route path = "*" element={<h1>PAge Not FOund</h1>} />
      </Routes>
    </div>
  )
}

export default App