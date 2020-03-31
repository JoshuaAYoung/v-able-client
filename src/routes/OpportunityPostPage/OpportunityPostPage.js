import React, { Component } from 'react';
import OpportunityPostForm from '../../components/OpportunityPostForm/OpportunityPostForm'
import './OpportunityPostPage.css'
export default class OpportunityPostPage extends Component {

  render() {
    return (
      <div className="opportunityPostContainer">
        <h2 className='pageHeader'>Post A Volunteer Opportunity</h2>
        <OpportunityPostForm history={this.props.history} />
      </div>
    );
  }
}