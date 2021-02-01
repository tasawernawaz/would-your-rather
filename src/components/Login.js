import React from 'react'

class Login extends React.Component {
    state = {
        selectedUser: ""
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
                        <option>Tyler</option>
                        <option>Tasawer</option>
                    </select>
                    <button type="submit" onClick={this.handleSubmit}>Login</button>
                </div>
            </div>
        )
    }
}

export default Login