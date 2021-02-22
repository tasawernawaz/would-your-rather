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
              <div className="nav-bar">
                <NavLink to='/' exact >Home</NavLink>
                <NavLink to='/add'>New Question</NavLink>
                <NavLink to='/leaderboard' exact>Leader Board</NavLink>
                <span> Hello, <strong>{this.props.authUser}</strong></span>
                <button type="button" className="btn btn-danger btn-sm" onClick={this.handleClick}>
                  Log out
                </button>
              </div>

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