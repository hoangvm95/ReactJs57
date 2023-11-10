import React, { Component } from 'react'

import style from './StyleComponent.module.scss';
export default class StyleComponent extends Component {
  render() {
    let fz ='20px';
    let classNameCss = 'text-yellow'
    let obStyle = {
        fontSize:fz,
        color:'white',
        backgroundColor: 'red',
        padding:'15px'
    }
    return (
        <div className='container'>
        <p className={`bg-danger ${style[classNameCss]}`}>Leo Hoàng</p>
      
        <div style={obStyle}>
            test Style
        </div>
      </div>
    )
  }
}
