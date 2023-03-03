import React, { Component } from 'react'
import axios from 'axios'
class AxiosUserForm extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         userId: "",
         title: "",
         body: "",
      }
    }
    changeHander = (e) => {
         this.setState({
            [e.target.name]:e.target.value
         })
    }  
    submitHander = (e) => {
        e.preventDefault()
        console.log(this.state)
    }
  render() {
    const {userId,title,body} = this.state
    return (
      <div>
        <form onSubmit={this.submitHander}>
            <div>
                <input type="text" name="userId" value={userId} onChange={this.changeHander}/>
            </div>
            <div>
                <input type="text" name="title" value={title} onChange={this.changeHander}/>
            </div>
            <div>
                <input type="text" name="body" value={body} onChange={this.changeHander}/>
            </div>
            <button>Submit</button>
        </form>
         
      </div>
    )
  }
} 

export default AxiosUserForm
