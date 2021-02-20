import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'


class Question extends React.Component {

    render () {
        const { name, avatarURL } = this.props.user
        const {id} = this.props.question

        return (
            <div className="question">
                <img className="avatar" src={avatarURL} alt={`avatar of ${name}` } />
                {name},
                <div>
                    <span> ... would you rather ... </span>
                    <Link to={`/question/${id}`}>View Poll</Link>
                </div>

            </div>
        )
    }
}

function maptStateToProps({users, questions}, props) {
    const question = questions[props.questionId]
    const user = users[question.author]
    return {
        question,
        user
    }
}

export default connect(maptStateToProps)(Question)