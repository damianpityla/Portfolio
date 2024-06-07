import React from 'react';
import { CSSTransition } from 'react-transition-group';

const Mant = ({ in: inProp }) => {
  return (
    <CSSTransition in={inProp} timeout={300} classNames="pop-up">
      <section className='pop-up'>
        <div className='text'>
          Sitio web en mantenimiento, agregando funcionalidades :)
        </div>
      </section>
    </CSSTransition>
  );
}

export default Mant;
