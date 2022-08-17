import { useState } from "react"
import './index.scss'
import Header from './Header'
import Hero from './Hero'

const index = () => {
    const [darkMode, setDarkMode] = useState(false);

    return (
        <div className={darkMode ? "dark transition-all duration-[0.7s]" : ""}>
            {/* Dark mode */}
            <div className="dark:bg-[#070621] transition-all duration-[0.7s]">
                <div className="flex justify-end container mx-auto px-2 pt-3">
                    <input type="checkbox" value={darkMode} onChange={() => setDarkMode(!darkMode)} id="theme-toggle" />
                    <label htmlFor="theme-toggle"></label>
                </div>
            </div>
            {/* Content */}
            <Header />
            <Hero />
        </div>
    )
}

export default index