import React, { Component } from 'react'
import FRIinput from './FRIinput'

class FRIParaent extends Component {
    constructor(props) {
      super(props)
        this.inputRef = React.createRef();
    }
    clickHandler = () => {
        this.inputRef.current.focus()
    }
    
  render() {
    return (
      <div>
        <FRIinput ref={this.inputRef}/>
        <button onClick={this.clickHandler}>Submit</button>
      </div>
    )
  }
}

export default FRIParaent
