import React from 'react';
import './App.css';
import { Route, NavLink } from 'react-router-dom'
import Login from './components/Login.js'
import Register from './components/Register.js'
import Axios from 'axios';
import Users from './components/Users';
import { axiosWithAuth } from './axiosWithAuth'

// Axios.defaults.withCredentials = true;

class App extends React.Component {
  // constructor() {
  //   super()
  //   this.state = {
  //     users: []
  //   }
  // }

  // componentDidMount() {
  //   // axiosWithAuth().get('http://localhost:3700/api/users')
  //   //   .then(res => {
  //   //     console.log('get users res ', res)
  //   //     this.setState(() => ({
  //   //       users: res.data
  //   //     }))
  //   //     console.log('after setState', this.state.users)
  //   //   })
  //   //   .catch(error => {
  //   //     console.log(error)
  //   //   })
  //   this.getUsers()
  // }

  // getUsers = async () => {
  //   let users = await axiosWithAuth().get('http://localhost:3700/api/users')
  //   this.setState({
  //     users:users.data
  //   })
  //   console.log('get users fn ', this.state.users)
  // }

  render() {
    return (
      <div className="App">
        <div>
          <NavLink to='/register'>Register</NavLink>
          <NavLink to='login'>Sign In</NavLink>
        </div>
        <h1>I am from users app with roles</h1>
        <Route path='/login' component={Login} />

        <Route path='/register' component={Register} />

        <Route path='/users' component={Users} />

        {/* <Route path='/users' render={props => (
          <Users {...props}
            users={this.state.users}
          />
        )} /> */}
      </div>
    );
  }
}

export default App;
