import React, { Component } from 'react';
import OpportunityCard from '../../components/OpportunityCard/OpportunityCard'
import OppApiService from '../../services/opp-api-service'
import VableContext from '../../context/VableContext'
import './OpportunityBoardPage.css'
import ErrorBoundary from '../../ErrorBoundary'

export default class OpportunityBoardPage extends Component {
  static contextType = VableContext;

  state = {
    error: null,
    tempSearchValue: ''
  }

  addTempSearch = (tempSearchValue) => {
    this.setState({
      tempSearchValue
    })
  }

  handleSubmit = ev => {
    ev.preventDefault()
    this.getOpportunities(this.state.tempSearchValue)
  }

  getOpportunities = (searchTerm) => {
    OppApiService.getOpps(searchTerm)
      .then(this.setState({ error: null }))
      .then(data => {
        if (data.length === 0) {
          this.setState({ error: 'No opportunities could be found.' })
        }
        this.context.setOppsBoard(data)
      })
      .catch(res => {
        this.setState({ error: res.error })
      })
  }

  componentDidMount() {
    this.getOpportunities()
  }


  renderOpportunities() {
    return (
      <ul className='oppList'>
        {this.context.opportunities.map(opportunity =>
          <li key={opportunity.opportunity_id} className='opportunityCard'>
            <ErrorBoundary>
              <OpportunityCard
                opportunity={opportunity}
                history={this.props.history}
              />
            </ErrorBoundary>
          </li>
        )}
      </ul>
    )
  }

  render() {
    const { error } = this.state
    return (
      <div className='boardContainer'>
        <header role="banner" className="checkpointBanner oppBoardBanner">
          <h1 className='pageHeader textCenter'>Opportunity Board.</h1>
          <form className='searchForm' onSubmit={this.handleSubmit}>
            <input
              placeholder='Keyword or Location...'
              type='text'
              name='oppSearch'
              id='oppSearch'
              className='oppSearch'
              onChange={ev => this.addTempSearch(ev.target.value)}
            />
            <button
              type='submit'
              className='searchButton'>
            </button>
          </form>
        </header>
        <p className='pageInstructions'>Click an opportunity to see more details or enter a search above.</p>
        <div role='alert'>
          {error && <p className='apiError'>Error: {error}</p>}
        </div>
        {this.renderOpportunities()}
      </div >
    );
  }
}
