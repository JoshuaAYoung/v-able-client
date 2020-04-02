import React, { Component } from 'react';
import { cleanDate, LinkName } from '../../utilities/Utils';
import VolunteerButton from '../VolunteerButton/VolunteerButton'


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
    const { opportunity_id, title, description, contact, posted, name, address, city, state, zipcode, website } = this.props.opportunity
    return (
      <>
        <a href={`/opportunity/${opportunity_id}`} className='oppCardLink'>
          <h3 className='opportunityTitle'>{title}</h3>
          <p className='orgInfo'>{address}</p>
          <p className='orgInfo'>{city}, {state} {zipcode}</p>
          <p className='opportunityDescription'><b>JOB DESCRIPTION: </b> {this.descriptionText(description)}...  <span className='moreLink'>More ></span></p>
          {/* <p className='opportunityDescription'><b>JOB DESCRIPTION: </b> {this.truncate(description, 20)}...  <span className='moreLink'>More ></span></p> */}
          <p className='opportunityPosted'><b>POSTED ON: </b>{cleanDate(posted)}</p>
          <VolunteerButton
            title={title}
            contact={contact}
            name={name}
          />
        </a>
        <LinkName name={name} website={website} />
      </>
    );
  }
}