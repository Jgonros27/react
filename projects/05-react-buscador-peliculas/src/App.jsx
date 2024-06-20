import "./App.css";
import { useMovies } from "./hooks/useMovies";
import { Movies } from "./Components/Movies";
import { useSearch } from "./hooks/useSearch";
import {  useCallback, useState } from "react";
import debounce from 'just-debounce-it'


function App() {
  const { search, updateSearch, error } = useSearch()
  const [sort , setSort] = useState(false)
  const { movies, getMovies,loading } = useMovies({search, sort})
  

  const handleSort = () => {
    setSort(!sort)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    if (error === null) {
      getMovies({search})
    }
  }

  const debouncedGetMovies = useCallback(debounce((search) => {
    getMovies({search})
  },300),[getMovies])

  const handleChange = (event) => {
    const newSearch = event.target.value
    if (newSearch.startsWith(' ')) return
    updateSearch(newSearch)
    if (error === null) {
      debouncedGetMovies(newSearch)
    }
    
  }

  

  return (
    <div className="page">
      <header>
        <h1>Buscador de peliculas</h1>
        <form className="form" onSubmit={handleSubmit}>
          <input style={{
            border:'1px solid transparent',
            borderColor: error ? 'red' : 'transparent'
          }} value={search} onChange={handleChange} name="search" placeholder="Avengers, Stars Wars, The Matrix..."></input>
          {
            Array.isArray(movies) ? <input type="checkbox" onChange={handleSort} checked={sort} /> : ""
          }
          
          <button type="submit">Buscar</button>
        </form>
        {error && <p style={{color:'red'}}>{error}</p>}
      </header>
      
      <main>
        {
          loading ? <p>Cargando</p> : <Movies movies={ movies }/> 
        }
      </main>
    </div>
  );
}

export default App;
