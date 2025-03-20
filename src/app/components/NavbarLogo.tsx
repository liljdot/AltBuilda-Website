"use client"

import Image from "next/image"
import navbarLogo from "@/app/assets/navbar-logo.png"
import navbarLogoDark from "@/app/assets/navbar-logo-dark.png"
import { useContext } from "react"
import { themeContext } from "../context/ThemeContext"

const NavbarLogo: React.FC = () => {
    const {theme} = useContext(themeContext)!

    return <Image src={theme == "light" ? navbarLogo : navbarLogoDark} alt="AltBuilda Logo"/>
}

export default NavbarLogo