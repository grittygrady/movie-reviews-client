import { useEffect, useState } from 'react';

// This is a custom hook used throughout the application to fetch data based on an environmental variable. 
// Its' default behavior is to 'GET' but it can be modified for other methods.

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null)

  useEffect(() => {
    fetch(url)
      .then(res => {
        if (!res.ok) {
          throw Error('Could not fetch reviews');
        }
        return res.json();
      })
      .then((data) => {
        setData(data);
        setIsLoading(false);
        setError(null)
      })
      .catch(err => {
        setError(err.message);
        setIsLoading(false);
      })
  }, [url])

  return { data, isLoading, error }
}

export default useFetch;