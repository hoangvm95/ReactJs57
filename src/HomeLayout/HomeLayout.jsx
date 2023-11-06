import React, { Component } from 'react'
import Header from './Header'
import Body from './Body'
import Footer from './Footer'

export default class HomeLayout extends Component {
  render() {
    return (
    <div>

        <div>
            <Header/>
            </div>
        <div className='d-flex'>
            <div className='w-50'>
            <Body/>
            </div>
        </div>
        <div>
            <Footer/>
        </div>
    </div>
    )
  }
}
