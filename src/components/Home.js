import React from 'react';
import useFetch from '../hooks/useFetch';
import ReviewList from './ReviewList';
import config from '../config';

const Home = () => {
  const { data: reviews, isLoading, error } = useFetch(`${config.API_ENDPOINT}/reviews`)

  return ( 
    <div className="home">
      {error && <><h2>Could not get reviews. Please try again.</h2></>}
      {isLoading && <><h2>Loading...</h2></>}
      {reviews && <ReviewList reviews={reviews} title='All Reviews' />}
    </div>
  );
}

export default Home;