import React from 'react';
import useFetch from '../hooks/useFetch';
import ReviewList from './ReviewLIst';



const Home = () => {
  const { data: movies, isLoading, error } = useFetch('http://localhost:8000/movies')

  return ( 
    <div className="home">
      {error && <><h2>Could not get reviews. Please try again.</h2></>}
      {isLoading && <><h2>Loading...</h2></>}
      {movies && <ReviewList movies={movies} title='All Reviews' />}
    </div>
  );
}

export default Home;