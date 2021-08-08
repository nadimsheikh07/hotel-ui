import { useState, useEffect } from 'react';

function getWindowDimensions() {
  console.warn('process.browser', process.browser)
  if (process.browser) {
    console.warn('window', window)
    const { innerWidth, innerHeight } = window;
    return {
      width: innerWidth,
      height: innerHeight
    };
  } else {
    return {
      width: 1440,
      height: 700
    };
  }
}

export default function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowDimensions;
}