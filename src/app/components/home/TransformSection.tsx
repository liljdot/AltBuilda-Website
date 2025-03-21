import onlyFontLogo from "@/app/assets/only-font-logo.png"

import Image from "next/image";
import OnlyFontLogo from "../OnlyFontLogo";
const TransformSection: React.FC = () => {

    return (
        <>
            <section className="bg-base-100 p-12 relative">
                <div className="mt-12 w-fit mx-auto relative pb-5">
                    <h3 className="text-5xl font-bold text-center text-primary">
                        Transform your business
                        <br />
                        with
                    </h3>

                    <OnlyFontLogo />
                </div>

                <div className="flex flex-row justify-between mt-35">
                    <div className="card w-73 bg-neutral shadow-md">
                        <div className="card-body flex flex-col justify-around px-10">
                            
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default TransformSection;