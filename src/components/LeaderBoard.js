import React from 'react'
import { connect } from 'react-redux'

class LeaderBoard extends React.Component {
  render () {
    const { users } = this.props

    return (
            <div>
                <h2>Leader Board</h2>
                <div>
                        {users.map((user) =>
                            <div className="question">
                                <div>
                                <img className="avatar" src={user.avatarURL} alt={`avatar of ${user.name}`} />
                                    <strong>{user.name}</strong>
                                    <div className=" row flex-column">
                                        <span>Total Questions: {user.questions.length}</span>
                                        <span>Total Answers: {Object.keys(user.answers).length}</span>
                                        <span className="text-info">Total Scrore: {Object.keys(user.answers).length + user.questions.length} </span>

                                    </div>

                                </div>
                            </div>
                        )}

                </div>
            </div>
    )
  }
}

function mapStateToProps ({ users }) {
  const usersList = Object.values(users)
  return {
    users: usersList.sort((a, b) =>
      (Object.keys(b.answers).length + b.questions.length) -
            (Object.keys(a.answers).length + a.questions.length)
    )
  }
}
export default connect(mapStateToProps)(LeaderBoard)
