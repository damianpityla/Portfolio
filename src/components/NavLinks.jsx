import Button from './Button.jsx'
const NavLinks = ({inNav}) =>
  {
    return (
      <>
        <a href="#destino" className="scroll-smooth"><Button inNav={inNav}>Acerca de Mi</Button></a>
        <a href="#destino" className="scroll-smooth"><Button inNav={inNav}>Proyectos</Button></a>
        <a href="#destino" className="scroll-smooth"><Button inNav={inNav}>Contacto</Button></a>
      </>
    );
  }
export default NavLinks