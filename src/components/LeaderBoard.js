import React from 'react'
import { connect } from 'react-redux'

class LeaderBoard extends React.Component {

    render () {
        const { users } = this.props

        return (
            <div>
                <h2>Leader Board</h2>
                <div>
                    <ul>
                        {users.map((user) =>
                            <li key={user.id}>
                                <div>
                                    <img className="avatar" src={user.avatarURL} alt="user's avatar" />
                                    <strong>{user.name}</strong>
                                    <p>Total Questions: <span>{user.questions.length}</span></p>
                                    <p>Total Answers: <span>{Object.keys(user.answers).length}</span></p>
                                </div>
                            </li>
                        )}
                    </ul>
                </div>
            </div>
        )
    }

}

function mapStateToProps({users}) {
    const usersList = Object.values(users)
    return {
        users: usersList.sort((a, b) =>
            (Object.keys(b.answers).length + b.questions.length)
            - (Object.keys(a.answers).length + a.questions.length)
        )
    }
}
export default connect(mapStateToProps)(LeaderBoard)