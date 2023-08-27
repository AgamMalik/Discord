import React from 'react'
import InputLabel from "../../shared/components/InputLabel"

const RegisterPageInputs = (props) => {
    const {mail, setMail, username, setUsername, password, setPassword} = props
  return (
    <>
    <InputLabel 
    value={mail}
    setValue={setMail}
    label="Email address"
    type="text"
    placeholder="Enter email address"
    />
    <InputLabel 
    value={username}
    setValue={setUsername}
    label="Username"
    type="text"
    placeholder="Enter username"
    />
    <InputLabel 
    value={password}
    setValue={setPassword}
    label="Password"
    type="password"
    placeholder="Enter password"
    />
    </>
  )
}
export default RegisterPageInputs