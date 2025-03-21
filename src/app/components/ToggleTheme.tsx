"use client"

import { useContext } from "react"
import { themeContext } from "../context/ThemeContext"

const ToggleTheme: React.FC = () => {
    const {theme, toggleTheme} = useContext(themeContext)!

    return (
        <>
            <button onClick={toggleTheme} className="btn btn-base">Toggle</button>
        </>
    )
}

export default ToggleTheme