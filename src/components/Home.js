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
                <ul className="nav nav-tabs">
                <li className="nav-item">
                    <a className="nav-link" href="/#" onClick={() => (this.setState({showTab: "answered"}))}>Answered</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/#" onClick={() => (this.setState({showTab: "unanswered"}))}>UnAnswered</a>
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