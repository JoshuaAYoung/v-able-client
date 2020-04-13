import React, { Component } from 'react';
import OpportunityPostForm from '../../components/OpportunityPostForm/OpportunityPostForm'
import './OpportunityPostPage.css'

export default class OpportunityPostPage extends Component {
  render() {
    return (
      <div className="opportunityPostContainer">
        <header role="banner" className="oppPostBanner">
          <h1 className='pageHeader'>Opportunity Post.</h1>
          <p className='pageInstructions'>Fields are optional unless noted otherwise.</p>
        </header>
        <OpportunityPostForm history={this.props.history} />
      </div>
    );
  }
}