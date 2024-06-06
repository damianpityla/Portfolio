const NavBar = () => {
    const HeaderClasses = "h-16 navbar flex items-center justify-between w-full max-w-full py-5 px-5 border-b-2 border-pinky2 fixed top-0";
    const buttonClasses = "hover:text-pinky2 text-white p-2 rounded transition-color duration-200 delay-100 mr-10";
    return (
        <header className={HeaderClasses}>
            {/* Contenedor para el logo */}
            <div className="navbar-logo">
                <img src="ruta-a-tu-logo.png" alt="Logo" />
            </div>

            {/* Contenedor para los botones */}
            <nav className="navbar-links">
                <button className={buttonClasses}>
                    Button
                </button>
                <button className={buttonClasses}>
                    Sobre mí
                </button>
                <button className={buttonClasses}>
                    Contacto
                </button>
            </nav>
        </header>
    );
}
export default NavBar;