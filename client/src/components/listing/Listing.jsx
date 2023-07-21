import { useEffect, useState } from "react"
import styles from './Style.module.css'
import { useNavigate } from "react-router"
import { Link } from "react-router-dom"
import axios from 'axios'
export const Listing = ()=>{
   const [users,setUsers]= useState([{
    name:"ritesh",
    email:"rk@gamail.com",
    age:23

}])

useEffect(()=>{
    axios.get('http://localhost:3001/api/crud/GET/users')
    .then(result => setUsers(result.data))
    .catch(err => console.log(err))
},[])


const handleDelete =(id)=>{
    axios.delete('http://localhost:3001/api/crud/DELETE/users/'+id)
    .then(res =>{console.log(res)
    window.location.reload()
    }
    )
    .catch(err =>console.log(err))
}
    return(
        
        <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
            <div className="w-50 bg-white rounded p-3">
            <Link to="/add" className="btn btn-success">Add +</Link>
            <table className='table'>
                <thead>
                    <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Age</th>
                    <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                     {
                        users.map((user)=>{
                           return( <tr>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.age}</td>
                                <td>
                                    <Link to={`/edit/${user._id}`} className="btn btn-success">Edit</Link>
                                    <button className="btn btn-danger"  onClick={(e)=> handleDelete(user._id)}>Delete</button>
                                </td>
                            </tr>
                           )
                        })
                     }
                </tbody>
                </table>
            </div>

        </div>
    )
}
