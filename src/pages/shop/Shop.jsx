import React from 'react'
import { PRODUCTS } from "../../data/PRODUCTS"
import Product from "./Product"
import "./shop.css"
import { ShopContext } from "../../context/ShopContext"

function Shop() {
  return (
    <div className="shop">

      <div className="shopTitle">
        <h1>Cupcakes Tech Shop</h1>
      </div>

      <div className="products">
        {
          PRODUCTS.map((product) => {
            return <Product data={product} />
        })}
      </div>

    </div>
  )
}

export default Shop
