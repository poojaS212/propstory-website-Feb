import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const useReveal = (ref) => {
  useEffect(() => {
    if (!ref.current) return;

    const animation = gsap.fromTo(
      ref.current,
      {
        opacity: 0,
        y: 80,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ref.current,
          start: "top 80%",
        },
      }
    );

    return () => {
      animation.kill();
    };
  }, [ref]);
};

export default useReveal;
