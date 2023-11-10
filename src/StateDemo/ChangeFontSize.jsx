import React, { Component } from 'react'

export default class ChangeFontSize extends Component {
//State: là thuộc tính có sẵn của class Component, dùng để quản lý giá trị thay đổi của component
    state={
        fsize:16
    }
  render() {
    return (
      <div className='container'>
        <p style={{fontSize:this.state.fsize}}>Sương</p>
        <button className='btn btn-primary' onClick={()=>{
            let newState = {fsize:this.state.fsize +10}
            this.setState(newState);
        }}> + </button>

      </div>
    )
  }
}
