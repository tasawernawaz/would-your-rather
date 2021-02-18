import React from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { removeAuthUser } from '../actions/authUser'


class Nav extends React.Component {

    handleClick = () => {
        this.props.dispatch(removeAuthUser())
    }

    render () {
        return (
            <React.Fragment>
              <ul class="nav">
                <li class="nav-item">
                  <NavLink class="nav-link" to='/' exact activeClassName='active'>Home</NavLink>
                </li>
                <li class="nav-item">
                  <NavLink class="nav-link" to='/add' activeClassName='active'>New Question</NavLink>
                </li>
                <li class="nav-item">
                  <NavLink class="nav-link" to='/leaderboard' exact activeClassName='active'>Leader Board</NavLink>
                </li>
                <li class="nav-item">
                  <span> Hello, <strong>{this.props.authUser}</strong></span>
                </li>
                <li class="nav-item">
                  <button type="button" class="btn btn-dark btn-sm" onClick={this.handleClick}>Logout</button>
                </li>
              </ul>
            </React.Fragment>
          )
        }
}

function mapStateToProps ({authUser}) {
    return {
        authUser
    }
}

export default connect(mapStateToProps)(Nav)