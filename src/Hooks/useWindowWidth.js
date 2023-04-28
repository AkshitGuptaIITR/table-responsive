import { useEffect, useState } from "react";

function useWindowWidth() {
  const [windowWidth, setWindowWidth] = useState(undefined);
  useEffect(() => {
    function handleWidth() {
      setWindowWidth(window.innerWidth);
    }
    window.addEventListener("resize", handleWidth);
    handleWidth();
    return () => window.removeEventListener("resize", handleWidth);
  }, []);
  return windowWidth;
}

export default useWindowWidth;
