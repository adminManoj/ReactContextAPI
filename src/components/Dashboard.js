import React, { useEffect, useState } from 'react'
import NavBar from './NavBar'
import EmployeeDetails from './EmployeeDetails';

function Dashboard() {
    // const [details, setDetails] = useState({});

    // useEffect(() => {
    //     setDetails(JSON.parse(localStorage.getItem("loggedUser")))
    // },[])

    return (
        <>
            <NavBar />
            {/* <EmployeeDetails details={details} /> */}
            <EmployeeDetails  />
        </>
    )
}

export default Dashboard;