import { useState, useEffect } from 'react'
import getGifs from '../services/getGifs'

export default function useGifs({ keyword } = {}) {
    const [gifs, setGifs] = useState([]);
    const [loading, setLoading] = useState(false)
  
    useEffect(() => {
      setLoading(true)

      const keywordToUse = keyword || localStorage.getItem('lastKeyword') || 'trending'

      getGifs({ keyword : keywordToUse }).then((gifs) => {
         setGifs(gifs)
          setLoading(false)
          if(keyword) {
            localStorage.setItem('lastKeyword', keyword)
          }
      });
    }, [keyword]);
  
    return { loading, gifs }
}
