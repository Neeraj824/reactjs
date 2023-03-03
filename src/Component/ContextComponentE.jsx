import React, { Component } from 'react'
import ContextComponentF from './ContextComponentF'
import UserContext from './UserContext'
class ContextComponentE extends Component {
    static contextType = UserContext
  render() {
    return (
      <div>
        <h1> Context Value {this.context}</h1>
        <ContextComponentF/>
      </div>
    )
  }
}

export default ContextComponentE
