import React, { Component } from 'react';
import { cleanDate } from '../../utilities/Utils';

export default class OpportunityCard extends Component {
  truncate = (str, num_words) => {
    return str.split(' ').splice(0, num_words).join(' ');
  };

  // Removes html tags from rich text and truncates the string to fit better in the card
  stripString = (descriptionHtml) => {
    let truncatedString = this.truncate(descriptionHtml, 12);
    return truncatedString.replace(/(<([^>]+)>)/gi, '');
  };

  render() {
    const {
      opportunity_id,
      title,
      description,
      posted,
      name,
      city,
      state,
      zipcode,
    } = this.props.opportunity;
    return (
      <>
        <a href={`/opportunity/${opportunity_id}`} className="oppCardLink">
          <h3 className="opportunityTitle">{title}</h3>
          <p>{name}</p>
          <p className="orgInfo">
            {city}, {state} {zipcode}
          </p>
          <p className="opportunityDescription">
            <span className="defaultMedium">Description: </span>{' '}
            {this.stripString(description)}...{' '}
            <span className="defaultMedium">More ></span>
          </p>
          <p className="opportunityPosted">
            <span className="defaultMedium">Posted </span>
            {cleanDate(posted)}
          </p>
        </a>
      </>
    );
  }
}
