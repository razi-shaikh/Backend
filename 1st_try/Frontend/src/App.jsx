import React from 'react'
import './App.css'
import { useState,useEffect } from 'react'
import axios from 'axios'

function App() {
  const [joke,setJoke] = useState([])

  // useEffect(() => {
  //     const data = fetch('/api/jokes')
  //     .then((res)=>(res.json()))
  //     .then((res)=>(setJoke(res)))
  //     .catch((e)=>(console.log('error : ',e)))
  // }, [])
  useEffect(() => {
        axios.get('/api/jokes')
        .then((res)=>{
          setJoke(res.data)
        })
        .catch((e)=>(console.log('error : ',e)))
    }, [])
  return (
    <div>
      <h2>Jokes</h2>
      <h4>Total Jokes : {joke.length}</h4>
      {
        joke.map((res)=>{
          return (
            <div key={res.id}>
              <p>{res.title}</p>
              <p>{res.jokes}</p>
            </div>
          )
        })
      }
    </div>
  )
}

export default App
