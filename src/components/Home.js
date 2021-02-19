import React from 'react'
import { connect } from 'react-redux'

import Question from './Question'
import { handleInitialData } from '../actions/shared'
import { hasUserAnswered } from '../utils/api'


class Home extends React.Component {

    state = {
        showTab: "answered"
    }

    componentDidMount() {
        this.props.dispatch(handleInitialData())
    }

    render () {
        const { answeredQuestion, unAnsweredQuestion } = this.props

        return (
            <React.Fragment>

                <ul class="nav nav-tabs question-tabs">
                    <li key="answered">
                        <button className="btn btn-info btn-sm" onClick={() => (this.setState({showTab: "answered"}))} >Answered</button>
                    </li>
                    <li key="unanswered">
                        <button className="btn btn-info btn-sm" onClick={() => (this.setState({showTab: "unanswered"}))} >UnAnswered</button>
                    </li>
                </ul>


                {this.state.showTab === "answered" ? (
                    <ul>
                        {answeredQuestion.map(question =>
                            <li><Question questionId={question.id} /></li>
                        )}
                    </ul>
                ):
                <ul>
                    {unAnsweredQuestion.map(question =>
                        <li><Question questionId={question.id} /></li>
                    )}
                </ul>
                }
            </React.Fragment>
        )
    }
}

function mapStateToProps({questions, authUser}) {
    const questionsArray = Object.values(questions)
    const answeredQuestion = questionsArray.filter(question => hasUserAnswered(question, authUser))
    const unAnsweredQuestion = questionsArray.filter(question => !hasUserAnswered(question, authUser))

    return {
        answeredQuestion,
        unAnsweredQuestion,
    }
}

export default connect(mapStateToProps)(Home)