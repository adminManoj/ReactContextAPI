import React from 'react'
import { useContext } from 'react'
import { EmployeeContext } from '../context/EmployeeContext'

const UserImage = () => {
    const {data} = useContext(EmployeeContext);
  return (
    <div>
        <img src={data.image} alt={data.image}/>
    </div>
  )
}

export default UserImage