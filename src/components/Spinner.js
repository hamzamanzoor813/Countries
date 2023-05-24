import React, { Component } from 'react'
import Loading from '../loading.gif'

export default class Spinner extends Component {
  render() {
    return (
      <div className='text-center'>
        <img width="10%" src={Loading}/>
      </div>
    )
  }
}
