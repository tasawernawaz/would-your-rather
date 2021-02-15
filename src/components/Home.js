import React from 'react'
import { connect } from 'react-redux'

import Question from '../components/Question'
import { handleInitialData } from '../actions/shared'
import { hasUserAnswered } from '../utils/api'


class Home extends React.Component {

    componentDidMount() {
        this.props.dispatch(handleInitialData())
    }

    render () {
        const { answeredQuestion, unAnsweredQuestion } = this.props

        return (
            <div>
                <div>
                    <h2>Answered</h2>
                    <ul>
                        {answeredQuestion.map(question =>
                            <li><Question questionId={question.id} /></li>
                        )}
                    </ul>
                </div>
                <div>
                    <h2>Unanswered</h2>
                    <ul>
                        {unAnsweredQuestion.map(question =>
                            <li><Question questionId={question.id} /></li>
                        )}
                    </ul>
                </div>
            </div>
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