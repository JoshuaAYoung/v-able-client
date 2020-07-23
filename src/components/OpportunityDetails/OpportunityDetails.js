import React, { Component } from 'react';
import VableContext from '../../context/VableContext';
import { cleanDate, LinkName } from '../../utilities/Utils';
import VolunteerButton from '../VolunteerButton/VolunteerButton';

export default class OpportunityDetails extends Component {
  static contextType = VableContext;

  render() {
    const {
      title,
      description,
      contact,
      start_date,
      duration,
      commitment,
      ed_level,
      experience,
      license,
      remote,
      posted,
      name,
      address,
      city,
      state,
      zipcode,
      phone,
      website,
    } = this.context.opportunity;
    return (
      <section className="detailsSection">
        <div className="detailsContainer">
          <h3 className="opportunityTitle detailsTitle">{title}</h3>
          <LinkName name={name} website={website} />
          <p className="orgAddress">{address}</p>
          <p className="orgLocation">
            {city}, {state} {zipcode}
          </p>
          <p className="orgInfo">{phone}</p>
          {/* Volunteer button renders differently depending on auth */}
          <VolunteerButton
            title={title}
            contact={contact}
            name={name}
            history={this.props.history}
          />
          <div className="oppInfoContainer">
            <p className="opportunityInfo">
              <span className="defaultMedium">Posted On: </span>
              {cleanDate(posted)}
            </p>
            <p className="opportunityInfo">
              <span className="defaultMedium">Start Date: </span>
              {start_date}
            </p>
            <p className="opportunityInfo">
              <span className="defaultMedium">Job Duration: </span>
              {duration}
            </p>
            <p className="opportunityInfo">
              <span className="defaultMedium">Job Commitment (hrs/wk): </span>
              {commitment}
            </p>
            <p className="opportunityInfo">
              <span className="defaultMedium">Education Level Requested: </span>
              {ed_level}
            </p>
            {experience && (
              <p className="opportunityInfo">
                <span className="defaultMedium">Experience Requested: </span>
                {experience}
              </p>
            )}
            {license && (
              <p className="opportunityInfo">
                <span className="defaultMedium">License Requested: </span>
                {license}
              </p>
            )}
            <p className="opportunityInfo">
              <span className="defaultMedium">
                Option to Volunteer Remotely:{' '}
              </span>
              {remote ? 'Yes' : 'No'}{' '}
            </p>
          </div>
          <p className="defaultMedium">Description:</p>
          <div className="opportunityDescription">
            <div dangerouslySetInnerHTML={{ __html: description }} />
          </div>
        </div>
      </section>
    );
  }
}
