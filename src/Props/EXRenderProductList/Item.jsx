import React, { Component } from 'react'

export default class Item extends Component {
  render() {
    let {product} = this.props;
    return (
      <div className='card'>
        <img src={product.image} alt="" />
        <div className='card-body'>
          <h3>{product.name}</h3>
          <p>{product.price}</p>
          <button className='btn btn-dark'>
            Add to card <i className='fa fa-cart-plus'></i>
          </button>
        </div>
      </div>
    )
  }
}