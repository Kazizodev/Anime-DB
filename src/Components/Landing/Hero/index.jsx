import topService from '../../../Features/Top/topService'
import { useState, useEffect } from 'react'
import Card from './Anime Card'
import Loading from './Loading'
import Popular from './Popular Card'

const index = () => {
  const [topRated, setTopRated] = useState([]);
  const [topPopular, setTopPopular] = useState([]);
  const [topFav, setTopFav] = useState([]);

  useEffect(() => {
    const GetAnime = async () => {
      setTopRated((await topService.getTopAnime()).data.data);
      await new Promise(resolve => setTimeout(resolve, 1500));;
      setTopPopular((await topService.getTopPopular()).data.data);
      await new Promise(resolve => setTimeout(resolve, 3000));;
      setTopFav((await topService.getTopFav()).data.data);
    }
    GetAnime().catch(console.error);
  }, [])


  return (
    <div className='dark:bg-[#0A0C2B] transition duration-[0.7s]'>
      <div className="container mx-auto flex justify-between flex-col md:flex-row py-8 px-2">
        <div className='md:w-[67%] w-[100%]'>
          <div className='mb-5 flex justify-between items-center'>
            <h1 className='uppercase text-2xl font-[600] border-l-4 tracking-tight border-red-600 pl-4 dark:text-white transition duration-[0.7s]'>Recently added</h1>
            <h4 className='lowercase flex items-center justify-center text-gray-500 dark:text-gray-300 tracking-widest hover:tracking-wide cursor-pointer transition-[letter-spacing]'>
              View all
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
              </svg>
            </h4>
          </div>
          {topRated.length > 0 ?
            (
              <>
                <Card list={topRated} />
              </>
            )
            :
            (
              <>
                <Loading />
              </>
            )}

          <div className='mb-5 flex justify-between items-center'>
            <h1 className='uppercase text-2xl font-[600] border-l-4 tracking-tight border-red-600 pl-4 dark:text-white transition duration-[0.7s]'>Most favored</h1>
            <h4 className='lowercase flex items-center justify-center text-gray-500 dark:text-gray-300 tracking-widest hover:tracking-wide cursor-pointer transition-[letter-spacing]'>
              View all
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
              </svg>
            </h4>
          </div>
          {topFav.length > 0 ?
            (
              <>
                <Card list={topFav} />
              </>
            )
            :
            (
              <>
                <Loading />
              </>
            )}
        </div>

        <div className='md:w-[30%] w-[100%] md:px-2'>
          <div className='mb-5'>
            <h1 className='uppercase text-xl font-[600] border-l-4 tracking-tighter border-red-600 pl-4 dark:text-white transition duration-[0.7s]'>Most popular</h1>
          </div>
          {topPopular.length > 0 ?
            (
              <div className='w-full'>
                <Popular list={topPopular} />
              </div>
            )
            :
            (
              <>
                <Loading />
              </>
            )}
        </div>
      </div>
    </div>
  )
}

export default index