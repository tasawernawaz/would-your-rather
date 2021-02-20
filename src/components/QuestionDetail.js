import React from 'react'
import { connect } from 'react-redux'
import AnsweredQuestion from './AnsweredQuestion'
import UnansweredQuestion from './UnansweredQuestion'
import { createSaveQuestionAnswer } from '../actions/questions'
import { hasUserAnswered } from '../utils/api'


class QuestionDetail extends React.Component {

    constructor(props) {
        super(props)
        const { question, authUser } = this.props
        this.state = {
            answered : question ? hasUserAnswered(question, authUser) : null
        }
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit = (e, selectedOption) => {
        e.preventDefault()
        const questionId = this.props.question.id
        this.props.dispatch(createSaveQuestionAnswer(questionId, selectedOption))
        this.setState({
            answered: true
        })
    }

    render () {
        const { question } = this.props

        if (question === null) {
            return <p>404 - Question Not Found</p>
        }

        return (
            <div className="row question">
                {this.state.answered === true ?
                <AnsweredQuestion questionId={question.id}/>
                : <UnansweredQuestion
                questionId={question.id}
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
        question: Object.keys(questions).length > 0 ? questions[questionId] : null
    }
}


export default connect(mapStateToProps)(QuestionDetail)