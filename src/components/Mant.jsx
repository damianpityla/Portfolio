import React from 'react';
import { CSSTransition } from 'react-transition-group';

const Mant = ({ in: inProp }) => {
  return (
    <CSSTransition in={inProp} timeout={300}>
      <section className="pop-up w-4/5">
        <div className='text'>
          Sitio web en mantenimiento, agregando funcionalidades :)
        </div>
      </section>
    </CSSTransition>
  );
}

export default Mant;
