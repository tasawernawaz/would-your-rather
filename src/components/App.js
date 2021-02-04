import React from 'react'
import Login from '../components/Login'
import Home from '../components/Home'
import { connect } from 'react-redux'

class App extends React.Component {

  render () {
    const authUser = this.props.authUser
    return (
      <div>
        {authUser === null ? <Login /> : <Home />}
      </div>
    )
  }

}

function mapStateToProps ({authUser}) {
  return {
    authUser
  }
}


export default connect(mapStateToProps)(App)