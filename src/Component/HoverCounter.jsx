import React, { Component } from 'react'
import UpdateComponent from './withCounter'
class HoverCounter extends Component {
    // constructor(props) {
    //   super(props)
    
    //   this.state = {
    //      count: 0
    //   }
    // }
    // incrementCounter = () => {
    //     this.setState( prevState => {
    //         return { count: prevState.count + 1 }
    //     })
    // }
  render() {
    return (
      <div>
        <h2 onMouseOver={this.props.incrementCounter}>{this.props.name}  Hover {this.props.count} times</h2>
      </div>
    )
  }
}

export default UpdateComponent(HoverCounter,10)
