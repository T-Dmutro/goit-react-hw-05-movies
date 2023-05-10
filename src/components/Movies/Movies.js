import React from "react";
import { useParams ,useSearchParams} from "react-router-dom";
function Movies ( ) {
    const [searchParams, setSeachParams] = useSearchParams();
 console.log(useSearchParams)
 const movieId = searchParams.get('movieId');

//  const visibleMovie = state.filter(state.name => state.name.includes(movieId) )

  return (

      <div><input type='text' value={movieId}  onChange={e => setSeachParams({movieId : e.target.value}) }/>MovieDetals</div>
  )
}


export default Movies;
