import React, { Component } from 'react'
class RenderClickCounter extends Component {
  render() {
    return (
      <div>
        <button onClick={this.props.incrementCount}>{this.props.name} Click  {this.props.count} Counter</button>
      </div>
    )
  }
}

export default RenderClickCounter
