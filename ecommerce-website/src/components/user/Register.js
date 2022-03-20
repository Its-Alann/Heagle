import React from 'react'
import './Login.css'
import {Card, Button, Container, Row} from 'react-bootstrap'

const Register = () => {
    return(
        <div className="page">
            <h1>Sign Up</h1>
            <div className="login-block">
                <div className="login-block-top">
                    <h3>Sign Up</h3>
                    <div className="username">

                    </div>
                    <div className="password">

                    </div>
                </div>
                <div className="login-block-center">
                    <form>
                        <input type="text" placeholder='Username' />
                        <input type="password" placeholder='Password'/>
                        <input type="password" placeholder='Reenter Password'/>
                        <input type="text" placeholder='Email'/>
                        <input type="text" placeholder='Address'/>
                        <input type="text" placeholder='Phone number'/>
                    </form>
                </div>
                <div className="login-block-bottom">
                    <div className="button">
                        <Button className="btn"> Login </Button>
                    </div>
                    <div className="create-account">
                        Already have an account? LogIn now.
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Register;