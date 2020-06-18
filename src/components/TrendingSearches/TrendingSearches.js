import React,  { useState, useEffect, useRef }  from 'react'
import Category from "../Category/Category";
import getTrending from "../../services/getTrending";

export default function TrendingSearches() {
    const [trends, setTrends] = useState([]);
  
    useEffect(function () {
      getTrending().then(setTrends);
    }, []);
  
    return <Category name="Tendencias" options={trends} />;
  }
  