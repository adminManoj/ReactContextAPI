import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Profile from './components/Profile';
import Login from './components/Login';
import { EmployeeContext } from './context/EmployeeContext';
import { useState } from 'react';

function App() {
  const [data, setData] = useState({});
  return (
    <div className="App">
      <EmployeeContext.Provider value={{data, setData}}>
        <Router>
          <Routes>
            <Route exact path="/" element={<Login />} />
            <Route exact path="/dashboard" element={<Dashboard />} />
            <Route exact path="/profile" element={<Profile />} />
          </Routes>
        </Router>
      </EmployeeContext.Provider>
    </div>
  );
}

export default App;
