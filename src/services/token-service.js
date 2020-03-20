import config from '../config'

const TokenService = {
  //stores the token in localStorage, uses "qualinteer-client-auth-token" as key from config
  saveAuthToken(token) {
    window.localStorage.setItem(config.TOKEN_KEY, token)
  },
  getAuthToken() {
    return window.localStorage.getItem(config.TOKEN_KEY)
  },
  //removes authToken from localStorage
  clearAuthToken() {
    window.localStorage.removeItem(config.TOKEN_KEY)
  },
  //boolean check to see if localStorage has an auth token
  hasAuthToken() {
    return !!TokenService.getAuthToken()
  },
  //base64 encodes the composite username and password as authToken
  makeBasicAuthToken(userName, password) {
    return window.btoa(`${userName}:${password}`)
  },
}

export default TokenService
