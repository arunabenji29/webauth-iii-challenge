import React from 'react'

const User = (props) => {
    return (
        <div>
            <h4>{props.user.username}</h4>
            <p>{props.user.department}</p>
        </div>
    )
}

export default User