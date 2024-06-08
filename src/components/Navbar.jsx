import { FaFaceSmileWink } from "react-icons/fa6";
import { gradientText } from "../logica/constants.js";
import Button from './Button.jsx'


  // Función para manejar el desplazamiento
    const handleScroll = () => {
    // Calcula la cantidad de píxeles equivalente a 1.5 rem
    const rootFontSize = parseFloat(getComputedStyle(document.documentElement).fontSize);
    const scrollAmount = 1.5 * rootFontSize;
    window.scrollBy({ top: scrollAmount, behavior: 'smooth' });
    }
    const HeaderClasses = "h-16 navbar flex items-center justify-between w-full max-w-full py-5 px-5 border-b-2 border-pinky2 fixed top-0";
    const NavBar = () => {
        return (
            <>
                <header className={HeaderClasses}>
                    {/* Contenedor para el logo */}
                    <div className="navbar-logo">
                        <a   href=""></a><span className={`${gradientText} font-bold cursor-pointer`}>DamCode</span>
                    </div>

                    {/* Contenedor para los botones */}
                    <nav className="navbar-links">
                        <a href="#destino" className="scroll-smooth"><Button onClick={handleScroll}>Acerca de Mi</Button></a>
                        <a href="#destino" className="scroll-smooth"><Button onClick={handleScroll}>Proyectos</Button></a>
                        <a href="#destino" className="scroll-smooth"><Button onClick={handleScroll}>Contacto</Button></a>
                    </nav>
                </header>

            </>
        );}
export default NavBar;