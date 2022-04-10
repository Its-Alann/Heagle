import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import Axios from "axios";
import "./Login.css";
import { Card, Button, Container, Row } from "react-bootstrap";
import baseUrl from "../../SystemVariables";

const Login = (props) => {
	//States
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [user, setUser] = useState({});
	const [errMessage, setErrMessage] = useState("");
	const currentUser = localStorage.getItem("user");
	const foundUser = JSON.parse(currentUser);
	const [cart, setCart] = useState({});

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
			handleCart(user.id);
			navigate("/home"); //Refreshes the App.js component (mainly for the navbar).
		}


	}, [user, cart]);

	// Import the cart values from db to localStorage for the user logged in
	const handleCart = (pId) => {
		const cartUrl = baseUrl + "/getCart/" + pId;
		try {
			Axios.get(cartUrl).then((response) => {
				setCart(response.data[0].cartContent);
				localStorage.setItem("cart", (response.data[0].cartContent));
			});

		} catch (err) {
			setErrMessage("Cart not found");
		}
	};

	const handleLogin = async (e) => {
		e.preventDefault();
		const url = baseUrl + "/getUserByEmail/" + email;
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
		localStorage.removeItem("cart");
		console.log("User logged out & cart removed.");
		navigate("/home");
	};

	const sellerLoggedIn_ViewProducts = () => {
		if (localStorage.getItem("user").includes("typeUser\":\"seller") || localStorage.getItem("user").includes("typeUser\":\"admin")){ 
			return (

				<Link to={`/login/SellerProducts/${foundUser.id}`}>
					<Button className="btn" >
						{" "}
						View my products{" "}
					</Button>
				</Link>
			)
		}

	}

	const displayAllUsers  = () => {
		if (localStorage.getItem("user").includes("typeUser\":\"admin")) {
			return (
				<Link to={`/admin`}>
					<Button className="btn" >
						{" "}
						View all users{" "}
					</Button>
				</Link>
			)
		}
	}

	// Redirect to Admin Action Page, where admin can manager user's request
	const displayAdminAction  = () => {
		if (localStorage.getItem("user").includes("typeUser\":\"admin")) {
			return (

				<Link to={`/adminAction`}>
					<Button className="btn" >
						{" "}
						View all Admin's actions{" "}
					</Button>
				</Link>
			)
		}
	}

	const sellerLoggedIn_AddProduct = () => {
		if (localStorage.getItem("user").includes("typeUser\":\"seller") || localStorage.getItem("user").includes("typeUser\":\"admin")){ 
			return (
				<Link to={`/login/SellerProducts/add/${foundUser.id}`}>
				<Button className="btn" >
					{" "}
					Add a product{" "}
				</Button>
			</Link>
			)
		}
	}

	const showAddProductBtn = () => {
		if (localStorage.getItem("user").includes("typeUser\":\"admin" || "typeUser\":\"seller")) {
			return (

				<Link to={`/login/SellerProducts/add/${foundUser.id}`}>
					<Button className="btn" >
						{" "}
						Add a product{" "}
					</Button>
				</Link>
			)
		}
	}

	//If a user is already logged in
	if (JSON.parse(localStorage.getItem("user"))) {

		console.log(foundUser.id);

		return (
			<div className="page">
				<h1>Login</h1>
				<h2>{user.firstName + " is logged in"}</h2>
				
				{/* To edit: profile
				<div className="button">

				<Link to={`/login/EditLogin/${foundUser.id}`}>
					<Button className="btn productBtn" >
						{" "}
						Edit my Profile{" "}
					</Button>
				</Link>
				</div> */}
				
				{/* To view: Items of Seller */}
				
				<div className="button">
					{sellerLoggedIn_ViewProducts()}
				</div>
				
				<div className="button">
					{displayAllUsers()}
				</div>

				{/* To add: Item of Seller */}
				<div className="button">
				{sellerLoggedIn_AddProduct()}
				</div>
				
				{/* To manage: User requests */}
				<div className="button">
				{displayAdminAction()}
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
					<div className="create-account">
						<Link exact to="/register">Create account</Link></div>
				</div>
			</div>
		</div>
	);
};

export default Login;
