import React, { Component } from 'react'

 class Form extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         username:'',
         comments:'',
         topic:'react'
      }
    }  

    handleUsernameChange = (event) => {
        this.setState({
            username:event.target.value
        })
    }

    handleCommmentsChange = event => {
        this.setState({
            comments:event.target.value
        })
    }
    handleTopicChange = (event) => {
        this.setState({
            topic:event.target.value
        })
    }
    
    onSubmitHandler = event => {
         alert(`${this.state.username}  ${this.state.comments}  ${this.state.topic}` )
         event.preventDefault()
    }
  render() {
    return (
     <form onSubmit={this.onSubmitHandler}>
        <div>
            <lable>Username</lable>
            <input type='text' value={this.state.username} onChange={this.handleUsernameChange} />  
        </div>
        <div>
            <lable>Comment</lable>
            <textarea value={this.state.comments} onChange={this.handleCommmentsChange} />  
        </div>
        <div>
            <lable>Topic</lable>
            <select value={this.state.topic} onChange={this.handleTopicChange}>
                <option value="react">React</option>
                <option value="vuejs">Vue Js</option>
                <option value="test">TEST</option>
            </select>
        </div>
        <div>
            <button value='submit'>Sumbit</button> 
        </div>

     </form>
    )
  }
}

export default Form
