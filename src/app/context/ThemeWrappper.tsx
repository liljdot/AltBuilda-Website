"use client"

import { ReactNode, useContext } from "react"
import { themeContext } from "./ThemeContext"

interface WrapperProps {
    children: ReactNode
}

const ThemeWrapper: React.FC<WrapperProps> = ({children}) => {
    const {theme} = useContext(themeContext)!

    return (
        <>
            <div data-theme={theme}>
                {children}
            </div>
        </>
    )
}

export default ThemeWrapper