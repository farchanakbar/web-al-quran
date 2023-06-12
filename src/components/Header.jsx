import React, { useEffect, useState } from 'react'
import axios from 'axios';
import {MdOutlineLightMode} from 'react-icons/md'
import { Link } from 'react-router-dom';

function Header() {
  // const [input, setInput] = useState('');

  // useEffect(() => {
  //   axios.get(`https://api.quran.gading.dev/surah`)
  //   .then((response) => data(response.data.data))
  //   .catch((error) => console.log(error));

  // }, [input])

  const HandleSearch = (event) => {
    event.preventDefault();
    setInput(event.target.value);
  }

  return (
    <header className='w-full gap-2 flex justify-between px-5 py-5 bg-[#2C3333]'>
      <Link to={'/'}><h1 className='text-2xl text-white font-semibold'>Al Qur'an Indonesia</h1></Link>
      <div className='flex items-center gap-5'>
        {/* <input value={input} onChange={HandleSearch} className='border w-[280px] outline-none px-2 py-1 rounded bg-transparent text-white' placeholder='Cari Surah...' type="text" /> */}
        {/* <MdOutlineLightMode size={25} className='text-white cursor-pointer' /> */}
        {/* <Link className='text-white'>Juz</Link> */}
      </div>
    </header>
  )
}

export default Header