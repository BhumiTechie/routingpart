// import React from 'react'
import { Link } from 'react-router-dom';

import { useLocation, useNavigate, useParams } from 'react-router-dom'

const Details = () => {
	const { id } = useParams();
	const navigate = useNavigate()
	const {pathname}= useLocation();
  return (
	<div>
		<h1 className='text-2xl'>Details</h1>
		<h1 className='text-xl mt-5'>
			Book Id : <span className='font-extrabold'>{id}</span>
		</h1>
		<br />
		<Link className = "text-blue-500" to = {`${pathname}/profile`}> Profile</Link>
		<button className='mt-5 py-3 px-3 bg-red-300' onClick={() => navigate(-1)}> GO BACK</button>
	</div>
  )
}

export default Details