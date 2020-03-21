import React, { Component } from 'react'
import STORE from '../STORE'

const QualinteerContext = React.createContext({
  jobs: [],
  error: null,
  userType: '',
  setError: () => { },
  clearError: () => { },
  addJob: () => { },
  setJobs: () => { },
  setUser: () => { },
})

export default QualinteerContext

export class QualinteerProvider extends Component {
  state = {
    jobs: STORE.jobs,
    error: null,
    userType: 'company'
  };

  setError = error => {
    console.error(error)
    this.setState({ error })
  }

  clearError = () => {
    this.setState({ error: null })
  }

  addJob = job => {
    this.setJobs([
      ...this.state.jobs,
      job
    ])
  }

  setJobs = jobs => {
    this.setState({
      jobs
    })
  }

  setUser = userType => {
    this.setState({
      userType
    })
  }

  render() {
    const value = {
      jobs: this.state.jobs,
      error: this.state.error,
      userType: this.state.userType,
      setError: this.setError,
      clearError: this.clearError,
      addJob: this.addJob,
      setJobs: this.setJobs,
      setUser: this.setUser
    }
    return (
      <QualinteerContext.Provider value={value}>
        {this.props.children}
      </QualinteerContext.Provider>
    )
  }
}
