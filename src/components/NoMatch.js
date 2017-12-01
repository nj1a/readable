import React from 'react'

const NoMatch = ({ location }) => (
    <div>
        <h3>You are trying to reach {location.pathname}</h3>
        <h3>But sadly we couln't find it :(</h3>
    </div>
)

export default NoMatch
