import React, { Component } from 'react';
import { cleanDate, LinkName } from '../../utilities/Utils';
import VolunteerButton from '../VolunteerButton/VolunteerButton'


export default class Opportunity extends Component {
  truncate = (str, num_words) => {
    return str.split(' ').splice(0, num_words).join(' ');
  }

  render() {
    const { opportunity_id, title, description, contact, posted, name, address, city, state, zipcode, website } = this.props
    return (
      <>
        <button type='button' onClick={ev => this.props.history.push(`/opportunity/${opportunity_id}`)} className='opportunityLink'>
          <div className='opportunityContainer'>
            <h3 className='opportunityTitle'>{title}</h3>
            <LinkName name={name} website={website} />
            <p className='orgInfo'>{address}</p>
            <p className='orgInfo'>{city}, {state} {zipcode}</p>
            <p className='opportunityDescription'><b>JOB DESCRIPTION: </b> {this.truncate(description, 20)}...  <span className='moreLink'>More ></span></p>
            <p className='opportunityPosted'><b>POSTED ON: </b>{cleanDate(posted)}</p>
            <VolunteerButton
              title={title}
              contact={contact}
              name={name}
            />
          </div>
        </button>
      </>
    );
  }
}