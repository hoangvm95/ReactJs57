import React, { Component } from 'react'

export default class SanPham extends Component {
  render() {
    const {sanPham} = this.props;
    return (
      <div className='card'>
        <img src={sanPham.image} alt="..." height={350}/>
        <div className='card-body'>
          <h3>{sanPham.name}</h3>
          <p>{sanPham.price}</p>
          <button className='btn btn-dark' onClick={()=>{
            this.props.themGioHang(sanPham)
          }}>
            Thêm vào giỏ <i className='fa fa-cart-plus'> </i>
          </button>
        </div>
      </div>
    )
  }
}
