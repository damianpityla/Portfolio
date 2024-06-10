import { gradientText } from "../logica/constants.js";
import React, {Children, useState} from 'react';





const Button = ({children, inNav}) => {
  const animation = "transition-all duration-300 ease-in-out"
  const initialClasses = inNav ? "p-2 mr-10" : "p-2";
  const [buttonClasses, setButtonClasses] = useState(initialClasses)

  const handleHoverEnter = () => {
    setButtonClasses(`${initialClasses} ${gradientText} ${animation}`); // Agregar la clase "hover"
  };
  const handleHoverLeave = () => {
    setButtonClasses(`${initialClasses}`);
  };
  return(
    <button 
      className={buttonClasses}
      onMouseEnter={handleHoverEnter}
      onMouseLeave={handleHoverLeave}
    >
      {children}
    </button>
  )
}
export default Button;