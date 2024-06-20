function ListOfMovies({ movies }) {
  return (
    <ul className="movies">
      {movies.map((movie) => (
        <li className="movie" key={movie.id}>
          <h3>{movie.title}</h3>
          <p>{movie.year}</p>
          <img src={movie.poster} alt={movie.title} />
        </li>
      ))}
    </ul>
  );
}

function NoMoviesResult({error}) {
  return <p>{error}</p>;
}

export function Movies({ movies }) {
  if (Array.isArray(movies)) return <ListOfMovies movies={movies} />;
  if (movies !== null) return <NoMoviesResult error={movies}/>
}
