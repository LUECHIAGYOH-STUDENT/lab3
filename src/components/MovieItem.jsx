import { useEffect } from 'react'
import Card from 'react-bootstrap/Card'

export default function MovieItem({ mymovie }) {
  // Exercise 1, Task 3: log the movie prop when it mounts or changes, as a useEffect side effect.
  useEffect(() => {
    console.log('Movie Item:', mymovie)
  }, [mymovie])

  // Exercise 2: use a Bootstrap Card with the title header, poster body, and year footer.
  return (
    <Card className="movie-card h-100">
      <Card.Header>{mymovie.Title}</Card.Header>
      <Card.Body className="movie-card-body">
        <Card.Img
          className="movie-poster"
          variant="top"
          src={mymovie.Poster}
          alt={`Poster for ${mymovie.Title}`}
        />
      </Card.Body>
      <Card.Footer>{mymovie.Year}</Card.Footer>
    </Card>
  )
}
