import React from 'react'
import {AiOutlineShopping} from 'react-icons/ai';
import Cart from './Cart'
import { useStateContext } from '../context/StateContext';
import gatsbyIconImage from "../media/shoplogo.svg"
import SearchBar from './SearchBar';


const Navbar = () => {
  const {showCart, setShowCart, totalQuantities} = useStateContext()

  return (
    <div className='navbar-container'>
    <p className='logo'>
      <a href="/"> <img alt='' className='logo-image' src={gatsbyIconImage} /> </a>
      
    </p>
    <SearchBar />
    <button type='button' className='cart-icon' onClick={()=> setShowCart(true)}>
    <AiOutlineShopping />
    <span className='cart-item-qty'>{totalQuantities}</span>
    </button>
    {showCart && <Cart />}
    </div>
  )
}

export default Navbar