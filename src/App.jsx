import React, { useState, useEffect, useRef} from 'react';

import Navbar from './components/Navbar';
import Mant from './components/Mant'
import Home from './components/Home';
// import About from './components/About';
// import Projects from './components/Projects';
// import Skills from './components/Skills';
// import Contact from './components/Contact';
// import Footer from './components/Footer';

function App() {
    const[renderContent, setRenderContent] = useState(false);
    const nodeRef = useRef(null);

    const handleScroll = () => {
        if (window.scrollY > 0) {
          setRenderContent(true);
        } else {
          setRenderContent(false);
        }
      };
    const handleLinkClick = (e) => {
      setRenderContent(true);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
    
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);


    return (
        <div>
            <Navbar />
            <Home />
            {renderContent && (<Mant/>)}
            <footer id='destino' className="end"></footer>
            {/*<About />
            <Projects />
            <Skills />
            <Contact />
            <Footer /> */}
        </div>
    );
}

// Exporta el componente App
export default App;
