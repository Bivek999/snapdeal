import { useContext, useEffect } from 'react';
import './App.css';
import Left from './component/Left';
import Main from './component/Main';
import NavBar from './component/NavBar';
import Searchbar from './component/Searchbar';
import ContextData from './context/product-data';


function App() {
  const { setAllProducts,setCategories,setActive,allProducts }=useContext(ContextData);
  useEffect(()=>{
    async function getData(){
      const response=await fetch("https://product-data-api-dfa74-default-rtdb.firebaseio.com/productdata.json")
      const data=await response.json();
      
      setAllProducts(data['-NOEg2M66-9biUcVftr5']);
      setCategories(data['-NOir0HKsESo6Ix-AHjt']);
      // setActive(allProducts)
      //data={-NOEg2M66-9biUcVftr5:{}, -NOir0HKsESo6Ix-AHjt:{}}
      // console.log(allProduct);
      // console.log(category);
    }
    getData();
  },[])
  return (
    <div className="App">
      <NavBar/>
      <Searchbar/>
      <Main/>
    </div>
  );
}

export default App;
