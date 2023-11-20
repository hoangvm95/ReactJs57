import React, { Component } from 'react'
import ProductForm from './ProductForm'

export default class ReactForm extends Component {
  render() {
    return (
      <div className='container'>
        <h3>Product Management</h3>
        <ProductForm/>
        <table className='table'>
            <thead>
                <tr>
                    <td>Id</td>
                    <td>Name</td>
                    <td>Img</td>
                    <td>Price</td>
                    <td>Type</td>
                    <td>Description</td>
                </tr>
            </thead>
            <tbody>
                
            </tbody>
        </table>

      </div>
    )
  }
}
