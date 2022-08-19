import { useState } from "react"
import './index.scss'
import Header from './Header'
import Hero from './Hero'

const index = () => {
    const [darkMode, setDarkMode] = useState(false);

    return (
        <div className={darkMode ? "dark transition-all duration-[0.7s] relative" : ""}>
            {/* Dark mode */}
            <div className="fixed flex justify-center items-center dark:bg-gray-100 dark:shadow-inner bg-black transition-all duration-[0.7s] rounded-full 
                            md:w-[80px] md:h-[80px] w-[60px] h-[60px] sm:right-[2rem] right-[1rem] sm:bottom-[2rem] bottom-[1rem] z-[99] shadow-xl">
                <input type="checkbox" value={darkMode} className={"hidden"} onChange={() => setDarkMode(!darkMode)} id="theme-toggle" />
                <label className="md:h-[40px] md:w-[40px] h-[30px] w-[30px]" htmlFor="theme-toggle"></label>
            </div>
            {/* Content */}
            <Header />
            <Hero />
        </div>
    )
}

export default index