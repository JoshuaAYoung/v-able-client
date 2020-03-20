import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import './App.css'
import PrivateRoute from '../Utils/PrivateRoute'
import PublicOnlyRoute from '../Utils/PublicOnlyRoute'
import NavBar from './components/NavBar/NavBar'
import JobBoardPage from './routes/JobBoardPage/JobBoardPage'
import JobPostPage from './routes/JobPostPage/JobPostPage'
import LandingPage from './routes/LandingPage/LandingPage'
import LoginPage from './routes/LoginPage/LoginPage'
import NotFoundPage from './routes/NotFoundPage/NotFoundPage'
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
            <PublicOnlyRoute
              path={'/login'}
              component={LoginPage}
            />
            <PublicOnlyRoute
              path={'/register'}
              component={RegistrationPage}
            />
            <PrivateRoute
              path={'/jobpost'}
              component={JobPostPage}
            />
            <Route
              path={'/jobboard'}
              component={JobBoardPage}
            />
            <Route
              component={NotFoundPage}
            />
          </Switch>
        </main>
      </div>
    )
  }
}

export default App
