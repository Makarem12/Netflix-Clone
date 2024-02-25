import React from 'react';
import Movie from './Movie';
import Row from 'react-bootstrap/Row';

function MovieList({ moviesArr}) {
  return (
    <div>
      <Row xs={1} md={4} className="g-4">
        {moviesArr.map((movie) => (
          <Movie key={movie.id} movie={movie} />

        ))}
      </Row>
    </div>
  );
}

export default MovieList;
