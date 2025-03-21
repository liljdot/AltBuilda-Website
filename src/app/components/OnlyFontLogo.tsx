"use client"

import onlyFontLogo from "@/app/assets/only-font-logo.png"
import onlyFontLogoBlack from "@/app/assets/only-font-logo-black.png"
import Image from "next/image"
import { useContext } from "react"
import { themeContext } from "../context/ThemeContext"

const OnlyFontLogo: React.FC = () => {
    const { theme } = useContext(themeContext)!

    return <Image src={theme == "light" ? onlyFontLogoBlack : onlyFontLogo} alt="AltBuilda" width={245} className="absolute bottom-0 -right-5" />
}

export default OnlyFontLogo