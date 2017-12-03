import React from 'react'

const NoMatch = ({ location: { pathname } }) => (
    <div>
        <h3>You are trying to reach {pathname}</h3>
        <h3>But sadly we couln't find it :(</h3>
    </div>
)

export default NoMatch
