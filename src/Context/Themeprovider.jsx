import React, { createContext, useState, useEffect } from 'react';

export const ThemeContext = createContext();

const thresholds = [4200, 4320, 4480, 4620, 4775, 4875, 5010, 5110]; // Define thresholds here
const numSteps = thresholds.length; // Number of steps based on thresholds

const ThemeProvider = ({ children }) => {
  const [stepColors, setStepColors] = useState(() => {
    // Initialize stepColors dynamically based on the number of steps
    const initialColors = {};
    for (let i = 1; i <= numSteps; i++) {
      initialColors[`step${i}`] = {
        bg: 'bg-white',
        border: 'border-white',
        numberBg: 'bg-white'
      };
    }
    return initialColors;
  });

  const handleScroll = () => {
    const scrollY = window.scrollY;

    const newColors = {};
    for (let i = 0; i < numSteps; i++) {
      newColors[`step${i + 1}`] = {
        bg: scrollY > thresholds[i] ? 'bg-[#7AC590]' : 'bg-white',
        border: scrollY > thresholds[i] ? 'border-[#7AC590]' : 'border-white',
        numberBg: scrollY > thresholds[i] ? 'bg-[#7AC590]' : 'bg-white',
      };
    }

    console.log('Scroll Y:', scrollY);

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
