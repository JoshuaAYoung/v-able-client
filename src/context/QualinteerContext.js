import React, { Component } from 'react'

const QualinteerContext = React.createContext({
  opportunities: [],
  opportunity: {},
  error: null,
  userType: '',
  user: {},
  setError: () => { },
  clearError: () => { },
  addOpportunity: () => { },
  setOpportunity: () => { },
  clearOpportunity: () => { },
  setOppsBoard: () => { },
  setUserType: () => { },
  setUser: () => { }
})

export default QualinteerContext

export class QualinteerProvider extends Component {
  state = {
    opportunities: [],
    opportunity: {},
    error: null,
    userType: localStorage.userType || '',
    user: {}
  };

  setError = error => {
    console.error(error)
    this.setState({ error })
  }

  clearError = () => {
    this.setState({ error: null })
  }

  addOpportunity = opportunity => {
    this.setOppsBoard([
      ...this.state.opportunities,
      opportunity
    ])
  }

  setOpportunity = opportunity => {
    this.setState({ opportunity })
  }

  clearOpportunity = () => {
    this.setOpportunity([])
  }

  setOppsBoard = opportunities => {
    this.setState({
      opportunities
    })
  }

  setUserType = userType => {
    this.setState({
      userType
    })
  }

  setUser = user => {
    this.setState({
      user
    })
  }

  render() {
    const value = {
      opportunities: this.state.opportunities,
      opportunity: this.state.opportunity,
      error: this.state.error,
      userType: this.state.userType,
      user: this.state.user,
      setError: this.setError,
      clearError: this.clearError,
      addOpportunity: this.addOpportunity,
      setOpportunity: this.setOpportunity,
      clearOpportunity: this.clearOpportunity,
      setOppsBoard: this.setOppsBoard,
      setUserType: this.setUserType,
      setUser: this.setUser
    }
    return (
      <QualinteerContext.Provider value={value}>
        {this.props.children}
      </QualinteerContext.Provider>
    )
  }
}
