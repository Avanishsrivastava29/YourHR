import React, { useState } from 'react';
import  SignupForm from './AddEvent';

function AddEventButton() {
  const [isFormVisible, setIsFormVisible] = useState(false);

  const handleClick = () => {
    setIsFormVisible(true);
  };

  return (
    <>
      <button onClick={handleClick}>Add Event</button>
      {isFormVisible && <SignupForm />}
    </>
  );
}

export default AddEventButton;
