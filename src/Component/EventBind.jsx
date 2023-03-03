  import React, { Component } from 'react'
  class EventBind extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         message : "Hello"
      }

    //   this.clickHander = this.clickHander.bind(this);
    }
    // clickHander(){   
    //     this.setState({
    //         message : "GoodBye!"
    //     })
    // }


    clickHander = () => {
             this.setState({
                message : "GoodBye!"
        })
    }


    render() {
      return (
        <div>
          <h1>{this.state.message}</h1>
          {/* <button onClick={ this.clickHander.bind(this)}>Click</button> */}
          {/* Arrow function */}
          {/* <button onClick={() => this.clickHander()}>Click</button>  */}


          <button onClick={this.clickHander}>Click</button> 


        </div>
      )
    }
  }
  export default EventBind
  