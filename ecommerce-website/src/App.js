import "./App.css";
import Axios from "axios";
import { useState } from "react";
import {
	BrowserRouter as Router,
	Route,
	Routes,
	Link,
	Navigate,
} from "react-router-dom";
import Electronics from "./components/categories/Electronics";
import Clothes from "./components/categories/Clothes";
import Food from "./components/categories/Food";
import Login from "./components/user/Login.js";
import Register from "./components/user/Register.js";
import IndividualProductPage from "./components/products/IndividualProductPage";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Home from "./components/home/Home";
import ProductLoader from "./components/products/productLoader";
import Register from "./components/user/Register"
import SellerProducts from "./components/user/SellerProducts";


function App() {
	//States
	const [update, setUpdate] = useState(0); //Used to re-render the app component after the products are fetched from the db
	
	return (
		<div className="App">
			<ProductLoader update={setUpdate} updateValue={update}></ProductLoader>
			<Router>
				<Navbar />
				{/*<Link to="/"> Home </Link>
        <Link to="/electronics"> Electronics </Link>
        <Link to="/clothes"> Clothing </Link>
      <Link to="/food"> Food </Link>*/}
				<Link to="/login"> Login </Link>
				<Link to="/register"> Register</Link>

				{/* <Home /> */}

				<Routes>
					<Route path="/home" exact element={<Home update={setUpdate} updateValue={update}/>} />
					<Route path="/" exact element={<Navigate replace to="/home" />} />
					<Route path="/clothes" exact element={<Clothes />} />
					<Route path="/electronics" exact element={<Electronics />} />
					<Route path="/food" exact element={<Food />} />
					<Route path="/login" exact element={<Login />} />
					<Route path="/register" exact element={<Register />} />
					<Route path="/login/SellerProducts/:id" element={<SellerProducts />} />
					<Route path="/electronics/:id" element={<IndividualProductPage />} />
					<Route path="/clothes/:id" element={<IndividualProductPage />} />
					<Route path="/food/:id" element={<IndividualProductPage />} />
					<Route path="/register" exact element={<Register/>} />
				</Routes>
				{/* <h2> Food </h2> */}

				<Footer />
			</Router>
		</div>
	);
}

export default App;
