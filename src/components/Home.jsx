import { CiLinkedin } from "react-icons/ci";
import { FaWhatsapp } from "react-icons/fa";
import { MdMailOutline } from "react-icons/md";
import { gradientText } from "../logica/constants.js";
import logoImg  from "../assets/logo.png"

const color = "text-pinky2"
const hoverSocialMedia = "hover:text-pinky transition ease-in-out duration-300 transform"

const Home = () => {
    const welcomeClasses = " h-[calc(100vh-3.5rem)] mt-14 max-xsm:mt-10 flex justify-evenly items-center xsm:flex-row flex-col-reverse flex-grow";

    return (
        <div>
            <section className={welcomeClasses}>
                <div className="welcome-text">
                    <div className="presentation text-4xl max-xsm:w-64 max-xsm:text-2xl">
                        Soy <span className={`${gradientText} font-bold`}>Damian</span>,<br/> un desarrollador web <span className={`${gradientText} font-bold`}> :)</span>
                    </div>
                    <div className="SocialMedia flex justify-around mt-4 ">
                        <a href="http://wa.me/+541125406217" target="_blank" className="inline-block"><FaWhatsapp className={`${color} ${hoverSocialMedia} w-7 h-7`}/></a>
                        <a href="https://www.linkedin.com/in/damian-pityla-04a842241/" target="_blank"><CiLinkedin className={`${color} ${hoverSocialMedia} w-8 h-8`}/></a>
                        <a href="mailto:damipityla@gmail.com"><MdMailOutline className={`${color} ${hoverSocialMedia} w-8 h-8 mt-0.3 `}/></a>
                    </div>
                </div>
                <div className="logo max-xsm:w-64 max-xsm:h-72 relative z-0 w-96 h-96">
                    <img src={logoImg} alt="Developer photo"/>
                </div>

            </section>
        </div>
    )
}
export default Home;