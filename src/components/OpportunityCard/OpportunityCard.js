import React, { Component } from 'react';
import { cleanDate } from '../../utilities/Utils';


export default class OpportunityCard extends Component {
  truncate = (str, num_words) => {
    return str.split(' ').splice(0, num_words).join(' ');
  }

  descriptionText = (descriptionHtml) => {
    var justText = document.createElement('div');
    justText.innerHTML = descriptionHtml;
    return this.truncate(justText.textContent, 35) || this.truncate(justText.innerText, 35);
  }

  render() {
    const { opportunity_id, title, description, posted, name, address, city, state, zipcode } = this.props.opportunity
    return (
      <>
        <a href={`/opportunity/${opportunity_id}`} className='oppCardLink'>
          <h3 className='opportunityTitle'>{title}</h3>
          <p className='orgTitle'>{name}</p>
          <p className='orgInfo'>{address}</p>
          <p className='orgInfo'>{city}, {state} {zipcode}</p>
          <p className='opportunityDescription'><b>JOB DESCRIPTION: </b> {this.descriptionText(description)}...  <span className='moreLink'>More ></span></p>
          <p className='opportunityPosted'><b>POSTED ON: </b>{cleanDate(posted)}</p>
        </a>
      </>
    );
  }
}