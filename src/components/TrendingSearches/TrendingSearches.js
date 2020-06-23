import React,  { useState, useEffect }  from 'react'
import Category from "../Category/Category";
import getTrending from "../../services/getTrending";

 function TrendingSearches() {
    const [trends, setTrends] = useState([]);
  
    useEffect(function () {
      getTrending()
        .then(setTrends);
    }, [getTrending]);

    /* Coloco el getTrending como variable que afectaria a el useEffect pero en este caso lo hago para que al hacer el infinite Scroll no se recarguen una y otre vez las tendencias que es data que ya tenemos */
  
    return <Category name="Trendings" options={trends} />;
  }
  
  export default React.memo(TrendingSearches)