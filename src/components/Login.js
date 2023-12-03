import React from 'react'
import './Login.css';
import axios from 'axios'
import { useNavigate } from "react-router-dom"
import { useContext } from 'react';
import { EmployeeContext } from '../context/EmployeeContext';

function Login() {
    const [username, setUsername] = React.useState('')
    const [password, setPassword] = React.useState('')
    const navigate = useNavigate();

    const {setData} = useContext(EmployeeContext); 

    const handleSubmit = (event) => {
        event.preventDefault();
        const data = {
            username: username,
            password: password
        }
        const url = 'https://dummyjson.com/auth/login';
        axios.post(url, data)
            .then((response) => response.data)
            .then((result) => {
                if (result !== undefined) {
                    localStorage.setItem("loggedUser", JSON.stringify(result)) 
                    setData(result)                  
                    navigate("/dashboard")
                }
                else {
                    alert('Invalid user')
                }
            })
            .catch((error) => {
                console.log(error)
            })
    };

    return (
        <div className="container" style={{width : "50%", padding:"10px", marginTop:"150px"}}>
            <h2 className="login-header">Log in</h2>
            <div className="row">
                <div className='col'>
                    <label className='form-label'>Username</label>
                    <input type="email" className='form-control' placeholder="username"
                     onChange={(e) => setUsername(e.target.value)} value={username} defaultValue='kminchelle'/>
                </div>
            </div>
            <div className="row">
                <div className='col'>
                    <label className='form-label'>Password</label>
                    <input type="password" className='form-control' placeholder="Password"
                     onChange={(e) => setPassword(e.target.value)} value={password} /> <br></br>
                </div>
            </div>

            <div className="row">
                <div className='col'>
                   <input type="submit" className='btn btn-primary btn-lg' value="Log in" onClick={(e) => handleSubmit(e)} />&nbsp;
                   <input type="submit" className='btn btn-danger btn-lg' value="Cancel"  />&nbsp;
                </div>
            </div>
        </div>
    )
}

export default Login;