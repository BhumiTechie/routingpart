// eslint-disable-next-line no-unused-vars
import React from 'react';
import axios from '../Helpers/axios';
import { useNavigate } from 'react-router-dom';

const Entry = () => {
  const navigate = useNavigate();

  const SubmitHandler = () => {
    // send the data to the db and switch the page
    navigate("/show");
  };

  const getposts = async () => {
    try {
      const { data } = await axios.get(`/posts`);
      console.log(data);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div>
      <h1 className='text-2xl font-extrabold'>Book Entries</h1>
      <button className='bg-green-300 py-2 px-5 my-3' onClick={getposts}>GET POST</button>
      <br/> <br/>
      <button onClick={SubmitHandler} className='bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded m-3'> Submit</button>
    </div>
  );
};

export default Entry;
