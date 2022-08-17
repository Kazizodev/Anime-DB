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
      <div className="container mx-auto flex flex-wrap py-8 px-2">
        <div className='sm:w-[75%] w-[100%]'>
          <div className='mb-5'>
            <h1 className='uppercase text-3xl font-[600] border-l-4 border-red-600 pl-4 dark:text-white transition duration-[0.7s]'>Top rated</h1>
          </div>
          {topRated.length > 0 ?
            (
              <>
                <Card list={topRated} />
              </>
            )
            : ""}
        </div>

        <div className='sm:w-[25%] w-[100%] px-2'>
        <div className='mb-5'>
            <h1 className='uppercase text-3xl font-[600] border-l-4 border-red-600 pl-4 dark:text-white transition duration-[0.7s]'>Top characters</h1>
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