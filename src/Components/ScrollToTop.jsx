import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    // If URL has hash (#contact), don't scroll to top
    if (hash) return;

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [pathname, hash]);

  return null;
};

export default ScrollToTop;