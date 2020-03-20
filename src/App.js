import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import './App.css'
// import PrivateRoute from './components/Utilities/PrivateRoute'
// import PublicOnlyRoute from './components/Utilities/PublicOnlyRoute'
import Footer from './components/Footer/Footer'
import JobBoardPage from './routes/JobBoardPage/JobBoardPage'
import JobPostPage from './routes/JobPostPage/JobPostPage'
import LandingPage from './routes/LandingPage/LandingPage'
import LoginPage from './routes/LoginPage/LoginPage'
import NavBar from './components/NavBar/NavBar'
import NotFoundPage from './routes/NotFoundPage/NotFoundPage'
import RegistrationCheckpoint from './routes/RegistrationCheckpoint/RegistrationCheckpoint'
import RegistrationPage from './routes/RegistrationPage/RegistrationPage'


class App extends Component {
  state = { hasError: false }

  //INVESTIGATE ERROR BOUNDARIES!!! PROBABLY NEED TO ADD ERROR BOUNDARIES AROUND OUR ROUTES...
  static getDerivedStateFromError(error) {
    console.error(error)
    return { hasError: true }
  }

  render() {
    return (
      <div className='app'>
        <header className='navBar'>
          <NavBar />
        </header>
        <main className='appMain'>
          {this.state.hasError && <p className='error'>Error. Something went wrong.</p>}
          <Switch>
            <Route
              exact
              path={'/'}
              component={LandingPage}
            />
            <Route
              path={'/login'}
              render={({ history }) => <LoginPage history={history} />}
            />
            <Route
              exact
              path={'/register'}
              component={RegistrationCheckpoint}
            />
            <Route
              path={'/register/company'}
              render={({ history }) => <RegistrationPage history={history} userType={'company'} />}
            />
            <Route
              path={'/register/volunteer'}
              render={({ history }) => <RegistrationPage history={history} userType={'volunteer'} />}
            />
            {/* <Route
              path={'/register/:name'}
              render={({ match, history }) => <RegistrationPage history={history} userType={match.params.name} />}
            /> */}
            <Route
              path={'/jobpost'}
              render={({ history }) => <JobPostPage history={history} />}
            />
            {/* <PublicOnlyRoute
              path={'/login'}
              component={LoginPage}
            />
            <PublicOnlyRoute
              path={'/register'}
              render={({ history }) => <RegistrationPage history={history} />}
            />
            <PrivateRoute
              path={'/jobpost'}
              component={JobPostPage}
            /> */}
            <Route
              path={'/jobboard'}
              component={JobBoardPage}
            />
            <Route
              component={NotFoundPage}
            />
          </Switch>
        </main>
        <footer>
          <Footer />
        </footer>
      </div>
    )
  }
}

export default App
