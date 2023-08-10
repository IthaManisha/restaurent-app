import logo from './logo.svg';
import React,{useState} from 'react'
import './App.css';
import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals';
import Cart from './components/Cart/Cart';

function App() {
  const[isCartOpen,setIsCartOpen]=useState(false);
  const showHandler=()=>{
    setIsCartOpen(true);
  }
  const hideHandler=()=>{
    setIsCartOpen(false);
  }
  return (
    <>
    {isCartOpen && <Cart   cartHideHandler={hideHandler}/>}
    <Header cartShowHandler={showHandler}/>
    <main>
      <Meals/>
    </main>
    </>
  );
}

export default App;
