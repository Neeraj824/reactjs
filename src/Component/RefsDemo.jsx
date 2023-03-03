import React, { Component } from 'react'

class RefsDemo extends Component {
    constructor(props) {
      super(props)
        this.inputRef = React.createRef() // 1st Approch
        this.cbRef = null
        this.setCbRef  = element => {    // 2nd Approch
            this.cbRef = element
        }
    }
    componentDidMount(){
        // this.inputRef.current.focus()
        if(this.cbRef){
            this.cbRef.focus()
        }
    }
    handleClick = () => {
        alert(this.inputRef.current.value)
        alert(this.cbRef.value)
    }
  render() {
    return (
      <div>
            <input type="text" ref={this.inputRef}  />
            <input type="text" ref={this.setCbRef}  />
            <button onClick={this.handleClick}>Submit</button>
      </div>
    )
  }
}

export default RefsDemo
