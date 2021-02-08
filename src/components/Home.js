import React from 'react'
import Nav from '../components/Nav'
import { BrowserRouter, Route} from 'react-router-dom'




class Home extends React.Component {
    render () {
        return (
            <BrowserRouter>
                <Nav />
            </BrowserRouter>
        )
    }
}

export default Home