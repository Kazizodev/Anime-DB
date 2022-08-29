import { useState } from "react"
import './index.scss'
import Header from './Header'
import Hero from './Hero'

const index = () => {
    const [darkMode, setDarkMode] = useState(false);

    return (
        <div className={darkMode ? "dark transition-all duration-[0.7s] relative" : ""}>
            <Header dark={darkMode} setDark={setDarkMode} />
            <Hero />
        </div>
    )
}

export default index