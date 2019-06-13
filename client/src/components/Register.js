import React from 'react'
import axios from 'axios'

class Register extends React.Component {
    constructor() {
        super()
        this.state = {
            username: '',
            password: '',
            department: ''
        }
    }

    inputHandle = (event) => {
        this.setState({
            ...this.state,
            [event.target.name]: event.target.value
        })
    }

    registerSubmit = (event) => {
        event.preventDefault();
        axios.post('http://localhost:3700/api/auth/register', this.state)
            .then(res =>
                {
                console.log('register res ', res)
                this.props.history.push('/login')})
            .catch(error => {
                console.log(error)
            })
        this.setState({
            username: '',
            password: '',
            department: ''
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

                    <input placeholder='department'
                        name='department'
                        value={this.state.department}
                        type='text'
                        onChange={this.inputHandle} />

                    <button
                        onClick={this.registerSubmit}>
                        Register</button>

                </form>
            </div>
        )
    }
}

export default Register