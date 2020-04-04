import React, { Component } from 'react';
import VableContext from '../../context/VableContext'
import { cleanDate, LinkName } from '../../utilities/Utils'
import VolunteerButton from '../VolunteerButton/VolunteerButton'

export default class OpportunityDetails extends Component {
  static contextType = VableContext;

  render() {
    const { title, description, contact, start_date, duration, commitment, ed_level, experience, license, remote, posted, name, address, city, state, zipcode, phone, website } = this.context.opportunity
    return (
      <>
        <h3 className='opportunityTitle'>{title}</h3>
        <LinkName name={name} website={website} />
        <p className='orgInfo'>{address}</p>
        <p className='orgInfo'>{city}, {state} {zipcode}</p>
        <p className='orgInfo'>{phone}</p>
        <VolunteerButton
          title={title}
          contact={contact}
          name={name}
          history={this.props.history}
        />
        <p className='opportunityInfo'><b>POSTED ON: </b>{cleanDate(posted)}</p>
        <p className='opportunityInfo'><b>START DATE: </b>{start_date}</p>
        <p className='opportunityInfo'><b>JOB DURATION: </b>{duration}</p>
        <p className='opportunityInfo'><b>JOB COMMITMENT (HRS/WK): </b>{commitment}</p>
        <p className='opportunityInfo'><b>EDUCATION LEVEL REQUESTED: </b>{ed_level}</p>
        {experience && <p className='opportunityInfo'><b>EXPERIENCE REQUESTED: </b>{experience}</p>}
        {license && <p className='opportunityInfo'><b>LICENSE REQUESTED: </b>{license}</p>}
        <p className='opportunityInfo'><b>OPTION TO VOLUNTEER REMOTELY: </b>{remote ? 'Yes' : 'No'} </p>
        <p className='opportunityDescription'><b>JOB DESCRIPTION: </b></p><div dangerouslySetInnerHTML={{ __html: description }} />
      </>
    );
  }
}