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
    this.setState({ error: null })
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
        <header role="banner" className="checkpointBanner detailsBanner">
          <h1 className='pageHeader detailsHeader'>Opportunity Details.</h1>
          <img src='/assets/board-rocket.svg' alt='people working on a spaceship' className='detailsImage' />
          <p className='pageInstructions'>Click <br />volunteer to send a <br />message to the organization.</p>
        </header>
        <div role='alert'>
          {error && <p className='apiError'>Server Error: {error}</p>}
        </div>
        <OpportunityDetails history={this.props.history} />
      </div>
    );
  }
}
