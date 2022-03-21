import React, { useEffect, useState } from "react";
import {Button, Container, Form, Row, Col} from 'react-bootstrap'
import './User.css'


const User = () => {

    return (
        <div className="page">
            <h1>User Information</h1>
            
            <div className="register-block">
                <div className="register-block-top">
                    <h3>Edit User</h3>
                </div>

                <div className="register-block-centre">
                    <Form>
                        <Form.Group>
                            <Form.Control
                                type="text"
                                placeholder="Username"
                                name="username"
                            />
                        </Form.Group>

                        <Form.Group>
                             <Form.Control
                                type="text"
                                placeholder="Password"
                                name="password"
                             />
                            </Form.Group>

                        <Form.Group>
                            <Form.Control
                                type="text"
                                placeholder="Confirm Password"
                                name="password"
                            />
                        </Form.Group>

                        <Form.Group>
                            <Form.Control
                                as="textarea"
                                placeholder="Address"
                                rows={3}
                                name="address"
                            />
                         </Form.Group>
            
                        <Form.Group>
                            <Form.Control
                                type="text"
                                placeholder="Phone Number"
                                name="name"
                            />
                        </Form.Group>
                    </Form>
                </div>
                
                <div className="register-block-bottom">
                    
                    <div className="button">
                        <Button variant="success" type="submit" block>
                            Save Changes
                        </Button>
                    </div>
                </div>
            </div>
        </div>
      );

}

export default User;