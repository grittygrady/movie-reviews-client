const inDev = process.env.NODE_ENV === 'development'
// export default {
//   API_ENDPOINT: 
//   inDev ? 'http://localhost:8000' : 
//   'https://thawing-sierra-58826.herokuapp.com'
// }

const config = { API_ENDPOINT: inDev ? 'http://localhost:8000' : 'https://thawing-sierra-58826.herokuapp.com' };

export default config;
