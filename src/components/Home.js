import React from 'react'
import Nav from '../components/Nav'
import { BrowserRouter, Route} from 'react-router-dom'
import NewQuestion from './NewQuestion'




class Home extends React.Component {
    render () {
        return (
            <BrowserRouter>
                <Nav />
                <Route exact path='/add' component={NewQuestion}/>
            </BrowserRouter>
        )
    }
}

export default Home