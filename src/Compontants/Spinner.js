import React, { Component } from 'react'
import Spiner from './ZZ5H.gif'
export default class Spinner extends Component {
  render() {
    return (
      <div className="text-center" my-4>
             <img src={Spiner} alt="Spinner" height={"150px"} />
      </div>
    )
  }
}
