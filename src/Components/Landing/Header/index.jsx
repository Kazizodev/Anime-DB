import { NavLink } from "react-router-dom"
import './index.scss'

const index = () => {

  return (
    <div className="border-b-4 border-red-600 dark:bg-[#070621] transition duration-[0.7s]">
      <div className="container py-8 px-2 mx-auto flex items-center justify-between">

        <NavLink to={""} className="text-3xl font-[500] cursor-pointer text-gray-700 dark:text-white transition duration-[0.7s]">Anime<span className="font-[800] text-red-600">DB</span></NavLink>

        <div className="md:flex justify-between text-gray-500 dark:text-gray-300 hidden text-lg">
          <NavLink to={""} className="mx-2 hover:text-black dark:hover:text-white slide-in transition duration-[0.7s]">Homepage</NavLink>
          <NavLink to={"/second"} className="mx-2 hover:text-black dark:hover:text-white slide-in transition duration-[0.7s]">Categories</NavLink>
          <NavLink to={"/third"} className="mx-2 hover:text-black dark:hover:text-white slide-in transition duration-[0.7s]">Contact</NavLink>
        </div>

        <div className="md:hidden text-black dark:text-white transition duration-[0.7s]">
          <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
          </svg>
        </div>

      </div>
    </div>
  )
}

export default index