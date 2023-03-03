import axios from 'axios'
import React, { useEffect, useState } from 'react'

function DataFetchHookById() {
    const [post,setPost] = useState({})
    const [id,setId] = useState(1)
    const [idFromButtonClick,setIdFromButtonClick] = useState(1)

    const handlerClick = () => {
      setIdFromButtonClick(id)
    }
    useEffect( () => {
        axios.get(`https://jsonplaceholder.typicode.com/posts/${idFromButtonClick}`)
        .then(res => {
            setPost(res.data)
        })
        .catch(error => {
            console.log("Error")
        })
    },[idFromButtonClick])

  return (
    <div>
      <button type='button' onClick={handlerClick}>Fetch Data</button>
      <input type='text' value={id} onChange={e => setId(e.target.value)} />
      <h1>{post.title}</h1>
    </div>
  )
}

export default DataFetchHookById
