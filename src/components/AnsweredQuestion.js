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
                <div>
                    <img className="avatar" src={user.avatarURL}  alt={`avatar of ${user.name}`} />
                    <strong>{user.name}: asked</strong>
                    <div>
                        <strong>{optionOne.text}</strong> {optionOneVotes.includes(authUser) && <strong className="text-info font-italic"> - You voted for this</strong>}
                        <div className="text-info">{`${optionOneVotes.length} out of ${totalVotes}`}</div>
                    </div>
                    <div class="font-weight-bold text-center">OR</div>
                    <div>
                        <strong>{optionTwo.text}</strong> {optionTwoVotes.includes(authUser) && <strong className="text-info font-italic"> - You voted for this</strong>}
                        <div className="text-info"> <span>{`${optionTwoVotes.length} out of ${totalVotes}`}</span> </div>
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