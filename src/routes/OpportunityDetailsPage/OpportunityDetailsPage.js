import React, { Component } from 'react';
import OpportunityDetails from '../../components/OpportunityDetails/OpportunityDetails';
import OppApiService from '../../services/opp-api-service';
import VableContext from '../../context/VableContext';
import './OpportunityDetailsPage.css';
import ErrorToast from '../../components/ErrorToast/ErrorToast';
import TokenService from '../../services/token-service';
import ScrollToTopOnMount from '../../utilities/ScrollToTopOnMount';
import Spinner from 'react-spinkit';

export default class OpportunityBoardPage extends Component {
  static contextType = VableContext;

  state = { error: null, isLoading: true };

  renderInstructions = () => {
    if (this.context.userType === 'volunteer' && TokenService.hasAuthToken()) {
      return (
        <p className="pageInstructions detailsInstructions">
          Click on the "Volunteer" button to apply.
        </p>
      );
    } else {
      return (
        <p className="pageInstructions detailsInstructions">
          Login as a volunteer user to apply.
        </p>
      );
    }
  };

  componentDidMount() {
    this.setState({ isLoading: true });
    const { oppId } = this.props.match.params;
    this.setState({ error: null });
    OppApiService.getOppById(oppId)
      .then(this.context.setOpportunity)
      .then(this.setState({ isLoading: false }))
      .catch((res) => {
        this.setState({ error: res.error });
        this.setState({ isLoading: false });
      });
  }

  render() {
    const { error } = this.state;
    return (
      <div className="opportunityDetails">
        <ScrollToTopOnMount />
        <div className="detailsBanner">
          <h1 className="pageHeader detailsHeader">Opportunity Details.</h1>
          <img
            src="/assets/board-rocket.svg"
            alt="people working on a spaceship"
            className="detailsImage"
          />
          {this.renderInstructions()}
        </div>
        {error && <ErrorToast errorMessage={error} />}
        {this.state.isLoading ? (
          <div className="spinnerContainer">
            <h2 className="loadingTitle">Loading</h2>
            <Spinner
              fadeIn="none"
              name="ball-beat"
              color="black"
              className="loadingOpportunity"
            />
          </div>
        ) : (
          <OpportunityDetails history={this.props.history} />
        )}
      </div>
    );
  }
}
