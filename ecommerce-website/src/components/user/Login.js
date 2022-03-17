import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Axios from "axios";
import "./Login.css";
import { Card, Button, Container, Row } from "react-bootstrap";

const Login = (props) => {
	//States
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [user, setUser] = useState({});
	const [errMessage, setErrMessage] = useState("");

	const navigate = useNavigate();

	useEffect(() => {
		const currentUser = localStorage.getItem("user");
		if (currentUser) {
			console.log("found a user");
			const foundUser = JSON.parse(currentUser);
			console.log(foundUser);
			setUser(foundUser);
		}
	}, []);

	//Runs when changes are made to the email or password state
	// useEffect(() => {
	// 	console.log(email);
	// 	console.log(password);
	// }, [email, password]);

	//Validates user's credential
	useEffect(() => {
		if (email === "") {
		} else if (typeof user === "undefined") {
			//If the email is not found in the db
			setErrMessage("User not found");
			//console.log("User not found");
		} else if (user.password !== password) {
			//If the password do not match the one in the db
			setErrMessage("Invalid password");
			//console.log("Password do not match");
		} else {
			//If credz are valid
			setErrMessage(user.firstName + " LOGGED IN");
			localStorage.setItem("user", JSON.stringify(user));
			navigate("/home");
		}
	}, [user]);

	const handleLogin = async (e) => {
		e.preventDefault();
		const url = "https://heagle.herokuapp.com/getUserByEmail/" + email;
		const devurl = "http://localhost:3001/getUserByEmail/" + email;
		try {
			const response = await Axios.get(url);
			//console.log(response.data[0]);
			setUser(response.data[0]);
		} catch (err) {
			setErrMessage("User not found");
			//console.log("User not found: " + err);
		}
	};

	const handleLogout = () => {
		setEmail("");
		setPassword("");
		setUser({});
		setErrMessage("");
		localStorage.removeItem("user");
		console.log("User logged out.");
	};

	//If a user is already logged in
	if (typeof user.email !== "undefined") {
		return (
			<div className="page">
				<h1>Login</h1>
				<h2>{user.firstName + " is logged in"}</h2>
				<div className="button">
					<Button className="btn" onClick={handleLogout}>
						{" "}
						Logout{" "}
					</Button>
				</div>
			</div>
		);
	}
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
