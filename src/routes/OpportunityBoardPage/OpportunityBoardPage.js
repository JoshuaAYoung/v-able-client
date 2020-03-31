import React, { Component } from 'react';
import Opportunity from '../../components/Opportunity/Opportunity'
import OppApiService from '../../services/opp-api-service'
import QualinteerContext from '../../context/QualinteerContext'
import './OpportunityBoardPage.css'
import ErrorBoundary from '../../ErrorBoundary'

export default class OpportunityBoardPage extends Component {
  static contextType = QualinteerContext;

  state = { error: null }

  componentDidMount() {
    this.context.clearError()
    OppApiService.getOpps()
      .then(this.context.setOppsBoard)
      .catch(res => {
        this.setState({ error: res.error })
      })
  }

  renderOpportunities() {
    return (
      <ul >
        {this.context.opportunities.map(opportunity =>
          <li key={opportunity.opportunity_id} className='opportunityCard'>
            <ErrorBoundary>
              <Opportunity
                opportunity_id={opportunity.opportunity_id}
                title={opportunity.title}
                description={opportunity.description}
                contact={opportunity.contact}
                posted={opportunity.posted}
                name={opportunity.name}
                address={opportunity.address}
                city={opportunity.city}
                state={opportunity.state}
                zipcode={opportunity.zipcode}
                website={opportunity.website}
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
        <p className='instructions'>Click on an opportunity to see more details</p>
        <div role='alert'>
          {error && <p className='apiError'>Server Error: {error}</p>}
        </div>
        {this.renderOpportunities()}
      </div>
    );
  }
}
