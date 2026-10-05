import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import MovieItem from './MovieItem.jsx'

export default function Movies({ myMovies }) {
  // Exercise 1, Task 3: map each movie to a MovieItem and use imdbID as its stable React key.
  return (
    <Row xs={1} md={2} lg={3} className="g-4" aria-label="Movie list">
      {myMovies.map((movie) => (
        <Col key={movie.imdbID}>
          <MovieItem mymovie={movie} />
        </Col>
      ))}
    </Row>
  )
}
