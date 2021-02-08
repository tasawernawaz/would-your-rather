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
            <nav className='nav'>
              <ul>
                <li>
                  <NavLink to='/' exact activeClassName='active'>
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink to='/new' activeClassName='active'>
                    New Question
                  </NavLink>
                </li>
                <li>
                  <NavLink to='/leader-board' activeClassName='active'>
                    Leader Board
                  </NavLink>
                </li>
              </ul>
              <ul>
                <li>
                    Hello, {this.props.authUser}
                </li>
                <li>
                  <button onClick={this.handleClick}>
                    Logout
                  </button>
                </li>
              </ul>
            </nav>
          )
        }
}

function mapStateToProps ({authUser}) {
    return {
        authUser
    }
}

export default connect(mapStateToProps)(Nav)