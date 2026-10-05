import Movies from '../components/Movies.jsx'

export default function Read() {
  // Exercise 1, Task 2: keep the supplied movie JSON in the Read component.
  const movieData = [
    {
      Title: 'Avengers: Infinity War',
      Year: '2018',
      imdbID: 'tt4154756',
      Type: 'movie',
      Poster: 'https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg',
    },
    {
      Title: 'Captain America: Civil War',
      Year: '2016',
      imdbID: 'tt3498820',
      Type: 'movie',
      Poster: 'https://m.media-amazon.com/images/M/MV5BMjQ0MTgyNjAxMV5BMl5BanBnXkFtZTgwNjUzMDkyODE@._V1_SX300.jpg',
    },
    {
      Title: 'World War Z',
      Year: '2013',
      imdbID: 'tt0816711',
      Type: 'movie',
      Poster: 'https://m.media-amazon.com/images/M/MV5BNDQ4YzFmNzktMmM5ZC00MDZjLTk1OTktNDE2ODE4YjM2MjJjXkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_SX300.jpg',
    },
  ]

  return (
    <section className="read-page w-100" aria-labelledby="read-title">
      <div className="read-intro mb-4">
        <p className="eyebrow">Exercise 1 · Props and data</p>
        <h1 id="read-title">Read Movies</h1>
        <h3>Hello from the Read component</h3>
        <p className="support-copy">The movie data is passed to Movies, then to a reusable MovieItem for display.</p>
      </div>
      <Movies myMovies={movieData} />
    </section>
  )
}
