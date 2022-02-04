import './App.css';

function App() {
  return <div className="App">
    <h1> Register account </h1>

    <div class = "form"> 
    <label> Email address</label>
    <input type="text" name="email"/>
    <label> Password </label>
    <input type="text" name="password"/>

    <button> Submit Credentials </button>
    </div>
  
  </div>;
}

export default App;
