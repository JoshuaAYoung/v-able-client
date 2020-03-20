import TokenService from './token-service'
import config from '../config'

const JobApiService = {
  getJobs() {
    //does this still apply in production? config.API_ENDPOINT is local
    return fetch(`${config.API_ENDPOINT}/jobs`, {
      headers: {
      },
    })
      .then(res =>
        //if result is falsy, then return a promise object that's rejected with a given reason
        (!res.ok)
          ? res.json().then(error => Promise.reject(error))
          : res.json()
      )
  },

  //in case I implement detailed job view
  getJob(jobId) {
    return fetch(`${config.API_ENDPOINT}/jobs/${jobId}`, {
      headers: {
        'authorization': `bearer ${TokenService.getAuthToken()}`,
      },
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(error => Promise.reject(error))
          : res.json()
      )
  },
  //This api service needs some serious work considering how many fields we'll have! How to pass in data? Format the body object as a variable?
  postJob(jobData) {
    return fetch(`${config.API_ENDPOINT}/jobs`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'authorization': `bearer ${TokenService.getAuthToken()}`,
      },
      body: JSON.stringify({
        jobData
      }),
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(error => Promise.reject(error))
          : res.json()
      )
  }
}

export default JobApiService
