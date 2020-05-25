import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import PrivateRoute from './utilities/PrivateRoute';
import PublicOnlyRoute from './utilities/PublicOnlyRoute';
import Footer from './components/Footer/Footer';
import OpportunityBoardPage from './routes/OpportunityBoardPage/OpportunityBoardPage';
import OpportunityDetailsPage from './routes/OpportunityDetailsPage/OpportunityDetailsPage';
import OpportunityPostPage from './routes/OpportunityPostPage/OpportunityPostPage';
import LandingPage from './routes/LandingPage/LandingPage';
import LoginPage from './routes/LoginPage/LoginPage';
import NavBar from './components/NavBar/NavBar';
import NotFoundPage from './routes/NotFoundPage/NotFoundPage';
import RegistrationCheckpoint from './routes/RegistrationCheckpoint/RegistrationCheckpoint';
import RegistrationPage from './routes/RegistrationPage/RegistrationPage';
import SuccessPage from './routes/SuccessPage/SuccessPage';
import ErrorBoundary from './ErrorBoundary';

export default class App extends Component {
  state = { hasError: false };

  static getDerivedStateFromError(error) {
    console.error(error);
    return { hasError: true };
  }

  render() {
    return (
      <div className="app">
        <header className="navBar" role="banner">
          <ErrorBoundary>
            <Route path={'/'} component={NavBar} />
          </ErrorBoundary>
        </header>
        <main className="appMain">
          {this.state.hasError && (
            <p className="error">Error. Something went wrong.</p>
          )}
          <ErrorBoundary>
            <Switch>
              <Route exact path={'/'} component={LandingPage} />
              <PublicOnlyRoute path={'/login'} component={LoginPage} />
              <PublicOnlyRoute
                exact
                path={'/register'}
                component={RegistrationCheckpoint}
              />
              <PublicOnlyRoute
                path={'/register/:user'}
                component={RegistrationPage}
              />
              <PrivateRoute
                path={'/opportunitypost'}
                component={OpportunityPostPage}
              />
              <Route
                exact
                path="/opportunity/:oppId"
                component={OpportunityDetailsPage}
              />
              <Route
                path={'/opportunityboard'}
                component={OpportunityBoardPage}
              />
              <Route path={'/success/:destination'} component={SuccessPage} />
              <Route component={NotFoundPage} />
            </Switch>
          </ErrorBoundary>
        </main>
        <ErrorBoundary>
          <Footer />
        </ErrorBoundary>
      </div>
    );
  }
}
