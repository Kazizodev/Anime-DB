import topService from '../../../Features/Top/topService'
import { useState, useEffect } from 'react'
import Card from './Anime Card'
import Character from './Character'

const index = () => {
  const [topRated, setTopRated] = useState([]);
  const [topCharacters, setTopCharacters] = useState([])

  useEffect(() => {
    const GetAnime = async () => {
      setTopRated((await topService.getTopAnime()).data.data);
      setTopCharacters((await topService.getTopCharacters()).data.data)
    }
    GetAnime().catch(console.error);
  }, [])


  return (
    <div className='dark:bg-[#0A0C2B] transition duration-[0.7s]'>
      <div className="container mx-auto flex justify-between flex-col md:flex-row py-8 px-2">
        <div className='md:w-[67%] w-[100%]'>
          <div className='mb-5'>
            <h1 className='uppercase text-2xl font-[600] border-l-4 tracking-tight border-red-600 pl-4 dark:text-white transition duration-[0.7s]'>Trending now</h1>
          </div>
          {topRated.length > 0 ?
            (
              <>
                <Card list={topRated} />
              </>
            )
            : ""}
        </div>

        <div className='md:w-[30%] w-[100%] md:px-2'>
        <div className='mb-5'>
            <h1 className='uppercase text-xl font-[600] border-l-4 tracking-tight border-red-600 pl-4 dark:text-white transition duration-[0.7s]'>Top characters</h1>
          </div>
          {topCharacters.length > 0 ?
            (
              <div className='w-full'>
                <Character list={topCharacters} />
              </div>
            )
            :
            ""}
        </div>
      </div>
    </div>
  )
}

export default index