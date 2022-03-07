import React, { useEffect, useState } from "react";
import Axios from "axios";
import "./Login.css";
import { Card, Button, Container, Row } from "react-bootstrap";

const Login = () => {
	//States
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [user, setUser] = useState({});
	const [errMessage, setErrMessage] = useState("");

	const handleLogin = async (e) => {
		e.preventDefault();
		const url = "https://heagle.herokuapp.com/getUserByEmail/" + email;
		const devurl = "http://localhost:3001/getUserByEmail/" + email;
		try {
			const response = await Axios.get(devurl);
			console.log(response.data[0]);
			setUser(response.data[0]);
		} catch (err) {
			setErrMessage("User not found");
			console.log("User not found: " + err);
		}

		//case were email and password matches
		//case were email is found but password is not
		//case where email is not found
	};

	//Runs when changes are made to the email or password state
	useEffect(() => {
		console.log(email);
		console.log(password);
	}, [email, password]);

	//Validates user's credential
	useEffect(() => {
		if (email === "") {
		} else if (typeof user === "undefined") {
			setErrMessage("User not found");
			console.log("User not found");
		} else if (user.password !== password) {
			setErrMessage("Invalid password");
			console.log("Password do not match");
		} else {
			setErrMessage("USER LOGGED IN");
		}
	}, [user]);

	return (
		<div className="page">
			<h1>Login</h1>
			<div className="login-block">
				<div className="login-block-top">
					<h3>Connect to your account</h3>
					<div className="email"></div>
					<div className="password"></div>
				</div>
				<div className="login-block-center">
					<h6 className="error-message">{errMessage}</h6>
					<form>
						<input
							type="text"
							placeholder="Email address"
							value={email}
							onChange={({ target }) => {
								setEmail(target.value);
							}}
						/>
						<input
							type="password"
							placeholder="Password"
							value={password}
							onChange={({ target }) => {
								setPassword(target.value);
								//console.log(password);
							}}
						/>
					</form>
					<div className="password-forgotten">Password Forgotten</div>
				</div>
				<div className="login-block-bottom">
					<div className="button">
						<Button className="btn" onClick={handleLogin}>
							{" "}
							Login{" "}
						</Button>
					</div>
					<div className="create-account">Create account</div>
				</div>
			</div>
		</div>
	);
};

export default Login;
