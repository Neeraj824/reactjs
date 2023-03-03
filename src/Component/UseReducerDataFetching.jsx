import React, { useEffect, useState } from 'react'
import axios from 'axios'
function UseReducerDataFetching() {
    const[loading,setLoading] = useState(true)
    const[error,setError] = useState('')
    const[post,setPost] = useState({})

    useEffect( () => {
        axios.get(`https://jsonplaceholder.typicode.com/posts/1`)
        .then(res => {
            setLoading(false)
            setPost(res.data)
            setError('')
        })
        .catch(error => {
            setLoading(false)
            console.log("Error")
            setPost({})
            setError('Somting went Wrong!')
        })
    },[])

  return (

    <div>
      {loading? 'Loaging' : post.title}
      {error ? error : null}
    </div>
  )
}

export default UseReducerDataFetching
