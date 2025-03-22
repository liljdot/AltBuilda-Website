"use client"

import clipboardDoodle from "@/app/assets/clipboard-doodle.png"
import clipboardDoodleBlack from "@/app/assets/clipboard-doodle-black.png"

import toolsDoodle from "@/app/assets/tools-doodle.png"
import toolsDoodleBlack from "@/app/assets/tools-doodle-black.png"

import toolboxDoodle from "@/app/assets/toolbox-doodle.png"
import toolboxDoodleBlack from "@/app/assets/toolbox-doodle-black.png"

import handshakeDoodle from "@/app/assets/handshake-doodle.png"
import handshakeDoodleBlack from "@/app/assets/handshake-doodle-black.png"

import { useContext } from "react"
import { themeContext } from "../context/ThemeContext"
import Image from "next/image"

const width = 80

export const ClipboardDoodle: React.FC = () => {
    const {theme} = useContext(themeContext)!

    return <Image src={theme == "light" ? clipboardDoodleBlack : clipboardDoodle} alt="Clipboard Doodle" width={width}/>
}

export const ToolsDoodle: React.FC = () => {
    const { theme } = useContext(themeContext)!

    return <Image src={theme == "light" ? toolsDoodleBlack : toolsDoodle} alt="Tools Doodle" width={width} />
}

export const ToolboxDoodle: React.FC = () => {
    const {theme} = useContext(themeContext)!

    return <Image src={theme == "light" ? toolboxDoodleBlack : toolboxDoodle} alt="Toolbox Doodle" width={width}/>
}

export const HandshakeDoodle: React.FC = () => {
    const {theme} = useContext(themeContext)!

    return <Image src={theme == "light" ? handshakeDoodleBlack : handshakeDoodle} alt="Handshake Doodle" width={width}/>
}