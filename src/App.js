import React, { Component } from 'react'
import Countries from './components/Countries'
import Navbar from './components/Navbar'

export default class App extends Component {
  render() {
    return (
      <div>
        <Navbar/>
        <Countries/>
      </div>
    )
  }
}
