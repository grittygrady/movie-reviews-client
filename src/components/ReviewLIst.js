import React from 'react';

const ReviewList = (props) => {
  const { movies, title } = props;

  return ( 
    <div className="movie-list">
      <h2>{title}</h2>
      {movies.map((movie) => (
        <div className="movie-preview" key={movie.id}>
          <h2>{movie.title}</h2>
          <p>Written by: {movie.author}</p>
          <p>Score: {movie.rating}</p>
        </div>
      ))}
    </div>
  );
}

export default ReviewList;