import React, { useContext } from 'react'; 

function Product(props) {
	const { id, productName, price, productImage } = props.data
	
	return (
		<div className="cartItem">
			<img src={productImage} alt={productName} />	
			<div className="description"	>
				<p><b>{productName}</b></p>
				<p>$ {price}</p>
			</div>
		</div>
	)
}

export default Product
