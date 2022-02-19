
import './App.css';
import Axios from 'axios';
import { useState } from "react";

function App() {
  //States
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const registerUserDev = ()=>{
    Axios.post("http://localhost:3001/registerUser", {
      email: email,
      password: password,
      firstName: firstName,
      lastName: lastName
    }).then(()=>{
      console.log("User successfully registered")
    })
  }
  return (
    <div className="App">
      <label>Email</label>
      <input type="text" onChange={(event)=> setEmail(event.target.value)}></input>
      <label >Password</label>
      <input type="text" onChange={(event)=> setPassword(event.target.value)}></input>
      <label>FirstName</label>
      <input type="text" onChange={(event)=> setFirstName(event.target.value)}></input>
      <label>LastName</label>
      <input type="text" onChange={(event)=> setLastName(event.target.value)}></input>
      <button onClick={registerUserDev}>Register</button>
    </div>
  );
}

export default App;
