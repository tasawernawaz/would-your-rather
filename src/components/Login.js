import React from 'react'
import { loadUsers } from '../actions/users'
import { authUser } from '../actions/authUser'
import { connect } from 'react-redux'


class Login extends React.Component {
    state = {
        selectedUser: ""
    }


    componentDidMount() {
    this.props.dispatch(loadUsers())
    }

    handleChange = (event) => {
        this.setState({
            selectedUser: event.target[event.target.selectedIndex].id
        })
    }

    handleSubmit = (e) => {
        this.props.dispatch(authUser(this.state.selectedUser))
    }

    render () {
        return (
            <div>
                <h1>Welcome to would you Rather!</h1>

                <div>
                    Please select your name
                    <select value={this.state.selectedUser} onChange={this.handleChange}>
                        {this.props.users.map(user =>
                            <option id={user.id} key={user.id}>{user.name}</option>
                        )}
                    </select>
                    <button type="submit" onClick={this.handleSubmit}>Login</button>
                </div>
            </div>
        )
    }
}

function mapStateToProps({users}) {
    return {
        users: Object.values(users)
    }
}

export default connect(mapStateToProps)(Login)