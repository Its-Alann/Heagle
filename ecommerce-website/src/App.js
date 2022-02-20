
import './App.css';
import { BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom'
import Electronics from './components/categories/Electronics'
import Clothes from './components/categories/Clothes'
import Food from './components/categories/Food'
import IndividualProductPage from "./components/products/IndividualProductPage" 
import Footer from './components/Footer'

function App() {
  return (
    // <IndividualProductPage />
    <div className="App">
      <Router>

        <h1> Navbar </h1>
        <Link to="/"> Home </Link>
        <Link to="/electronics"> Electronics </Link>
        <Link to="/clothes"> Clothing </Link>
        <Link to="/food"> Food </Link>

        <Routes>
          <Route path="/clothes" exact element={<Clothes />} />
          <Route path ="/electronics" exact element={<Electronics/>}/>
          <Route path="/food" exact element={<Food />} />
          <Route path="/electronics/:id" element={<IndividualProductPage />} />
          <Route path="/clothes/:id" element={<IndividualProductPage />} />
          <Route path="/food/:id" element={<IndividualProductPage />} />

        </Routes>
        {/* <h2> Food </h2> */}
        
       <Footer/>

      </Router>
      
    </div> 
  );
}

export default App;