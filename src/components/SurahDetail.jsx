import React, {useState, useEffect} from 'react'
import axios from '../api/axios';
import { Link, useParams} from 'react-router-dom';

function SurahDetail() {
  const {id} = useParams();
  const [surahId, setSurahId] = useState(parseInt(id));
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);


  useEffect(() => {
    setIsLoading(true);
    axios.get(`/surah/${surahId}`)
    .then((response) => {
      setData(response.data.data);
      setIsLoading(false)
    })
    .catch((error) => {
      console.log(error);
      setIsLoading(false);
    });
  }, [surahId])

  if (isLoading) {
    return <div className='text-white w-full text-center text-2xl'>Loading...</div>;
  }

  const handlePrevClick = () => {
    if (surahId > 1) {
      setSurahId(surahId - 1);

    }
    window.scrollTo({
      top: 0,
    })
  };

  const handleNextClick = () => {
    if (surahId < 114) {
      setSurahId(surahId + 1);
    }
    window.scrollTo({
      top: 0,
    })
  };

  return (
    <article>
      {isLoading && <h1>Loading...</h1>}
      <div className='w-full text-white flex flex-col md:flex-row md:items-center md:justify-center gap-5'>
        <span className='p-2 bg-[#526D82] rounded-lg'>{data.name?.transliteration?.id} - {data.name?.translation?.id}</span>
        <span className='p-2 bg-[#526D82] rounded-lg'>{data.numberOfVerses} Ayat</span>
        <span className='p-2 bg-[#526D82] rounded-lg'>{data.revelation?.id}</span>
      </div>
      <p className='text-white mt-5'>Pengertian : {data.tafsir?.id}</p>
      {data && <ul className='flex flex-col gap-[50px] mt-[60px]'>
        {data.verses?.map((item) => (
          <li className='border rounded-md p-4' key={item.number.inSurah}>
            <div className='flex items-center gap-3'>
              <span className='px-3 py-1 rounded-md bg-slate-200'>{item.number.inSurah}</span>
            </div>
            <h1 className='text-white text-5xl leading-relaxed text-end font-arab'>{item.text?.arab}</h1>
            <p className='text-white mt-10'>{item.text?.transliteration?.en}</p>
            <p className='text-white mt-10'>Artinya : {item.translation?.id}</p>
          </li>
        ))}
      </ul>}
      <div className='mt-5 flex gap-5 mb-10 w-full justify-between'>
        <Link to={`/surah/${surahId - 1}`} className='px-3 py-1 border rounded-md text-white' onClick={handlePrevClick}>Sebelumnya</Link>
        <Link to={`/surah/${surahId + 1}`} className='px-3 py-1 border rounded-md text-white' onClick={handleNextClick}>Selanjutnya</Link>
      </div>
    </article>
  )
}

export default SurahDetail