import { React, useContext } from 'react'
import { PRODUCTS } from "../../data/PRODUCTS"
import Product from "../shop/Product"
import { ShopContext } from "../../context/ShopContext"
import CartItem from "./CartItem"
import "./cart.css"

function Cart() {

  const {cartItems, getTotalCartAmount} = useContext(ShopContext)
  const totalAmount = getTotalCartAmount()

  return (
    <div className="cart">
      <div><h1>Your Cart Items</h1></div>

      <div className="cartItems">
        {
          PRODUCTS.map((product) => {
            if (cartItems[product.id] !== 0) {
              return <CartItem data={product} />              
            }
          })
        }
      </div>

      <div className="checkout">

        <p>Subtotal: ${totalAmount}</p>
        <button>Continue Shopping</button>
        <button>Checkout</button>

      </div>

    </div>
    )
}

export default Cart
