import React from 'react'
import InputLabel from '../../shared/components/InputLabel'




const LoginPageInput = ({mail, setMail, password, setPassword}) => {
  return (
    <>
      <InputLabel
        value={mail}
        setValue={setMail}
        label="E-mail"
        type="text"
        placeholder="Enter e-mail address"
      />
      <InputLabel
        value={password}
        setValue={setPassword}
        label="Password"
        type="password"
        placeholder="Enter password"
      />
    </>
  );
}
export default LoginPageInput