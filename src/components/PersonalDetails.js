import React from 'react'
import { useContext } from 'react'
import { EmployeeContext } from '../context/EmployeeContext'

function PersonalDetails(props) {
  const {data} = useContext(EmployeeContext);
  return (
    <>
    <h2>Personal Details</h2>
    {/* First Name : {props.details.firstName} <br /> Last Name : {props.details.lastName} <br /> Gender : {props.details.gender} */}
    First Name : {data.firstName} <br /> Last Name : {data.lastName} <br /> Gender : {data.gender}
   
    </>
  )
}

export default PersonalDetails