import React from 'react'
import { Route, Redirect } from 'react-router-dom'

export const PrivateRoute = ({ component: Component, authorized, ...rest }) => (
    <Route {...rest} render={(props) => (
      authorized === true
        ? <Component {...props} />
        : <Redirect to={{
          pathname: '/signin',
          state: { from: props.location }
        }} />
    )} />
)
