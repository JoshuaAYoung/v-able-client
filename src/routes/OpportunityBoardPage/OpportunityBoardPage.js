import React, { Component } from 'react';
import OpportunityCard from '../../components/OpportunityCard/OpportunityCard'
import OppApiService from '../../services/opp-api-service'
import QualinteerContext from '../../context/QualinteerContext'
import './OpportunityBoardPage.css'
import ErrorBoundary from '../../ErrorBoundary'

export default class OpportunityBoardPage extends Component {
  static contextType = QualinteerContext;

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
    this.noOppsError()
  }

  getOpportunities = (searchTerm) => {
    OppApiService.getOpps(searchTerm)
      .then(this.setState({ error: null }))
      .then(
        this.context.setOppsBoard)
      .then(this.noOppsError())
      .catch(res => {
        this.setState({ error: res.error })
      })
  }

  componentDidMount() {
    this.getOpportunities()
  }

  noOppsError() {
    console.log('inside nooppserror', this.context.opportunities.length)
    if (this.context.opportunities.length === 0) {
      this.setState({ error: 'No opportunities could be found.' })
    }
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
        )
        }
      </ul>
    )
  }

  render() {
    const { error } = this.state
    return (
      <div className='boardContainer'>
        <h2 className='pageHeader'>Opportunity Board</h2>
        <form className='searchForm' onSubmit={this.handleSubmit}>
          <input
            placeholder='Search by keyword or location'
            type='text'
            name='oppSearch'
            id='oppSearch'
            className='oppSearch'
            onChange={ev => this.addTempSearch(ev.target.value)}
          />
          <button
            type='submit'
            className='searchButton'>
            Search
          </button>
        </form>
        <br />
        <div role='alert'>
          {error && <p className='apiError'>Error: {error}</p>}
        </div>
        {this.renderOpportunities()}
      </div >
    );
  }
}
