import React, {useState, useEffect} from "react";
import AuthBox from "../../shared/components/AuthBox";
import { Typography } from "@mui/material";
import RegisterPageInputs from "./RegisterPageInputs";
import RegisterPageFooter from "./RegisterPageFooter";
import { validateRegisterForm } from "../../shared/utils/validators";

const RegisterPage = () => {

  const [mail, setMail] = useState("")
  const [password, setPassword] = useState("")
  const [username, setUsername] = useState("")

  const [isFormValid, setIsFromValid] = useState(false)

  const handleRegister = () => {
    console.log(mail);
    console.log(username);
    console.log(password);
    console.log('registering');
  }
  useEffect(() => {
    setIsFromValid(validateRegisterForm({
      mail,
      username,
      password,
    }))
  }, [mail, username, password, setIsFromValid])
  

  return <AuthBox>
    <Typography variant="h5" sx={{color: "white"}}>
  Create an account
    </Typography>
    <RegisterPageInputs 
    mail={mail}
    setMail={setMail}
    username={username}
    setUsername={setUsername}
    password={password}
    setPassword={setPassword}
    />
    <RegisterPageFooter 
    handleRegister={handleRegister}
    isFormValid={isFormValid}
    />
  </AuthBox>;
};
export default RegisterPage;