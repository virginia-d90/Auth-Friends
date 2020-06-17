import React from 'react';
import {axiosWithAuth} from '../utils/axiosWithAuth';

class Login extends React.Component {
    state = {
        credentials: {
            username: '',
            password: ''
        }
    };

    handleChange = e => {
        this.setState({
            credentials: {
                ...this.state.credentials, 
                [e.target.name]: e.target.value
            }
        })
    }

    login = e => {
        e.preventDefault();
        //make POST request to send credentials to api
        //navigate user to the protected landing page
        axiosWithAuth()
            .post('/api/login', this.state.credentials)
            .then(res => {
                window.localStorage.setItem('token', res.data.payload);
                this.props.history.push('/protected')
            })
            .catch(err => console.log(err))

    }

    render() {
        return (
            <>
                <form onSubmit={this.login}>
                    <label>UserName</label>
                    <input 
                        type='text'
                        name='username'
                        value={this.state.credentials.username}
                        onChange={this.handleChange}
                    />
                    <label>Password</label>
                    <input 
                        type='password'
                        name='password'
                        value={this.state.credentials.password}
                        onChange={this.handleChange}
                    />
                    <button>Log In</button>
                </form>
            </> 
        )
    }
}
export default Login