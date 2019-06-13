import React from 'react'
import User from './User'
import axios from 'axios'

// axios.defaults.withCredentials = true;

const Users = (props) => {
    console.log('Users props ',props.users)

    const logoutSubmit = (event) => {
        event.preventDefault()
        localStorage.removeItem('token')
        props.history.push('/login')
    }
    return(
        <div>
            <button onClick = {logoutSubmit}>LogOut</button>
            {props.users.map(user => (
                <User user ={user} 
                key={user.id}/>
            ))}
        </div>
    )
}

export default Users