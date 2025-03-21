import heroSectionImage from "@/app/assets/hero-section-image.png"
import Image from "next/image"
import HeroSectionBG from "./HeroSectionBG"

const HeroSection: React.FC = () => {

    return (
        <>
            <HeroSectionBG>
                <div className="w-[55%] mt-20.5">
                    <h1 className="text-7xl">
                        Your Ultimate Platform
                        <br />
                        <span className="font-semibold">
                            For SME Growth.
                        </span>
                    </h1>

                    <p className="mt-10 pr-21">Empowering businesses with tools to manage operations, connect with
                        peers,and drive growth effortlessly</p>
                </div>

                <div className="w-[45%]">
                    <Image src={heroSectionImage} alt="Hero Section Image" />
                </div>
            </HeroSectionBG>
        </>
    )
}

export default HeroSection