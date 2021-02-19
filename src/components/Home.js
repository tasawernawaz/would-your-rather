import React from 'react'
import { connect } from 'react-redux'

import Question from './Question'
import { handleInitialData } from '../actions/shared'
import { hasUserAnswered } from '../utils/api'


class Home extends React.Component {

    state = {
        showTab: "unanswered"
    }

    componentDidMount() {
        this.props.dispatch(handleInitialData())
    }

    render () {
        const { answeredQuestions, unAnsweredQuestions } = this.props

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
                <div className="row flex-column">
                    {this.state.showTab === "answered" ? (
                        answeredQuestions.map(question => <Question questionId={question.id} />)
                    ):
                    unAnsweredQuestions.map(question => <Question questionId={question.id} />)
                    }
                </div>
            </React.Fragment>
        )
    }
}

function mapStateToProps({questions, authUser}) {
    const questionsArray = Object.values(questions)
    const answeredQuestions = questionsArray.filter(question => hasUserAnswered(question, authUser))
    const unAnsweredQuestions = questionsArray.filter(question => !hasUserAnswered(question, authUser))

    return {
        answeredQuestions: answeredQuestions.sort((a,b,) => b.timestamp - a.timestamp),
        unAnsweredQuestions: unAnsweredQuestions.sort((a,b,) => b.timestamp - a.timestamp)
    }
}

export default connect(mapStateToProps)(Home)