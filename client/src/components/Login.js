import React from 'react'
import axios from 'axios'

class Login extends React.Component {
    constructor() {
        super()
        this.state = {
            username: '',
            password: ''
           
        }
    }

    inputHandle = (event) => {
        this.setState({
            ...this.state,
            [event.target.name]: event.target.value
        })
    }

    loginSubmit = (event) => {
        event.preventDefault();
        axios.post('http://localhost:3700/api/auth/login', this.state)
            .then(res =>
                {
                    localStorage.setItem('token',res.data.token)
                    console.log('login res ', res)
                    this.props.history.push('/users')})
            .catch(error => {
                console.log(error)
            })
        this.setState({
            username: '',
            password: ''
        })
    }

    render() {
        return (
            <div>
                <form>
                    <input placeholder='username'
                        name='username'
                        value={this.state.username}
                        type='text'
                        onChange={this.inputHandle} />

                    <input placeholder='password'
                        name='password'
                        value={this.state.password}
                        type='password'
                        onChange={this.inputHandle} />

                    

                    <button
                        onClick={this.loginSubmit}>
                        Login</button>

                </form>
            </div>
        )
    }
}

export default Login