import React from 'react'
import { connect } from 'react-redux'
import AnsweredQuestion from './AnsweredQuestion'
import UnansweredQuestion from './UnansweredQuestion'
import { createSaveQuestionAnswer } from '../actions/questions'


class QuestionDetail extends React.Component {

    constructor(props) {
        super(props)

        const { optionOne, optionTwo } = this.props.question

        this.state = {
            answered : (optionOne.votes + optionTwo.votes).includes(this.props.authUser)
        }
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit = (e, selectedOption) => {
        e.preventDefault()
        const questionId = this.props.questionId
        this.props.dispatch(createSaveQuestionAnswer(questionId, selectedOption))
        this.setState({
            answered: true
        })
    }

    render () {
        const questionId = this.props.questionId
        return (
            <div>
                <h2>Question Details</h2>
                {this.state.answered === true ?
                <AnsweredQuestion questionId={questionId}/>
                : <UnansweredQuestion
                questionId={questionId}
                handleSubmit={this.handleSubmit}
                />
                }
            </div>
        )
    }
}

function mapStateToProps({questions, authUser}, props) {
    const questionId = props.match.params.id
    return {
        authUser,
        questionId,
        question: questions[questionId]
    }
}


export default connect(mapStateToProps)(QuestionDetail)