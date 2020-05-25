import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import OpportunityCard from '../../components/OpportunityCard/OpportunityCard';
import OppApiService from '../../services/opp-api-service';
import VableContext from '../../context/VableContext';
import './OpportunityBoardPage.css';
import ErrorBoundary from '../../ErrorBoundary';
import ErrorToast from '../../components/ErrorToast/ErrorToast';
import ScrollToTopOnMount from '../../utilities/ScrollToTopOnMount';
import Spinner from 'react-spinkit';

export default class OpportunityBoardPage extends Component {
  static contextType = VableContext;

  state = {
    error: null,
    tempSearchValue: '',
    isLoading: false,
  };

  addTempSearch = (tempSearchValue) => {
    this.setState({
      tempSearchValue,
    });
  };

  handleSubmit = (ev) => {
    ev.preventDefault();
    this.getOpportunities(this.state.tempSearchValue);
  };

  getOpportunities = (searchTerm) => {
    this.setState({ isLoading: true });
    OppApiService.getOpps(searchTerm)
      .then(this.setState({ error: null }))
      .then((data) => {
        if (data.length === 0) {
          this.setState({ error: 'No opportunities could be found.' });
        }
        this.context.setOppsBoard(data);
        this.setState({ isLoading: false });
      })
      .catch((res) => {
        this.setState({ error: res.error });
        this.setState({ isLoading: false });
      });
  };

  componentDidMount() {
    this.getOpportunities();
  }

  renderOpportunities() {
    return (
      <ul className="oppList">
        {this.context.opportunities.map((opportunity) => (
          <li key={opportunity.opportunity_id} className="opportunityCard">
            <ErrorBoundary>
              <OpportunityCard
                opportunity={opportunity}
                history={this.props.history}
              />
            </ErrorBoundary>
          </li>
        ))}
      </ul>
    );
  }

  render() {
    const { error } = this.state;
    return (
      <div className="boardContainer">
        <ScrollToTopOnMount />
        <div className="oppBoardBanner">
          <h1 className="pageHeader textCenter">Opportunity Board.</h1>
          <p className="pageInstructions boardInstructions">
            Click an opportunity to see more details or enter a search below.
          </p>
          <form
            className="searchForm"
            onSubmit={this.handleSubmit}
            aria-label="opportunity search"
          >
            <input
              placeholder="Keyword or Location..."
              type="text"
              name="oppSearch"
              id="oppSearch"
              className="oppSearch"
              aria-label="opportunity search"
              onChange={(ev) => this.addTempSearch(ev.target.value)}
            />
            <button
              type="submit"
              className="searchButton"
              aria-label="search button"
            ></button>
          </form>
        </div>
        {error && <ErrorToast errorMessage={error} />}
        {this.context.opportunities.length === 0 ? (
          <>
            <h2 className="nothingFound">No Opportunities found</h2>
            <NavLink to="/opportunitypost" className="nothingLink">
              Click here to create one.
            </NavLink>
          </>
        ) : null}
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
          this.renderOpportunities()
        )}
      </div>
    );
  }
}
