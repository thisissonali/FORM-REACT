import React , { useState } from 'react'
import './App.css'

function App() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [iseRegistered, setRegistered] = useState(false);
  const submitHandler = (event) => {
    setRegistered(true);
    event.preventDefault();
  }
  return (
    <div className="container">
      <form className="form-container">
        {iseRegistered && firstName && lastName && email ? (
          <div className="success-container">
            Success! Thank you for registering
          </div>
        ) : null}
        <input
          value={firstName}
          placeholder="First Name"
          onChange={(event) => setFirstName(event.target.value)}
        />
        {iseRegistered && !firstName ? (
          <div className="warning">*Please Enter First Name</div>
        ) : null}
        <input
          value={lastName}
          placeholder="Last Name"
          onChange={(event) => setLastName(event.target.value)}
        />
        {iseRegistered && !lastName ? (
          <div className="warning">*Please Enter Last Name</div>
        ) : null}
        <input
          value={email}
          placeholder="Email"
          onChange={(event) => setEmail(event.target.value)}
        />
        {iseRegistered && !email ? (
          <div className="warning">*Please Enter Email</div>
        ) : null}
        <button type="submit" className="submit-button" onClick={submitHandler}>
          Register
        </button>
      </form>
    </div>
  );
}

export default App
