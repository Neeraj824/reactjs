import React, { Component } from 'react'
import { UserComsumer } from './UserContext'

class ContextComponentF extends Component {
  render() {
    return (
        <UserComsumer>
            { (username) => {
                return ( <div>Hi {username}</div>)
            } 
            }
        </UserComsumer>
     
    )
  }
}

export default ContextComponentF
