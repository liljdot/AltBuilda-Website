"use client"

import { useContext, useEffect, useState } from "react"

import stepsImageDesktop from "@/app/assets/steps-image-desktop.png"
import stepsImageDesktopDark from "@/app/assets/steps-image-desktop-dark.png"

import stepsImageMobile from "@/app/assets/steps-image-mobile.png"
import stepsImageMobileDark from "@/app/assets/steps-image-mobile-dark.png"

import { themeContext } from "../context/ThemeContext"
import Image from "next/image"

const StepsImageDesktop: React.FC<{ screenSize: number }> = ({ screenSize }) => {
    const { theme } = useContext(themeContext)!

    return <Image src={theme == "light" ? stepsImageDesktop : stepsImageDesktopDark} alt="Steps to Get Started" />
}

const StepsImageMobile: React.FC<{ screenSize: number }> = ({ screenSize }) => {
    const { theme } = useContext(themeContext)!

    return <Image src={theme == "light" ? stepsImageMobile : stepsImageMobileDark} alt="Steps to Get Started" />
}

const StepsImage: React.FC = () => {
    const [screenSize, setScreenSize] = useState<number>(1300)

    useEffect(() => {
        setScreenSize(screen.availWidth)
        
        window.addEventListener("resize", () => {
            setScreenSize(screen.availWidth)
        })
    }, [])

    if (screenSize >= 640) {
        return <StepsImageDesktop screenSize={screenSize}/>
    }

    return <StepsImageMobile screenSize={screenSize}/>
}

export default StepsImage