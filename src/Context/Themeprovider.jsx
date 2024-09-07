import React, { createContext, useState, useEffect } from 'react';

export const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  const [stepColors, setStepColors] = useState({
    step1: { bg: 'bg-white', border: 'border-white', numberBg: 'bg-white' },
    step2: { bg: 'bg-white', border: 'border-white', numberBg: 'bg-white' },
    step3: { bg: 'bg-white', border: 'border-white', numberBg: 'bg-white' },
    step4: { bg: 'bg-white', border: 'border-white', numberBg: 'bg-white' },
  });

  const handleScroll = () => {
    const scrollY = window.scrollY;
  
    const newColors = {
      step1: {
        bg: scrollY > 4200 ? 'bg-[#7AC590]' : 'bg-white',
        border: scrollY > 4200 ? 'border-[#7AC590]' : 'border-white',
        numberBg: scrollY > 4200 ? 'bg-[#7AC590]' : 'bg-white',
      },
      step2: {
        bg: scrollY > 4320 ? 'bg-[#7AC590]' : 'bg-white',
        border: scrollY > 4320 ? 'border-[#7AC590]' : 'border-white',
        numberBg: scrollY > 4320 ? 'bg-[#7AC590]' : 'bg-white',
      },
      step3: {
        bg: scrollY > 4480 ? 'bg-[#7AC590]' : 'bg-white',
        border: scrollY > 4480 ? 'border-[#7AC590]' : 'border-white',
        numberBg: scrollY > 4480 ? 'bg-[#7AC590]' : 'bg-white',
      },  
      step4: {
        bg: scrollY > 4620 ? 'bg-[#7AC590]' : 'bg-white',
        border: scrollY > 4620 ? 'border-[#7AC590]' : 'border-white',
        numberBg: scrollY > 4620 ? 'bg-[#7AC590]' : 'bg-white',
      },
    };
  
    console.log('Scroll Y:', scrollY)
  
    setStepColors(newColors);
  };
  

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <ThemeContext.Provider value={{ stepColors }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
