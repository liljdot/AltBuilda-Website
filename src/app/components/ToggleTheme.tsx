"use client"

import { useContext } from "react"
import { themeContext } from "../context/ThemeContext"

const ToggleTheme: React.FC = () => {
    const {theme, setTheme} = useContext(themeContext)!

    return (
        <>
            <button onClick={() => setTheme(theme == "light" ? "dark" : "light")} className="btn btn-base">Toggle</button>
        </>
    )
}

export default ToggleTheme