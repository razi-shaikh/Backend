import React, { useState } from 'react'
import "./add.css";
import {Link, useNavigate} from 'react-router-dom'
import axios from 'axios'

function Add() {
    const [detail,setDetail] = useState({
        firstName:'',
        lastName:'',
        email:'',
        password:'',
    })
    const navigate = useNavigate()

    const inputHandler = (e)=>{
        const {name,value} = e.target
        setDetail({...detail,[name]:value})
    }

    const submitForm = async (e)=>{
        e.preventDefault();
        await axios.post('http://localhost:5000/api/create',detail)
        .then(console.log('user created successfully'))
        .catch(e=>console.log('axios error unable to post data',e))
        navigate('/')
    }
  return (
    <div className='addUser'>
    <Link to={"/"}>Back</Link>
        <h3>Add new user</h3>
        <form className='addUserForm' onSubmit={submitForm}>
            <div className="inputGroup">
                <label htmlFor="fname">First name</label>
                <input type="text" id="fname" name="firstName" autoComplete='off' placeholder='First name' onChange={inputHandler}/>
            </div>
            <div className="inputGroup">
                <label htmlFor="lname">Last name</label>
                <input type="text" id="lname" name="lastName" autoComplete='off' placeholder='Last name' onChange={inputHandler}/>
            </div>
            <div className="inputGroup">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" autoComplete='off' placeholder='Email' onChange={inputHandler}/>
            </div>
            <div className="inputGroup">
                <label htmlFor="password">Password</label>
                <input type="password" id="password" name="password" autoComplete='off' placeholder='password' onChange={inputHandler}/>
            </div>
            <div className="inputGroup">
                <button type="submit">ADD USER</button>
            </div>
        </form>
    </div>
  )
}

export default Add