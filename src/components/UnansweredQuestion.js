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
            <div>
                <img className="avatar" src={user.avatarURL} alt={`avatar of ${user.name}` } />
                <strong>{user.name}: asks</strong>
                <div>
                    <strong>would you rather</strong>
                    <form className="question-form" onSubmit={(e) => handleSubmit(e, this.state.selectedOption)}>
                    <div>
                        <label>
                            <input
                            className="form-check-input"
                            type="radio"
                            name={question.id}
                            value="optionOne"
                            checked={this.state.selectedOption === "optionOne"}
                            onChange={this.handleChange}
                            />
                        {question.optionOne.text}
                        </label>
                    </div>
                    <div>
                        <label>
                            <input
                            className="form-check-input"
                            type="radio"
                            id="optionTwo"
                            name={question.id}
                            value="optionTwo"
                            checked={this.state.selectedOption === "optionTwo"}
                            onChange={this.handleChange}
                            />
                        {question.optionTwo.text}
                        </label>
                        </div>

                        <button className="btn btn-info btn-sm" type="submit">Submit</button>
                    </form>
                </div>
            </div>
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