import { useState, useEffect, useRef } from 'react'

const useNearScreen = () => {
    const [isNearScreen, setShow] = useState(false);
    const fromRef = useRef();
  
    useEffect(function () {
      let observer;
      const onChange = (entries) => {
        const el = entries[0];
        if (el.isIntersecting == true) {
          setShow(true);
          observer && observer.disconnect();
        }
      };
  
      //Este promise.resolve es para detectar el soporte de los navegadores con IntersectionObserver
      Promise.resolve(
        typeof IntersectionObserver != "undefined"
          ? IntersectionObserver
          : import("intersection-observer")
      ).then(() => {
        const observer = new IntersectionObserver(onChange, {
          rootMargin: '10px',
        });
  
        observer.observe(fromRef.current);
      });
  
      return () => observer && observer.disconnect();
    });
  
    return { isNearScreen, fromRef };
  };

  export default useNearScreen