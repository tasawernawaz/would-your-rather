import React from 'react'


export default function AnsweredQuestion(props) {
    const { user, question } = props
    return (
        <React.Fragment>
            <h3>{user.name}: asked</h3>
                <div>
                    <div><img src={user.avatarURL} alt="avatar url" /></div>
                    <div>
                        question details
                    </div>
                </div>
        </React.Fragment>
    )
}