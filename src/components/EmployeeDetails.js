import React from 'react'
import PersonalDetails from './PersonalDetails';
import Profile from './Profile';
import LoginDetails from './LoginDetails';

function EmployeeDetails(props) {
    return (
        <>
            <h1>Employee Details</h1>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-3' style={{backgroundColor:"yellow", borderRadius : "10px" , margin:"10px"}}>
                        <PersonalDetails details={props.details} />
                    </div>
                    <div className='col-md-5' style={{backgroundColor:"orange", borderRadius : "10px" , margin:"10px"}}>
                        <Profile details={props.details} />
                    </div>
                    <div className='col-md-3' style={{backgroundColor:"pink", borderRadius : "10px" , margin:"10px"}}>
                        <LoginDetails details={props.details} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default EmployeeDetails