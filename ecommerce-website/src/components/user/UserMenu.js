import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import Axios from "axios";
import "./Login.css";
import { Card, Button, Container, Row } from "react-bootstrap";
import baseUrl from "../../SystemVariables";

const UserMenu = (props) => {
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
			navigate("/home"); //Refreshes the App.js component (mainly for the navbar).
		}
	}, [user]);

	const handleLogout = () => {
		setEmail("");
		setPassword("");
		setUser({});
		setErrMessage("");
		localStorage.removeItem("user");
		console.log("User logged out.");
		navigate("/home");
	};

	//If a user is already logged in
	if (JSON.parse(localStorage.getItem("user"))) {
		const currentUser = localStorage.getItem("user");
		const foundUser = JSON.parse(currentUser);
		console.log(foundUser.id);

		return (
			<div className="page">
				<h1>User Menu</h1>
				<h2>{user.firstName + " is logged in"}</h2>

				<div className="button">
					<Link to={`/login/user/${foundUser.id}`}>
						<Button className="btn">Edit Profile</Button>
					</Link>
				</div>
				{/* To view: Items of Seller */}
				<div className="button">
					<Link to={`/login/SellerProducts/${foundUser.id}`}>
						<Button className="btn"> View my products </Button>
					</Link>
				</div>

				{/* To add: Item of Seller */}
				<div className="button">
					<Link to={`/login/SellerProducts/add/${foundUser.id}`}>
						<Button className="btn"> Add a product </Button>
					</Link>
				</div>

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
			<h1>No user is currently logged in</h1>
		</div>
	);
};

export default UserMenu;
