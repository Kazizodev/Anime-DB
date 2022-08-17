
const index = ({ list }) => {
    return (
        <div className='w-full'>
            {list.slice(0, 5).map((anime, i) => {
                return (
                    <div className='w-full px-2 mb-6 cursor-pointer' key={anime + i}>
                        <div className='relative'>
                            <img src={anime.images.jpg.image_url} draggable={false} className='sm:h-[200px] sm:w-full h-[200px] w-full object-cover rounded-lg mb-2' alt="" />
                            <div className='flex items-center absolute rounded top-[10px] right-[10px] px-2 py-0.5 justify-between text-white text-sm bg-[#3d3d3dce]'>
                                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
                                </svg>
                                {anime.favorites}
                            </div>
                        </div>

                        <h1 className='mt-1 text-lg font-[500] dark:text-white cursor-pointer transition duration-[0.7s]'>{anime.title_english}</h1>
                    </div>
                );
            })}
        </div>
    )
}

export default index