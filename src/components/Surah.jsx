import React, {useEffect, useState} from 'react'
import { Link } from 'react-router-dom';
import axios from '../api/axios';
import {AiFillInfoCircle} from 'react-icons/ai'


function Surah() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get(`/surah`)
    .then((response) => setData(response.data.data))
    .catch((error) => console.log(error));

  }, [])

  return (
    <article>
      <ul className='w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 py-3 gap-5 items-center justify-between'>
        {data?.map((item) => ( <li key={item.number} className=''>
        <Link to={`/surah/${item.number}`}>
          <div className='border w-full flex sm:items-center sm:flex-row p-5 text-white rounded-lg bg-[#2C3639]'>
            <h3>{item.number}.</h3>
            <div className='w-full px-5 flex justify-between'>
              <div className='flex flex-col gap-3'>
                <h1 className='text-start'>{item.name.transliteration.id}</h1>
                <div className='flex gap-5'>
                  <span className='px-3 py-1 bg-white text-black rounded-lg'>{item.revelation.id}</span>
                  <span className='px-3 py-1 bg-white text-black rounded-lg'>{item.numberOfVerses} Ayat</span>
                </div>
              </div>
            </div>
            <h1 className='text-2xl font-arab text-end hidden sm:block'>{item.name.short}</h1>
          </div></Link>
        </li>))}
      </ul>
    </article>
  )
}

export default Surah