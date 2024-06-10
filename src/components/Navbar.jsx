import { useState } from "react";
import { gradientText } from "../logica/constants.js";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import NavLinks from "./NavLinks.jsx";


    const navClasses = "h-16 navbar flex items-center justify-between w-full max-w-full py-5 px-5 border-b-2 border-pinky2 fixed top-0 z-20";
    const NavBar = () => {
        const [isOpen, setIsOpen] = useState(false)
        const handleButton = () =>{
            setIsOpen(!isOpen)
        }
        const borderHandler = isOpen ? "border-none": ""
        
        const color = "text-pinky2"
        const hoverSocialMedia = "hover:text-pinky transition ease-in-out duration-300 transform"
        return (
                    <nav className={`${navClasses} ${borderHandler}`}>
                        {/* Contenedor para el logo */}
                        <div className="navbar-logo">
                            <a   href=""></a><span className={`${gradientText} font-bold cursor-pointer`}>DamCode</span>
                        </div>
                        <div className="navbar-links max-xsm:hidden">
                            <NavLinks inNav={true}/>
                        </div>
                        <div className="menuBtn xsm:hidden justify-center flex">
                            <button onClick={handleButton}>{isOpen ? <IoMdClose className={`${color} ${hoverSocialMedia} `}/> : <GiHamburgerMenu className={`${color} ${hoverSocialMedia}`}/> }</button>
                        </div>  
                        {isOpen && (
                            <div className="w-full left-0 pleft absolute top-16 flex flex-col text-center border-b-2 border-pinky2 bg-bg">
                                <NavLinks inNav={false}/>
                            </div>
                        )}
                    </nav>
        );}
export default NavBar;