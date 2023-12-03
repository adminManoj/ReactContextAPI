import React from 'react'
import { useContext } from 'react'
import { EmployeeContext } from '../context/EmployeeContext'

function LoginDetails(props) {
    const {data} = useContext(EmployeeContext);
    return (
        <>
            <h2>Login Details</h2>
            {/* User ID : {props.details.id} <br /> User Name : {props.details.username} <br /> email : {props.details.email} */}
            User ID : {data.id} <br /> User Name : {data.username} <br /> email : {data.email}
        </>
        
    )
}

export default LoginDetails