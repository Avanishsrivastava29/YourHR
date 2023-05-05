import React, { useState } from 'react';
import axios from 'axios';

import './SignupForm.css';

const SignupForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [location,setLocation] = useState('');
  const [resume, setResume] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('name', name);
    formData.append('email', email);
    formData.append('location', location);
    formData.append('resume', resume);
    try {
      const response = await axios.post('/signup', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="form-container">
      <h1 className="form-title">Job Application</h1>
      <form className="signup-form" onSubmit={handleSubmit}>
        <label className="form-label">Name:</label>
        <input className="form-input" type="text" value={name} onChange={(e) => setName(e.target.value)} required />
        <br />
        <label className="form-label">Email:</label>
        <input className="form-input" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        <br />
        <label className="form-label">Location:</label>
        <input className="form-input" type="password" value={location} onChange={(e) => setLocation(e.target.value)} required />
        <br />
        <label className="form-label">Resume:</label>
        <input className="form-input" type="file" onChange={(e) => setResume(e.target.files[0])} required />
        <br />
        <button className="form-button" type="submit">Submit</button>
      </form>
    </div>
  );
};

export default SignupForm;
