import React, { Component } from 'react'

export default class GioHang extends Component {
  render() {
    const {arrGioHang} = this.props
    return (
      <div>
        <h3 className='mt-2'>Giỏ hàng</h3>
        <table className='table'>
            <thead>
                <tr>
                    <th>ID sản phẩm</th>
                    <th>Tên sản phẩm</th>
                    <th>Giá</th>
                    <th>Hình ảnh</th>
                    <th>Số lượng</th>
                    <th>Thành tiền</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {this.props.arrGioHang.map((arrsp) =>{
                    return <tr key={arrsp.id}>
                    <td>{arrsp.id}</td>
                    <td>{arrsp.name}</td>
                    <td>{arrsp.price}</td>
                    <td>
                        <img src={arrsp.image} alt="" width={100} height={100} />
                    </td>
                    <td>
                        <button className='btn btn-dark' onClick={() =>{ this.props.capNhatGioHang(arrsp.id,1) }}>+</button>
                        {arrsp.soLuong}
                        <button className='btn btn-dark' onClick={() =>{ this.props.capNhatGioHang(arrsp.id,-1) }}>-</button>
                    </td>
                    <td>{arrsp.price * arrsp.soLuong}</td>
                    <td>
                        <button className='btn btn-danger' onClick={() => { this.props.xoaGioHang(arrsp.id) }}>Xoá</button>
                    </td>
                    </tr>
                })}
                
            </tbody>
        </table>
      </div>
    )
  }
}
