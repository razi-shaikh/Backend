import React, { useEffect, useState } from 'react'
import "./user.css";
import axios from 'axios'
import {Link,useNavigate} from 'react-router-dom'

const User = () => {

    const [user,setUser] = useState()

    const allUser = async ()=>{
        await axios('http://localhost:5000/api/fetch')
        .then((res)=>{
            setUser(res.data)
        })
        .catch((error)=>{
            console.log('Unable to fetch data\n',error);
        })
    }

    useEffect(()=>{
        allUser()
    },[])
    // console.log('log user\n',user);

    const deleteUser = async (id) => {
        await axios.delete(`http://localhost:5000/api/delete/${id}`)
        .then(()=>{
            setUser((prev)=>prev.filter(prevUser=>prevUser._id!==id))
        })
        .catch(e=>{console.log('unable to delete user');})
    }

    

  return (
    <div className='userTable'>
        <Link to={"/add"} className='addButton'>Add User</Link>
        <table border={1} cellPadding={10} cellSpacing={0}>
            <thead>
                <tr>
                    <th>S.No.</th>
                    <th>User name</th>
                    <th>User Email</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {
                    user && user.map((res,ind)=>{
                        return (
                            <tr key={res._id}>
                            <td>{ind+1}</td>
                            <td>{res.firstName} {res.lastName}</td>
                            <td>{res.email}</td>
                            <td className='actionButtons'>
                                <button className='delete' onClick={()=>deleteUser(res._id)}>🗑️</button>
                                <button className='edit'>
                                    <Link to={`/edit/${res._id}`}>✏️</Link></button>
                            </td>
                        </tr>
                        )
                    })
                }
                        
            </tbody>
        </table>
    </div>
  )
}

export default User