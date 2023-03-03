import React, { Component } from 'react'
import Input from './Input'
class FocusRef extends Component {

    constructor(props) {
      super(props)
        this.componentRef = React.createRef()
    }
    
    clickHandler = () => {
        this.componentRef.current.foucsInput()
    }

  render() {
    return (
      <div>
        <Input ref = {this.componentRef}/>
        <button onClick={this.clickHandler}>Foucs Input</button>
      </div>
    )
  }
}

export default FocusRef
