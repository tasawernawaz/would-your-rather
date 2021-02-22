import React from 'react'
import Login from '../components/Login'
import Home from '../components/Home'
import { connect } from 'react-redux'
import NewQuestion from '../components/NewQuestion'
import Nav from '../components/Nav'
import { BrowserRouter, Route } from 'react-router-dom'
import QuestionDetail from './QuestionDetail'
import LeaderBoard from './LeaderBoard'
import { PrivateRoute } from './PrivateRoute'
import LoadingBar from 'react-redux-loading'

class App extends React.Component {
  render () {
    const authorized = this.props.authUser !== null
    return (
      <React.Fragment>
        <LoadingBar />
        <div className="container">
          <BrowserRouter>
                  {authorized === true && <Nav />}

                  <Route exact path='/signin' component={Login}/>
                  <PrivateRoute authorized={authorized} exact path='/' component={Home} />
                  <PrivateRoute authorized={authorized} exact path='/add' component={NewQuestion} />
                  <PrivateRoute authorized={authorized} exact path='/question/:id' component={QuestionDetail} />
                  <PrivateRoute authorized={authorized} exact path='/leaderboard' component={LeaderBoard} />
              </BrowserRouter>
        </div>
      </React.Fragment>
    )
  }
}

function mapStateToProps ({ authUser }) {
  return {
    authUser
  }
}

export default connect(mapStateToProps)(App)
