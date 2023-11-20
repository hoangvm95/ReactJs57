import React, { Component } from 'react'
import Header from '../Components/Header'
import { Outlet } from 'react-router-dom'

export default class HomeTemplate extends Component {
  render() {
    return (
      <div>
        <Header/>
        <Outlet/>
      </div>
    )
  }
}
