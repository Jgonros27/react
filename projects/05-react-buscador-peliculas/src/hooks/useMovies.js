import { useCallback, useMemo, useRef, useState } from 'react'
import { searchMovies } from '../services/movies';

export function useMovies({ search , sort}) {

  const [movies, setMovies] = useState(null);
  const [loading, setLoading] = useState(false);
  const previousSearch = useRef(search);

  const getMovies =useCallback( async ({search}) => {
      if (search === previousSearch.current) return
      try {
        setLoading(true)
        const newMovies = await searchMovies({ search })
        previousSearch.current = search
        setMovies(newMovies)
      } catch (e) {
        console.log(e.message)
      } finally {
        setLoading(false)
      }
    
  }, [])
   

  const sortedMovies = useMemo(() => {
    return sort ? [...movies].sort((a,b) => a.title.localeCompare(b.title)) : movies
  },[sort,movies])

  

  return { movies: sortedMovies, getMovies, loading  }

}