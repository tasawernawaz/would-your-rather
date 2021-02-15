import React from 'react'
import { connect } from 'react-redux'


class AnsweredQuestion extends React.Component {

    render () {
        const { user, question, authUser } = this.props
        const { optionOne, optionTwo } = question
        const optionOneVotes = optionOne.votes
        const optionTwoVotes = optionTwo.votes
        const totalVotes = optionOneVotes.length + optionTwoVotes.length
        return (
            <React.Fragment>
                <h3>{user.name}: asked</h3>
                    <div>
                        <div>
                            <img src={user.avatarURL} height="200px" width="200px" alt="avatar url" />
                        </div>
                        <div>
                            <p>
                                {optionOneVotes.includes(authUser.id) && <strong>You voted for this</strong>}
                                {optionOne.text}
                                <span>{`${optionOneVotes.length} out of ${totalVotes}`}</span>
                            </p>
                            <p>
                                {optionTwoVotes.includes(authUser.id) && <strong>You voted for this</strong>}
                                {optionTwo.text}
                                <span>{`${optionTwoVotes.length} out of ${totalVotes}`}</span>
                            </p>
                        </div>
                    </div>
            </React.Fragment>
        )
    }
}


function mapStateToProps({users, questions, authUser}, props) {
    const { questionId } = props
    const question = questions[questionId]
    const user = users[question.author]

    return {
        question,
        user,
        authUser,
    }
}


export default connect(mapStateToProps)(AnsweredQuestion)