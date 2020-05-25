import React from 'react';
import { NavLink } from 'react-router-dom';
import './RegistrationCheckpoint.css';
import ScrollToTopOnMount from '../../utilities/ScrollToTopOnMount';

export default function RegistrationCheckpoint() {
  return (
    <div className="checkpointContainer">
      <ScrollToTopOnMount />
      <div className="checkpointBanner">
        <h1 className="pageHeader">Choose your Path.</h1>
        <p className="pageInstructions">
          Registration only takes a minute.
          <br />
          Click on the option that applies to you.
        </p>
      </div>
      <div className="userTypeContainer">
        <div className="userLinkContainer">
          <NavLink className="userTypeLink" to="/register/organization">
            Find Help
            <img
              src="/assets/checkpoint-arrow.svg"
              alt="arrow"
              className="checkpointArrow"
            />
          </NavLink>
        </div>
        <div className="userLinkContainer">
          <NavLink className="userTypeLink" to="/register/volunteer">
            Volunteer
            <img
              src="/assets/checkpoint-arrow.svg"
              alt="arrow"
              className="checkpointArrow"
            />
          </NavLink>
        </div>
      </div>
    </div>
  );
}
