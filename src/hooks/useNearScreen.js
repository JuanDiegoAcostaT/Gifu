import { useState, useEffect, useRef } from 'react'

const useNearScreen = ({ distance, externalRef, once = true }) => {
    const [isNearScreen, setShow] = useState(false);
    const fromRef = useRef();
  
    useEffect(function () {
      let observer;

      const element = externalRef ? externalRef.current : fromRef.current

      const onChange = (entries) => {
        const el = entries[0];
        if (el.isIntersecting) {
          setShow(true);
          once && observer && observer.disconnect();  
        } else {
          !once && setShow(false)
        }
      };

      //Este promise.resolve es para detectar el soporte de los navegadores con IntersectionObserver
      Promise.resolve(
        typeof IntersectionObserver != "undefined"
          ? IntersectionObserver
          : import("intersection-observer")
      ).then(() => {
        const observer = new IntersectionObserver(onChange, {
          rootMargin: distance,
        });
  
        if(element) return observer.observe(element);
      });
  
      return () => observer && observer.disconnect();
    });
  
    return { isNearScreen, fromRef };
  };

  export default useNearScreen