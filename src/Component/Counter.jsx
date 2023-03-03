import React, { Component } from 'react'

class Counter extends Component {
   
    constructor(props){
        super(props)

        this.state = {
            count : 0
        }
        
    }


    increment(){
        // this.setState({
        //     count : this.state.count + 1
        // })
        this.setState((prevState) => ({
            count: prevState.count + 1
        }))
    }
    incrementFive(){
        this.increment()
        this.increment()
        this.increment()
        this.increment()
        this.increment()
    }


  render() {
    const {name,profession} = this.props;
    return (
      <div>
        <div>Count : {this.state.count}</div>
        <div>Name: {name} and my profession is: {profession}</div>
        <button onClick={() => this.incrementFive()}>CLICK HERE</button>
      </div>
    )
  }
}
export default Counter