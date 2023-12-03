import React from 'react'
import { useContext } from 'react'
import { EmployeeContext } from '../context/EmployeeContext'
import UserImage from './UserImage';

function Profile() {
const {data} = useContext(EmployeeContext);
    return (
        <>
            <h2>My Profile</h2>
            {/* User Name : {props.details.username} <br> */}
            User Name : {data.username} <br>
            </br>
            {/* <img src={props.details.image} alt={props.details.image}/> */}
            <UserImage />
        </>
    )
}

export default Profile