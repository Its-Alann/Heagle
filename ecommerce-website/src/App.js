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
import SellerProducts from "./components/user/SellerProducts";
import User from "./components/user/User";
import Marketplace from "./components/user/Marketplace";
import EditProduct from "./components/user/EditProduct";
import Admin from "./components/user/Admin";
import Seller from "./components/seller/seller.js";
import ShoppingCart from "./components/cart/ShoppingCart.js";
import PaymentComponent from "./components/cart/Payment";

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
				<Link to="/seller"> Seller</Link>
				<Link to="/shoppingcart"> ShoppingCart</Link>

				{/* <Home /> */}

				<Routes>
					<Route path="/home" exact element={<Home update={setUpdate} updateValue={update}/>} />
					<Route path="/" exact element={<Navigate replace to="/home" />} />
					<Route path="/clothes" exact element={<Clothes />} />
					<Route path="/electronics" exact element={<Electronics />} />
					<Route path="/food" exact element={<Food />} />
					<Route path="/marketplace" exact element={<Marketplace />} />
					<Route path="/editProduct/:id" exact element={<EditProduct />} />
					<Route path="/login" exact element={<Login />} />
					<Route path="/register" exact element={<Register />} />
					<Route path="/login/SellerProducts/:id" element={<SellerProducts />} />
					<Route path="/login/SellerProducts/add/:id" element={<Marketplace />} />
					<Route path="/electronics/:id" element={<IndividualProductPage />} />
					<Route path="/clothes/:id" element={<IndividualProductPage />} />
					<Route path="/food/:id" element={<IndividualProductPage />} />
					<Route path="/login" exact element={<Login/>} />
					<Route path="/login/user/:id" element={<User/>} />
					<Route path="/register" exact element={<Register/>} />
					<Route path="/admin" exact element={<Admin/>} />
					<Route path="/seller" exact element={<Seller />} />
					<Route path="/shoppingcart" exact element={<ShoppingCart />} />
					<Route path="/cart" exact element={<ShoppingCart />} />
					<Route path="/payment" exact element={<PaymentComponent />} />

				</Routes>
				{/* <h2> Food </h2> */}

				<Footer />
			</Router>
		</div>
	);
}

export default App;
