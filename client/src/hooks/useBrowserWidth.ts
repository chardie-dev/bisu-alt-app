import { useState, useEffect } from 'react';

const useBrowserWidth = (): number => {
  const [windowWidth, setWindowWidth] = useState<number>(window.innerWidth);

  const handleWindowResize = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener('resize', handleWindowResize);

    // Cleanup the event listener on unmount
    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []); // Empty dependency array ensures this effect runs only once

  return windowWidth;
};

export default useBrowserWidth;
