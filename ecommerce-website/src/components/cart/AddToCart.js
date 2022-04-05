import { useEffect, useState } from "react";
import  Axios from "axios";
import baseUrl from "../../SystemVariables";
const addToCart = (product, qty) => {
	const cartFromLocalStorage = JSON.parse(localStorage.getItem("cart") || "[]");

	const cartProduct = {
		id: product.id,
		name: product.name,
		quantity: qty,
		price: (qty*product.price),
	}

	const prodInCart = cartFromLocalStorage.find(p => p.id == product.id);//Contains the product if already in the cart, undefined otherwise
	if(prodInCart){
		const index = cartFromLocalStorage.indexOf(prodInCart);
		cartFromLocalStorage[index].quantity += qty;
		cartFromLocalStorage[index].price += (qty * product.price);
		localStorage.setItem('cart', JSON.stringify([...cartFromLocalStorage]));
	}else{
		localStorage.setItem('cart', JSON.stringify([...cartFromLocalStorage, cartProduct]));
	}
	

	
	
}

export default addToCart;