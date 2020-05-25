import React from 'react';
import OpportunityPostForm from '../../components/OpportunityPostForm/OpportunityPostForm';
import './OpportunityPostPage.css';
import ScrollToTopOnMount from '../../utilities/ScrollToTopOnMount';

export default function OpportunityPostPage(props) {
  return (
    <div className="opportunityPostContainer">
      <ScrollToTopOnMount />
      <div className="oppPostBanner">
        <h1 className="pageHeader">Opportunity Post.</h1>
        <p className="pageInstructions">
          Fields are optional unless noted otherwise.
        </p>
      </div>
      <OpportunityPostForm history={props.history} />
    </div>
  );
}
