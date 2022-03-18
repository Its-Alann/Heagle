import ProductCards from '../products/ProductCards'
import './Home.css'
import { useEffect } from 'react'
const Home = (props) => {
  useEffect(()=>{
    if(props.updateValue !=0){
      props.update(props.updateValue + 1)
    console.log("App.js updated");
    }
  }, []);

  return (
    <div > <br/>
    <ProductCards/>
    </div>
    
  )
}
Home.propTypes = {}
export default Home