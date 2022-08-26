import React, { Component } from 'react';
import util from '../util'
export default class Products extends Component {

    render() {
        const productItems = this.props.products.map(product => (
            <div className="col-md-4 bg-dark border mt-1 mb-1 pt-1 pb-3" key={product.id}>
                <div className="thumbnail text-center">
                    <p className="text-white" href={`#${product.id}`}onClick={(e)=>this.props.handleAddToCart(e, product)}/>
                        <img src={`products/${product.sku}_2.jpg`} alt={product.title} />
                        <p className="pt-3">{product.title}</p>                        
                          
                    <b>{util.formatCurrency(product.price)}</b>
                    <button className="btn btn-primary" onClick={(e)=>this.props.handleAddToCart(e, product)}>Add to cart</button>
                </div>
            </div>
        ));

        return (
            <div className="row">
                {productItems}
            </div>
        )
    }
}
