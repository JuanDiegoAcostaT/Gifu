import { useState, useEffect } from 'react'
import getGifs from '../services/getGifs'

const INITIAL_PAGE = 0

export  function useGifs({ keyword , rating, lang } = { keyword : null }) {
    const [gifs, setGifs] = useState([]);
    const [page, setPage] = useState(INITIAL_PAGE)
    const [loading, setLoading] = useState(false)
    const [loadingNextPage, setLoadingNextPage] = useState(false)

    const keywordToUse = keyword || localStorage.getItem('lastKeyword') || 'trending'

  
    useEffect(() => {
      setLoading(true)
      getGifs({ keyword : keywordToUse, rating, lang }).then((gifs) => {
         setGifs(gifs)
          setLoading(false)
          if(keyword) {
            localStorage.setItem('lastKeyword', keyword, rating, lang)
          }
      });
    }, [keyword, keywordToUse, setGifs]);


    useEffect(() => {
      if(page == INITIAL_PAGE) return 

      setLoadingNextPage(true)

      getGifs( { keyword : keywordToUse, page, rating, lang } )
      .then(nextGifs => {
        setGifs(prevGifs => prevGifs.concat(nextGifs))
        setLoadingNextPage(false)
      })
    }, [page])
  
    return { loading, loadingNextPage, gifs, setPage }
}
