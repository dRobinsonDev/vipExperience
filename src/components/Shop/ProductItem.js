import React from 'react';
import './ProductItem.css';


export default class ProductItem extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			quantity: 1
		}
	}

	addToCart = () => {
		let cart = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : {};
		let id = this.props.product.id.toString();
		cart[id] = (cart[id] ? cart[id]: 0);
		let qty = cart[id] + parseInt(this.state.quantity);
		cart[id] = qty;
		localStorage.setItem('cart', JSON.stringify(cart));
	}
	handleInputChange = event => this.setState({[event.target.name]: event.target.value})
	
	render(){
		const { product } = this.props;
		return (
			<div className="productContainer">
		    <div className="card flex-card" style={{ marginBottom: "10px"}}>
				<img className="card-img-top" src={product.image} alt={product.name} />
			  <div className="card-body">
			    <h4 className="card-title">{product.name}</h4>
			    <p className="card-text">{product.description}</p>
					{product.type === "Vehicle" && <h5 className="card-text"><small>price: </small>${product.price} per hour</h5> }
					{product.type !== "Vehicle" && <h5 className="card-text"><small>price: </small>${product.price}</h5> }
			    	<div>
			    		<button className="btn btn-sm btn-warning float-right" onClick={this.addToCart}>Add to cart</button>
			    		<input type="number" value={this.state.quantity} name="quantity" onChange={this.handleInputChange} className="float-right" style={{ width: "60px", marginRight: "10px", borderRadius: "3px"}}/>
			    	</div> 
			  </div>
			</div>
			</div>
		)
	}
}