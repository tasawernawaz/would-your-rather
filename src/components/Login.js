import React from 'react'
import { loadUsers } from '../actions/users'
import { authUser } from '../actions/authUser'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'


class Login extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            selectedUser: "none",
            redirectToReferrer: false
        }
    }

    componentDidMount() {
        this.props.dispatch(loadUsers())
    }

    handleChange = (event) => {
        this.setState({
            selectedUser: event.target.value
        })
    }

    handleSubmit = (e) => {
        const selectedUser = this.state.selectedUser
        if (selectedUser === "none") {
            alert("Please select a valid option before proceed")
        } else {
            this.props.dispatch(authUser(selectedUser))
            this.setState(() => ({
                redirectToReferrer: true
            }))
        }
    }

    render () {
        const { from } = this.props.location.state || { from: { pathname: '/' } }
        const { redirectToReferrer } = this.state

        if (redirectToReferrer === true) {
            return <Redirect to={from} />
        }

        return (
            <div className="container">
                <h1>Welcome to would you Rather!</h1>
                <div className="row flex-column">
                    <div className="form-group">
                        <label htmlFor="user">Please select your name</label>
                        <select className="form-control" id="user" value={this.state.selectedUser} onChange={this.handleChange}>
                        <option value="none">Select a user...</option>
                        {this.props.users.map(user =>
                            <option value={user.id} key={user.id}>{user.name}</option>
                        )}
                    </select>
                    </div>
                    <button className="btn btn-info btn-sm" type="submit" onClick={this.handleSubmit}>Login</button>
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