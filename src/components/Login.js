import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'


const Login = () => {

  const navigate = useNavigate();

  const [userName, setUserName] = useState('');
  const [userPass, setUserPass] = useState('');


  const enterName = (e) => {
    setUserName(e.target.value)
  }

  const enterPass = (e) => {
    setUserPass(e.target.value)
  }


  const handleSubmit = () => {
    (userName === "petek" && userPass === "1234") ? navigate("./Home") :
      alert("Try again please");
  }


  return (
    <div>
    <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <label>Please enter name:
        <input 
        type="text"
        value={userName}
        autoFocus
        required
        placeholder='Please enter name'
        onChange={enterName}
        />
        </label>
        <br />
        <br />
        <label> Please enter password:
          <input 
          type="password"
          autoFocus

          required
          placeholder='Please enter password'
          onChange={enterPass}
          />
        </label>   
      </form>
      <br />
      <input type="submit" />
    </div>
  )
}

export default Login