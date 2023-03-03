import React, { Component } from 'react'

class UserGretting extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         isLoggedIn : false
      }
    }
    
  render() {
    if(this.state.isLoggedIn) 
    {
        return (<div>Welcome Neeraj</div>)
    }else{
        return (<div>Welcome Guest</div>)
    }
    let message
    if(this.state.isLoggedIn) 
    {
       message = 'Welcome Neeraj'
    }else{
        message = 'Welcome Guest'
    }
    return (<div>{message}</div>);

    return (this.state.isLoggedIn) ? <div>Welcome Neeraj</div> : <div>Welcome Guest</div>


  }
}

export default UserGretting
