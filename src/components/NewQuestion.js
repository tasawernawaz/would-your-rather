import React from 'react'
import { connect } from 'react-redux'
import { createQuestionCreator } from '../actions/questions'
import { Redirect } from 'react-router-dom'

class NewQuestion extends React.Component {
    state = {
        optionOneText: "",
        optionTwoText: ""
    }

    handleSubmit = (e) => {
        e.preventDefault()
        if (this.state.optionOneText === "" || this.state.optionTwoText === "") {
            alert ("Please fill both opttions.")
            return
        }

        this.props.dispatch(createQuestionCreator(this.state.optionOneText, this.state.optionTwoText))
        this.setState(() => ({
            optionOneText: "",
            optionTwoText: "",
            redirect: true
        }))
    }

    render () {
        if (this.state.redirect === true) {
            return (<Redirect to="/" />)
        }
        return (
                <div className="row flex-column">
                    <h3>Would you rather?</h3>
                    <form onSubmit={this.handleSubmit}>
                        <input
                        className="form-control"
                        value={this.state.optionOneText}
                        onChange={e => this.setState({optionOneText: e.target.value})}
                        placeholder="Option one"></input>
                        <div className="font-weight-bold text-center">OR</div>
                        <input
                        className="form-control"
                        placeholder="Option two"
                        value={this.state.optionTwoText}
                        onChange={e => this.setState({optionTwoText: e.target.value})}
                        ></input>
                        <button className="btn btn-info btn-sm btn-submit" type="submit">Save Question</button>
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