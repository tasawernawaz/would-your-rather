import React from 'react'
import { connect } from 'react-redux'

class UnansweredQuestion extends React.Component {

    state = {
        selectedOption: "",
    }

    handleChange = (e) => {
        this.setState({
            selectedOption: e.target.value
        })
    }

    render() {
        const { user, question, handleSubmit } = this.props
        return (
            <React.Fragment>
                <h3>{user.name}: asks</h3>
                    <div>
                        <div><img src={user.avatarURL} alt="avatar url" /></div>
                        <div>
                            <strong>would you rather</strong>
                            <form onSubmit={handleSubmit}>

                                <label>
                                    <input
                                    type="radio"
                                    name={question.id}
                                    value="optionOne"
                                    checked={this.state.selectedOption === "optionOne"}
                                    onChange={this.handleChange}
                                    />
                                {question.optionOne.text}
                                </label>

                                <label>
                                    <input
                                    type="radio"
                                    id="optionTwo"
                                    name={question.id}
                                    value="optionTwo"
                                    checked={this.state.selectedOption === "optionTwo"}
                                    onChange={this.handleChange}
                                    />
                                {question.optionTwo.text}
                                </label>
                                <button type="submit">Submit</button>
                            </form>
                        </div>
                    </div>
            </React.Fragment>
        )
    }
}


function mapStateToProps({users, questions}, props) {
    const { questionId } = props
    const question = questions[questionId]
    const user = users[question.author]

    return {
        question,
        user,
    }
}


export default  connect(mapStateToProps)(UnansweredQuestion)