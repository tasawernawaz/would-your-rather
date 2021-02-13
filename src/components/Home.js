import React from 'react'
import { connect } from 'react-redux'

import Question from '../components/Question'
import { handleInitialData } from '../actions/shared'


class Home extends React.Component {

    componentDidMount() {
        this.props.dispatch(handleInitialData())
    }

    render () {
        return (
            <div>
                <ul>
                    {this.props.questions.map(question =>
                        <li><Question questionId={question.id} /></li>
                    )}
                </ul>
            </div>
        )
    }
}

function mapStateToProps({questions, users, authUser}) {

    return {
        questions: Object.values(questions)
    }
}

export default connect(mapStateToProps)(Home)