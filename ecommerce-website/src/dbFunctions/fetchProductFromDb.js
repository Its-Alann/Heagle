import Axios from 'axios';
import itemList from '../tempItemsDatabase';

// const registerUserDev = ()=>{
//     Axios.post("http://localhost:3001/registerUser", {
//       email: email,
//       password: password,
//       firstName: firstName,
//       lastName: lastName
//     }).then(()=>{
//       console.log("User successfully registered")
//     })
//   }

const fetchProductListFromDbDev = () =>{
	var updatedItemList;
	Axios.get("http://localhost:3001/fetchProductList").then(res => {
		//console.log(res.data);
		updatedItemList = itemList.concat(res.data);
		console.log(updatedItemList);
	});
	return
}

export default fetchProductListFromDbDev;