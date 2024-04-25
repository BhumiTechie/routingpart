
import { NavLink} from 'react-router-dom'

const Nav = () => {
  return (
<div className='w-full flex justify-center p-3'>
  <nav className="flex gap-5">
    <NavLink className={(e) => (e.isActive ? "text-red-300" : "")} to="/">Home</NavLink>
    <NavLink className={(e) => (e.isActive ? "text-red-300" : "")} to="/create">Book Entry</NavLink>
    <NavLink className={(e) => (e.isActive ? "text-red-300" : "")} to="/show">Library</NavLink>
  </nav>
</div>

  )
}

export default Nav