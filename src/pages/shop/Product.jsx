function Product(props) {

	const {id, productName, price, productImage} = props.data
	
	return (
		<div className="product">
			{productName}
		</div>
	)
}

export default Product
