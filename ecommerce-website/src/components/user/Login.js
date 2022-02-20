import React from 'react'
import './Login.css'
import {Card, Button, Container, Row} from 'react-bootstrap'

const Login = () => {
    return(
        <div className="page">
            <h1>Login</h1>
            <div className="login-block">
                <div className="login-block-top">
                    <h3>Connect to you account</h3>
                    <div className="username">

                    </div>
                    <div className="password">

                    </div>
                </div>
                <div className="login-block-center">
                    <form>
                        <input type="text" placeholder='Username' />
                        <input type="password" placeholder='Password'/>
                    </form>
                    <div className="password-forgotten">
                        Password Forgotten
                    </div>
                </div>
                <div className="login-block-bottom">
                    <div className="button">
                        <Button className="btn"> Login </Button>
                    </div>
                    <div className="create-account">
                        Create account
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login;