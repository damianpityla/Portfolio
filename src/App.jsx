import React, { useState, useEffect, useRef} from 'react';

import Navbar from './components/Navbar';
import Mant from './components/Mant'
import Home from './components/Home';
import About from './components/About';
// import Projects from './components/Projects';
// import Skills from './components/Skills';
// import Contact from './components/Contact';
// import Footer from './components/Footer';

function App() {
    const[renderContent, setRenderContent] = useState(false);
    const handleScroll = () => {
      const section = document.getElementById('destino');
      if (section) {
        const rect = section.getBoundingClientRect();
        const isVisible = (rect.top >= 0 && rect.top < window.innerHeight) || (rect.bottom > 0 && rect.bottom <= window.innerHeight);
    
        setRenderContent(isVisible);
      }
    };
    
    useEffect(() => {
      handleScroll();
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div>
            <Navbar />
            <Home />
            <About />
            {/*<Projects />
            <Skills />
            <Contact />
            <Footer /> */}
            <footer id='destino' className="end mt-20 h-10"></footer>
            {renderContent && (<Mant/>)}
        </div>
    );
}

// Exporta el componente App
export default App;
