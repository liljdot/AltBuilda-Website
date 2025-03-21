"use client"

import { createContext, Dispatch, ReactNode, SetStateAction, useEffect, useState } from "react";

interface ContextProps {
    theme: "light" | "dark"
    setTheme: Dispatch<SetStateAction<"light" | "dark">>
}

interface ThemeProviderProps {
    children: ReactNode
}

export const themeContext = createContext<ContextProps | null>(null)

const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
    const [theme, setTheme] = useState<"light" | "dark">("light")
    const [isMounted, setIsMounted] = useState<boolean>(false)

    useEffect(() => {
        setIsMounted(true)
        setTheme(localStorage.getItem("theme") == "dark" ? "dark" : "light")
    }, [])

    // if (!isMounted) {
    //     return <>Loading...</>
    // }
    // will cause entire site to build as a jsbundle

    return (
        <>
            <themeContext.Provider value={{ theme, setTheme }}>
                {children}
            </themeContext.Provider>
        </>
    )
}

export default ThemeProvider