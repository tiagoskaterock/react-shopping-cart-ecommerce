import { React, useContext } from 'react'
import { PRODUCTS } from "../../data/PRODUCTS"
import Product from "../shop/Product"
import { ShopContext } from "../../context/ShopContext"
import CartItem from "./CartItem"
import "./cart.css"
import { useNavigate } from "react-router-dom"

function Cart() {

  const {cartItems, getTotalCartAmount} = useContext(ShopContext)
  const totalAmount = getTotalCartAmount()
  const navigate = useNavigate()

  return (
    <div className="cart">
    {
      totalAmount > 0 ? 
      <div><h1>Your Cart Items</h1></div> : 
      <div><h1>Your cart is empty</h1></div>       
    }

      <div className="cartItems">
        {
          PRODUCTS.map((product) => {
            if (cartItems[product.id] !== 0) {
              return <CartItem data={product} />              
            }
          })
        }
      </div>

      {
        totalAmount > 0 ?
        <div className="checkout">
          <p>Subtotal: ${totalAmount}</p>
          <button onClick={ () => navigate("/") }>Continue Shopping</button>
          <button>Checkout</button>
        </div>  :      
        <div className="checkout">          
          <button onClick={ () => navigate("/") }>Continue Shopping</button>
          <button onClick={ () => navigate("/") }>Checkout</button>
        </div>
      }

    </div>
    )
}

export default Cart
