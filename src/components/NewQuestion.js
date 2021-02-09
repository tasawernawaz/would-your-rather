import React from 'react'
import { connect } from 'react-redux'
import { createQuestionCreator } from '../actions/questions'


class NewQuestion extends React.Component {
    state = {
        option1: "",
        option2: ""
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.dispatch(createQuestionCreator(this.state.option1, this.state.option2))
    }
    render () {
        return (
            <div>
                <h2>Create a new question</h2>
                <div>Complete the question</div>
                <h3>Would you rather?</h3>
                <form onSubmit={this.handleSubmit}>
                    <input
                    value={this.state.option1}
                    onChange={e => this.setState({option1: e.target.value})}
                    placeholder="Option one"></input>
                    OR
                    <input
                    placeholder="Option two"
                    value={this.state.option2}
                    onChange={e => this.setState({option2: e.target.value})}
                    ></input>
                    <button type="submit">Save Question</button>
                </form>
            </div>
        )
    }
}

function mapStateToProps({authUser}){
    return {
        authUser
    }
}

export default connect(mapStateToProps)(NewQuestion)