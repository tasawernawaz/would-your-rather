import React from 'react'
import { connect } from 'react-redux'
import AnsweredQuestion from './AnsweredQuestion'
import UnansweredQuestion from './UnansweredQuestion'
import { createSaveQuestionAnswer } from '../actions/questions'


class QuestionDetail extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            answered : this.props.answered
        }
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit = (e, selectedOption) => {
        e.preventDefault()
        this.setState({
            answered: true
        })
        const questionId = this.props.match.params.id
        this.props.dispatch(createSaveQuestionAnswer(questionId, selectedOption))
    }

    render () {
        const questionId =this.props.match.params.id
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



export default connect()(QuestionDetail)