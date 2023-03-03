import React, { Component } from 'react'
import UpdateComponent from './withCounter'
class ClickCounter extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         count:0
      }
    }
    incrementCounter = () => {
        this.setState(prevState =>  {
            return {count : prevState.count + 1}
        })
    }

  render() {
    return (
      <div>
        <button onClick={this.props.incrementCounter}>{this.props.name} Click  {this.props.count} Counter</button>
      </div>
    )
  }
}

export default UpdateComponent(ClickCounter,5)
