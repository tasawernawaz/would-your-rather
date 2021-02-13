import React from 'react'
import { connect } from 'react-redux'
import AnsweredQuestion from './AnsweredQuestion'
import UnansweredQuestion from './UnansweredQuestion'


class QuestionDetail extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            answered : this.props.answered
        }
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.setState({
            answered: true
        })
    }

    render () {
        const  {user, question} = this.props
        return (
            <div>
                <h2>Question Details</h2>
                {this.state.answered === true ?
                <AnsweredQuestion user={user} question={question}/>
                : <UnansweredQuestion
                user={user}
                question={question}
                handleSubmit={this.handleSubmit}
                />
                }
            </div>
        )
    }
}

function mapStateToProps({users, questions, authUser}, props) {
    const questionId = props.match.params.id
    const question = questions[questionId]
    const user = users[question.author]
    const answered = false

    return {
        question,
        user,
        authUser,
        answered
    }
}

export default connect(mapStateToProps)(QuestionDetail)