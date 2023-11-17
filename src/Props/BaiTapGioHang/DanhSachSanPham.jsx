import React, { Component } from 'react'
import SanPham from './SanPham'

export default class DanhSachSanPham extends Component {
  render() {
    return (
      <div>
        <h3 className='text-center'>Danh sách sản phẩm</h3>
        <div className='row'>
            {this.props.dataProduct.map((sanPham) =>{
                return <div className='col-4' key={sanPham.id}>
                <SanPham sanPham={sanPham} themGioHang = {this.props.themGioHang}/>
            </div>
            })}                 
        </div>
      </div>
    )
  }
}
