import { useEffect, useState } from "react";
import  Axios from "axios";
import baseUrl from "../../SystemVariables";
const addToCart = (product, qty) => {
	//Fetches the cart from the local storage, or creates it if it does not exist
	const cartFromLocalStorage = JSON.parse(localStorage.getItem("cart") || "[]"); 

	//Verifies if the product is already in the cart on local storage
	const prodInCart = cartFromLocalStorage.find(p => p.id == product.id);//Contains the product if already in the cart, undefined otherwise
	if(prodInCart){
		//Gets the index of the product inside the cart array
		const index = cartFromLocalStorage.indexOf(prodInCart);

		//Updates the quantity and price
		cartFromLocalStorage[index].quantity += qty;
		cartFromLocalStorage[index].price += (qty * product.price);

		//Replaces the old cart inside the local storage with the new one.
		localStorage.setItem('cart', JSON.stringify([...cartFromLocalStorage]));
	}else{
		//Creates the new object that will be stored inside the cart in the local storage
		const cartProduct = {
			id: product.id,
			name: product.name,
			quantity: qty,
			price: (qty*product.price),
		}
		//Sets the previous cart and the newly added product inside the local storage
		localStorage.setItem('cart', JSON.stringify([...cartFromLocalStorage, cartProduct]));
	}
	

	
	
}

export default addToCart;