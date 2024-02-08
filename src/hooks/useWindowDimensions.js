import { useState, useEffect } from "react";

export default function useWindowDimensions() {
  function getWindowDimensions() {
    const { innerWidth: width, innerHeight: height } = window;
    const altoVisible = height || document.documentElement.clientHeight;
    return { width, height, altoVisible };
  }

  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions);

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener("resize", handleResize);
    
 
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowDimensions;
}