import { useEffect, useState } from 'react';

const useBrowserWidth = (): number => {
  // State to hold the window width
  const [windowWidth, setWindowWidth] = useState<number>(window.innerWidth);

  // Event handler to update window width on resize
  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };

  // Effect to add and remove window resize event listener
  useEffect(() => {
    // Set initial window width
    setWindowWidth(window.innerWidth);

    // Add event listener on component mount
    window.addEventListener('resize', handleResize);

    // Remove event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []); // Empty dependency array means this effect runs once on mount

  // Return the current window width
  return windowWidth;
};

export default useBrowserWidth;
