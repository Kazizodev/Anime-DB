
const index = ({ list }) => {
    return (
        <div className='flex flex-col justify-between sm:flex-row flex-wrap'>
            {list.map((anime, i) => {
                return (
                    <div className='lg:w-[220px] md:w-[180px] w-full px-2 mb-6 cursor-pointer' key={anime + i}>
                        <div className='relative'>
                            <img loading="lazy" src={anime.images.webp.large_image_url} draggable={false} className='h-[325px] lg:w-[220px] md:w-[180px] w-full object-cover rounded-lg mb-2' alt="" />
                            <div className='absolute top-[10px] text-sm right-[10px] text-white bg-red-600 px-3 py-1.5 leading-none rounded-[4px]'>
                                {anime.score}
                            </div>
                            <div className='flex items-center absolute rounded bottom-[10px] left-[10px] px-2 py-0.5 justify-between text-white text-sm bg-[#3d3d3dce]'>
                                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
                                </svg>
                                {anime.scored_by}
                            </div>
                        </div>
                        <div className='flex flex-1 flex-wrap'>
                            {anime.genres.slice(0, 3).map((genre, i) => {
                                return (
                                    <div className='font-[500] rounded-xl px-2 leading-none py-1 mr-2 mb-1 text-[9px] bg-[#00000056] text-white dark:bg-[#ffffff69] transition duration-[0.7s]' key={genre + i}>
                                        {genre.name}
                                    </div>
                                );
                            })}
                        </div>
                        <h1 className='mt-1 text-lg font-[500] dark:text-white cursor-pointer transition duration-[0.7s]'>{anime.title_english}</h1>
                    </div>
                );
            })}
        </div>
    )
}

export default index