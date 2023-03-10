import axios from 'axios'
import React, { useEffect, useState } from 'react'

function DataFetchHook() {
    const [posts,setPosts] = useState([])

    useEffect( () => {
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then( (res) => {
            console.log(res)
            setPosts(res.data)
        })
        .catch(error => {
            console.log("Error")
        })
    },[])

  return (
    <div>
        <ul>
      {
        
        posts.map(post => (
            <li key={post.id}>{post.title}</li>
        ))
        
      }
      </ul>
    </div>
  )
}

export default DataFetchHook
