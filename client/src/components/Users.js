import React from 'react'
import User from './User'
import axios from 'axios'
import { axiosWithAuth } from '../axiosWithAuth'

// axios.defaults.withCredentials = true;

class Users extends React.Component{
    constructor() {
        super()
        this.state = {
          users: []
        }
      }

      componentDidMount() {
        this.getUsers()
    }

      getUsers = async () => {
        let users = await axiosWithAuth().get('http://localhost:3700/api/users')
        this.setState({
          users:users.data
        })
        console.log('get users fn ', this.state.users)
      }

      logoutSubmit = (event) => {
        event.preventDefault()
        localStorage.removeItem('token')
        this.props.history.push('/login')
    }

    render(){
        return(
            <div>
                <button onClick = {this.logoutSubmit}>LogOut</button>
                {/* {props.users.filter(
                    user => user.department
                )} */}
    
                {this.state.users.map(user => (
                    <User user ={user} 
                    key={user.id}/>
                ))}
            </div>
        )
    }
} 

// = (props) => {
//     console.log('Users props ',props.users)

//     const logoutSubmit = (event) => {
//         event.preventDefault()
//         localStorage.removeItem('token')
//         props.history.push('/login')
//     }
//     return(
//         <div>
//             <button onClick = {logoutSubmit}>LogOut</button>
//             {/* {props.users.filter(
//                 user => user.department
//             )} */}

//             {props.users.map(user => (
//                 <User user ={user} 
//                 key={user.id}/>
//             ))}
//         </div>
//     )
// }

export default Users