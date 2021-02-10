import React from 'react'
import Login from '../components/Login'
import Home from '../components/Home'
import { connect } from 'react-redux'
import NewQuestion from '../components/NewQuestion'
import Nav from '../components/Nav'
import { BrowserRouter, Route } from 'react-router-dom'


class App extends React.Component {

  render () {
    return (
      <React.Fragment>
        <BrowserRouter>
                <Nav />
                <Route exact path='/' component={Home}/>
                <Route exact path='/signin' component={Login}/>
                <Route exact path='/add' component={NewQuestion}/>
            </BrowserRouter>
      </React.Fragment>
    )
  }

}

function mapStateToProps ({authUser}) {
  return {
    authUser
  }
}


export default connect(mapStateToProps)(App)