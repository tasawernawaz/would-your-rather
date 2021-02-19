import React from 'react'
import { connect } from 'react-redux'
import AnsweredQuestion from './AnsweredQuestion'
import UnansweredQuestion from './UnansweredQuestion'
import { createSaveQuestionAnswer } from '../actions/questions'
import { hasUserAnswered } from '../utils/api'


class QuestionDetail extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            answered : hasUserAnswered(this.props.question, this.props.authUser)
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
            <div className="row question">
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