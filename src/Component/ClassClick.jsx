import React, { Component } from 'react'

class ClassClick extends Component {
    constructor(props){
        super(props)
        this.state = {
                "count" : 0  
        }
    }
    clickClassHandler(){
        console.log("Click Class")
        alert("Click Class")
    }
  render() {
    return (
      <div>
        <button onClick={this.clickClassHandler}> Click Class Button</button>
      </div>
    )
  }
}

export default ClassClick