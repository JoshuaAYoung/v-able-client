import React, { Component } from 'react';
import OpportunityDetails from '../../components/OpportunityDetails/OpportunityDetails'
import OppApiService from '../../services/opp-api-service'
import VableContext from '../../context/VableContext'
import './OpportunityDetailsPage.css'

export default class OpportunityBoardPage extends Component {
  static contextType = VableContext;

  state = { error: null }

  componentDidMount() {
    const { oppId } = this.props.match.params
    this.context.clearError()
    OppApiService.getOppById(oppId)
      .then(this.context.setOpportunity)
      .catch(res => {
        this.setState({ error: res.error })
      })
  }

  render() {
    const { error } = this.state
    return (
      <div className='opportunityDetails'>
        <h2 className='pageHeader'>Opportunity Details</h2>
        <div role='alert'>
          {error && <p className='apiError'>Server Error: {error}</p>}
        </div>
        <OpportunityDetails />
      </div>
    );
  }
}
