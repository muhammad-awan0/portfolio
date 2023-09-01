import { useEffect, useState, useRef } from "react";
import { motion, useAnimation } from "framer-motion";

interface ScrollFadeInProps {
  children: React.ReactNode;
}

const ScrollFadeIn = ({ children }:ScrollFadeInProps) => {
  const controls = useAnimation();
  const [elementTop, setElementTop] = useState(0);
  const [hasFadedIn, setHasFadedIn] = useState(false);
  const elementRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const onScroll = () => {
      if (elementRef.current && !hasFadedIn) {
        const scrollPosition = window.scrollY + window.innerHeight;
        if (scrollPosition > elementTop) {
          controls.start({ opacity: 1 });
          setHasFadedIn(true); 
        }
      }
    };

    if (elementRef.current) {
      setElementTop(elementRef.current.getBoundingClientRect().top + window.scrollY);
    }

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [controls, elementTop, hasFadedIn]);

  return (
    <motion.div
      ref={elementRef}
      initial={{ opacity: 0, y: 50}}
      animate={controls}
      transition={{ duration: 1 }}
    >
      {children}
    </motion.div>
  );
};

export default ScrollFadeIn;
