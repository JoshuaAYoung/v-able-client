export default {
  // API_ENDPOINT: 'http://localhost:8000/api',
  API_ENDPOINT: process.env.REACT_APP_API_ENDPOINT || 'http://localhost:8000/api',
  TOKEN_KEY: 'qualinteer-client-auth-token'
}
