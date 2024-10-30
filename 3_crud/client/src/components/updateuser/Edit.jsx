import React, { useEffect, useState } from 'react'
import "../adduser/add.css";
import {Link,useNavigate, useParams} from 'react-router-dom'
import axios from 'axios';

function Edit() {
    const navigate = useNavigate()
    const {id} = useParams()
    // console.log(id);
    
    const detail = {
        firstName:'',
        lastName:'',
        email:'',
        }
        
    const [user,setUser] = useState(detail)
    
    const inputChangeHandler = (e) => {
        const {name,value} = e.target
        setUser({...user,[name]:value})
    }

    const singleUser = async ()=>{
        await axios.get(`http://localhost:5000/api/getone/${id}`)
        .then((res)=>{
            setUser(res.data)
            console.log('res.data\n',res.data);
        })
        .catch((error)=>{
            console.log('Unable to fetch data\n',error);
        })
    }

    useEffect(()=>{
        singleUser()
    },[id])

    const submitForm = async (e)=>{
        e.preventDefault();
        await axios.put(`http://localhost:5000/api/update/${id}`,user)
        .then(console.log('user updated successfully'))
        .catch(e=>console.log('axios error unable to update a data',e))
        navigate('/')
    }
    console.log('user\n',user)
  return (
    <div className='addUser'>
        <Link to={'/'}>Back</Link>
        <h3>Update user</h3>
        <form className='addUserForm' onSubmit={submitForm}>
            <div className="inputGroup">
                <label htmlFor="fname">First name</label>
                <input type="text" id="fname" name="firstName" autoComplete='off' placeholder='First name' 
                value={user.firstName}
                onChange={inputChangeHandler}/>
            </div>
            <div className="inputGroup">
                <label htmlFor="lname">Last name</label>
                <input type="text" id="lname" name="lastName" autoComplete='off' placeholder='Last name' 
                value={user.lastName}
                onChange={inputChangeHandler}/>
            </div>
            <div className="inputGroup">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" autoComplete='off' placeholder='Email' 
                value={user.email} 
                onChange={inputChangeHandler}/>
            </div>
            <div className="inputGroup">
                <button type="submit">UPDATE USER</button>
            </div>
        </form>
    </div>
  )
}

export default Edit