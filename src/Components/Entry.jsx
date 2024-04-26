
import { useNavigate } from 'react-router-dom'

const Entry = () => {
  const navigate = useNavigate();
  const SubmitHandler = () =>{
    // send the data to the db and switch the page
    navigate("/show");
    //navigate(1);
    //navigate(-1)
  }
  return (
	<div>
    <button onClick={SubmitHandler} className='bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded m-3'> Submit</button>
  </div>
  )
}

export default Entry