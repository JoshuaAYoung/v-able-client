import React, { Component } from 'react';
import OpportunityDetails from '../../components/OpportunityDetails/OpportunityDetails'
import OppApiService from '../../services/opp-api-service'
import VableContext from '../../context/VableContext'
import './OpportunityDetailsPage.css'
import ErrorToast from '../../components/ErrorToast/ErrorToast'

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
        <header role="banner" className="detailsBanner detailsBanner">
          <h1 className='pageHeader detailsHeader'>Opportunity Details.</h1>
          <img src='/assets/board-rocket.svg' alt='people working on a spaceship' className='detailsImage' />
          <p className='pageInstructions detailsInstructions'>Login as a volunteer  user to apply.</p>
        </header>
        {error && <ErrorToast errorMessage={error} />}
        <OpportunityDetails history={this.props.history} />
      </div>
    );
  }
}
