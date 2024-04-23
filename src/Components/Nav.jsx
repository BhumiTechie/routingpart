import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
      <nav>
		<Link to = "/">Home</Link>
		<Link to= "/create">Book Entry</Link>
		<Link to = "/show">Library</Link>
	  </nav>
  )
}

export default Nav