import Image from "next/image";
import ActionButton from "./ActionButton";
import signVector from "@/app/assets/sign-vector.png"

const Footer: React.FC = () => {

    return (
        <>
            <footer className="footer footer-horizontal footer-center relative bg-[#161616] text-base-content py-0 px-34 z-1 before:absolute before:-translate-y-[50%] before:h-[66%] before:w-[120%] before:bg-[#161616] before:rounded-t-[50%] before:-z-1">
                {/* footer start  */}
                <nav className="flex flex-col w-full text-white">
                    <h3 className="text-5xl font-bold text-white">Your Business Journey Starts Here</h3>

                    <div className="flex flex-row gap-7 mt-15">
                        <ActionButton to="/signup" filled>Sign Up Today</ActionButton>

                        <ActionButton to="/login" >Login</ActionButton>
                    </div>

                    <div className="flex flex-row w-full px-34 justify-end mt-7">
                        <Image src={signVector} width={240} alt="sign"/>
                    </div>
                </nav>

                <nav className="grid grid-flow-col gap-4 text-white">
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Jobs</a>
                    <a className="link link-hover">Press kit</a>
                </nav>

                <aside>
                    <p>Copyright © {new Date().getFullYear()} - All right reserved by ACME Industries Ltd</p>
                </aside>
            </footer>
        </>
    )
}

export default Footer;