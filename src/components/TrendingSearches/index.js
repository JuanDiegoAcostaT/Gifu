import React, { Suspense } from "react";
import "../../services/getTrending";
import useNearScreen from '../../hooks/useNearScreen'


const TrendingSearches = React.lazy (
  () => import ('./TrendingSearches')
)

export default function LazyTrending() {
  const { isNearScreen, fromRef } = useNearScreen({ distance : '100px' });

  return <div ref={fromRef}>
    <Suspense fallback={'Loading.....'} >
      {isNearScreen ? <TrendingSearches /> : null}
    </Suspense>
    </div>;
}
