import { NavLink } from "react-router-dom"
import { useState } from "react"
import './index.scss'

const index = () => {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "dark transition-all duration-[2s]" : ""}>
      <div className="dark:bg-[#070621] dark:text-white">
        <div className="w-full flex justify-end container mx-auto px-2">
          <button onClick={() => setDarkMode(!darkMode)}>{darkMode ? "Dark Mode" : "Light Mode"}</button>
        </div>
      </div>
      <div className="border-b-4 py-8 px-2 border-red-600 dark:bg-[#070621]">
        <div className="container mx-auto flex items-center justify-between">

          <NavLink to={""} className="text-3xl font-[500] cursor-pointer text-gray-700 dark:text-white">Anime<span className="font-[800] text-red-600">DB</span></NavLink>

          <div className="md:flex justify-between text-gray-500 dark:text-gray-300 hidden text-lg">
            <NavLink to={""} className="mx-2 hover:text-black dark:hover:text-white transition-[color] slide-in">Homepage</NavLink>
            <NavLink to={"/second"} className="mx-2 hover:text-black dark:hover:text-white transition-[color] slide-in">Categories</NavLink>
            <NavLink to={"/third"} className="mx-2 hover:text-black dark:hover:text-white transition-[color] slide-in">Contact</NavLink>
          </div>

          <div className="md:hidden text-black">
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </div>

        </div>
      </div>


    </div>
  )
}

export default index