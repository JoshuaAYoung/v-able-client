import React, { Component } from 'react'

const VableContext = React.createContext({
  opportunities: [],
  opportunity: {},
  userType: '',
  user: {},
  addOpportunity: () => { },
  setOpportunity: () => { },
  clearOpportunity: () => { },
  setOppsBoard: () => { },
  setUserType: () => { },
  setUser: () => { },
  setDescription: () => { }
})

export default VableContext

export class VableProvider extends Component {
  state = {
    opportunities: [],
    opportunity: {},
    userType: localStorage.userType || '',
    user: {}
  };

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

  setDescription = description => {
    this.setState({
      user: {
        description
      }
    })
  }

  render() {
    const value = {
      opportunities: this.state.opportunities,
      opportunity: this.state.opportunity,
      userType: this.state.userType,
      user: this.state.user,
      addOpportunity: this.addOpportunity,
      setOpportunity: this.setOpportunity,
      clearOpportunity: this.clearOpportunity,
      setOppsBoard: this.setOppsBoard,
      setUserType: this.setUserType,
      setUser: this.setUser,
      setDescription: this.setUser
    }
    return (
      <VableContext.Provider value={value}>
        {this.props.children}
      </VableContext.Provider>
    )
  }
}
