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
        return (
            <div>
                <h2>Question Details</h2>
                {this.state.answered === true ?
                <AnsweredQuestion questionId={this.props.match.params.id}/>
                : <UnansweredQuestion
                questionId={this.props.match.params.id}
                handleSubmit={this.handleSubmit}
                />
                }
            </div>
        )
    }
}


export default connect()(QuestionDetail)