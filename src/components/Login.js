import React from 'react'
import { loadUsers } from '../actions/users'
import { connect } from 'react-redux'


class Login extends React.Component {
    state = {
        selectedUser: ""
    }


    componentDidMount() {
    this.props.dispatch(loadUsers())
    }

    handleChange = (e) => {
        this.setState({
            selectedUser: e.target.value
        })
    }

    handleSubmit = () => {
        alert(this.state.selectedUser)
    }

    render () {
        return (
            <div>
                <h1>Welcome to would you Rather!</h1>

                <div>
                    Please select your name
                    <select value={this.state.selectedUser} onChange={this.handleChange}>
                        {this.props.users.map(user =>
                            <option key={user.id}>{user.name}</option>
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