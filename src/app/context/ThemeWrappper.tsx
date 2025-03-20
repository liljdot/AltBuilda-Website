"use client"

import { ReactNode, useContext } from "react"
import { themeContext } from "./ThemeContext"

interface WrapperProps {
    children: ReactNode
}

const ThemeWrapper: React.FC<WrapperProps> = ({children}) => {
    const context = useContext(themeContext)

    if (!context) {
        throw new Error("Cannot find theme context")
    }

    const {theme} = context

    return (
        <>
            <div data-theme={theme}>
                {children}
            </div>
        </>
    )
}

export default ThemeWrapper