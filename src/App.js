import React, { useState } from 'react';
import {Box, Button} from '@mui/material';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import AddEventButton from './component/AddEventbuttons';
import Dashboard from './component/Dashboard';
import Header from './component/Headers';
import Login from './component/Login';

const App = () => {
  const [user, setUser] = useState(null);

  const handleSignup = (newUser) => {
    setUser(newUser);
  };
  const [showLoginForm, setShowLoginForm] = useState(false);

  // function to toggle login form visibility
  const toggleLoginForm = () => {
    setShowLoginForm(!showLoginForm);
  };

  return (
    <div>
   <Header/> <Box style={{marginTop:70}}>
  <AddEventButton/>  <Button color="inherit" onClick={toggleLoginForm}  class="login">
            Login
          </Button>
        {/* render login form if showLoginForm is true */}
      {showLoginForm && <Login />}</Box>

   
    
    
    
    </div>
  );
};

export default App;
