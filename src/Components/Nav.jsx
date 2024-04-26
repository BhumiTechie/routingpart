
import { NavLink} from 'react-router-dom'

const Nav = () => {
  return (
<div className='w-full flex justify-center p-3 font-bold  bg-pink-400'>
  <nav className="flex gap-5">
    <NavLink className={(e) => (e.isActive ? "text-white" : "")} to="/">Home</NavLink>
    <NavLink className={(e) => (e.isActive ? "text-white" : "")} to="/create">Book Entry</NavLink>
    <NavLink className={(e) => (e.isActive ? "text-white" : "")} to="/show">Library</NavLink>
  </nav>
</div>

  )
}

export default Nav