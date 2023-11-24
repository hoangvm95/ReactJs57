import React, { Component } from 'react'
import ProductForm from './ProductForm'

export default class ReactForm extends Component {
state={
  arrProduct:[
    {id:'2',name:'b',price:'123',type:'Laptop',description:'fsfdsfsdf',img:'abc.com'},
    {id:'4',name:'c',price:'456',type:'car',description:'jgkjkhjk',img:'def.com'}
  ],
  productEdit: {
    id: 2,
    name: 'iphone XS',
    price: 2000,
    img: 'https://picsum.photos/id/2/200/200',
    type: 'phone',
    description: 'iphone XS'
  }
}
addProduct = (newProduct) =>{
  this.state.arrProduct.push(newProduct);
  this.setState({
    arrProduct: this.state.arrProduct
  })
}

deleteProduct =(idProduct)=>{
this.state.arrProduct = this.state.arrProduct.filer(prod=> prod.id !== idProduct)
this.setState({
  arrProduct:this.state.arrProduct
})
}

editProduct = (prodClick)=>{
  console.log(prodClick);
  this.setState({
    productEdit:prodClick
  })
}
  render() {
    return (
      <div className='container'>
        <h3>Product Management</h3>
        <ProductForm addProduct={this.addProduct} productEdit={this.state.productEdit}/>
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
                {this.state.arrProduct.map((prod) => {
                  return <tr key={prod.id}>
                    <td>{prod.id}</td>
                    <td>{prod.name}</td>
                    <td><img src={prod.img} alt="" width={50} height = {50}/></td>
                    <td>{prod.price}</td>
                    <td>{prod.type}</td>
                    <td>{prod.description}</td>
                    <td>
                      <button onClick={()=>{
                        this.deleteProduct(prod.id)
                      }} className='btn btn-danger'><i className='fa fa-close'></i></button>

                      <button onClick={()=>{this.editProduct(prod)}} className='btn btn-primary mx-2'><i className='fa fa-edit'></i></button>
                    </td>
                  </tr>
                })}
            </tbody>
        </table>

      </div>
    )
  }
}
