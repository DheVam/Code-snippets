import React from "react";
import styled from "styled-components";
import { useState } from "react";
import tick from "../Assets/tick.svg";
import angleRight from "../Assets/angleRight.svg";
import eyeIcon from "../Assets/eyeIcon.svg";
import close from "../Assets/close.svg";

const LoginForm = () => {
  const [isEmailInValid, setIsEmailInValid] = useState(false);
  const [EmailValidationState, setIsEmailValidationState] = useState({
    isValid: false,
  });
  const [isPasswordInvalid, setIsPasswordInValid] = useState(false);
  const [passwordValidationState, setPasswordState] = useState({
    charLength: false,
    upperCase: false,
    number: false,
    lowerCase: false,
    specialCharacter: false,
  });
  const [showPasswordHint, setShowPasswordHint] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordIcon = () => {
    setShowPassword(!showPassword);
  };

  const Login = () => {
    if(!isEmailInValid && !isPasswordInvalid) {
    window.alert("Login Successful");
    }else{
      if(isEmailInValid){
        window.alert("Please enter a valid email address");
        setIsEmailInValid(true);
      }
      if(isPasswordInvalid){
        window.alert("Please enter a valid password");
        setIsPasswordInValid(true);
      }
    }
  }

  return (
    <Container inputIsEmpty>
      <Form>
        <div>
          <label htmlFor="email">Email</label>
          <Input
            type="text"
            placeholder="Email"
            id="email"
            inputIsEmpty={isEmailInValid}
            onInput={(e) => {
              const value = e.target.value;
              const currentState = { ...EmailValidationState };
              currentState.isValid = value.match("([a-zA-Z0-9]+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]+$)"
              )
                ? true
                : false;
              setIsEmailValidationState(currentState);

              if (!currentState.isValid || value.length === 0) {
                setIsEmailInValid(true);
              } else {
                setIsEmailInValid(false);
              }
            }}
          ></Input>
          {isEmailInValid ?<div style={{marginTop:"-1rem",marginBottom:"1rem"}}>
            <span style={{color:"#EB4335"}}>Email is Invalid</span>
          </div> : null}
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <PasswordContainer>
            <i>
              {
                <ShowPasswordBtn
                  onClick={() => togglePasswordIcon()}
                  type="button"
                >
                  {showPassword ? (
                    <img alt="" src={close}></img>
                  ) : (
                    <img alt="" src={eyeIcon}></img>
                  )}
                </ShowPasswordBtn>
              }
            </i>
            <Input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              id="password"
              inputIsEmpty={isPasswordInvalid}
              onInput={(e) => {
                setShowPasswordHint(true);
                const value = e.target.value;
                const currentState = { ...passwordValidationState };
                currentState.charLength = value.length >= 6 ? true : false;
                currentState.lowerCase = value.match("(?=.*[a-z])")
                  ? true
                  : false;
                currentState.upperCase = value.match("(?=.*[A-Z])")
                  ? true
                  : false;
                currentState.number = value.match("(?=.*[0-9])") ? true : false;
                currentState.specialCharacter = value.match(
                  "(?=.*[^A-Za-z0-9])"
                )
                  ? true
                  : false;
                setPasswordState(currentState);
                if (
                  value.length === 0 ||
                  !currentState.charLength ||
                  !currentState.lowerCase ||
                  !currentState.upperCase ||
                  !currentState.number ||
                  !currentState.specialCharacter
                ) {
                  setIsPasswordInValid(true);
                } else {
                  setIsPasswordInValid(false);
                }
              }}
            ></Input>
          </PasswordContainer>
          {showPasswordHint && (
            <div
              style={{ fontSize: "14px", marginBottom: "20px" }}
              className="passwordHints"
            >
              <label style={{ marginBottom: "10px", fontSize: "17px" }}>
                Enter a password
              </label>
              <div>
                {passwordValidationState.charLength ? (
                  <img alt="" src={tick}></img>
                ) : (
                  <img alt="" src={angleRight}></img>
                )}
                &nbsp; 6 or more characters
              </div>
              <div>
                {passwordValidationState.lowerCase ? (
                  <img alt="" src={tick}></img>
                ) : (
                  <img alt="" src={angleRight}></img>
                )}
                &nbsp; Lowercase letter
              </div>
              <div>
                {passwordValidationState.upperCase ? (
                  <img alt="" src={tick}></img>
                ) : (
                  <img alt="" src={angleRight}></img>
                )}
                &nbsp; Uppercase letter
              </div>
              <div>
                {passwordValidationState.number ? (
                  <img alt="" src={tick}></img>
                ) : (
                  <img alt="" src={angleRight}></img>
                )}
                &nbsp; Number
              </div>
              <div>
                {passwordValidationState.specialCharacter ? (
                  <img alt="" src={tick}></img>
                ) : (
                  <img alt="" src={angleRight}></img>
                )}
                &nbsp; Special character
              </div>
            </div>
          )}
        </div>

        <Button type="button" onClick={Login}>Submit</Button>
      </Form>
    </Container>
  );
};

const Container = styled.div`
  border: 1px solid #2bc0e4;
  border-radius: 5px;
  height: 600px;
  width: 600px;
  margin-top: 5rem;
  padding: 2rem;
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  height: 100%;

  label {
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    line-height: 26px;
    letter-spacing: 0.01em;
    color: #3b3c43;
    margin-bottom: 10px;
  }

  div {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }

  .passwordHints {
    div {
      display: block;
      font-size: 20px;
    }
  }
`;

const Input = styled.input`
  border: none;
  background: ${(props) => (props.inputIsEmpty ? "#FCCDCD" : "#ECF5F4")};
  width: 432px;
  height: 63px;
  margin-bottom: 21px;
  padding-left: 21px;
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 19px;
  line-height: 21px;
  ::placeholder {
    display: flex;
    align-items: center;
    letter-spacing: 0.02em;
    color: #5a5c66;
  }

  outline-color: ${(props) => (props.inputIsEmpty ? "#EB4335" : "#ECF5F4")};
`;

const Button = styled.button`
  position: absolute;
  bottom: 1rem;
  border: none;
  width: 455px;
  height: 65px;
  margin-bottom: 32px;
  background: linear-gradient(90deg, #50c9c3 0%, #96deda 100%);
  border-radius: 5px;
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  line-height: 22px;
  text-align: center;
  letter-spacing: -0.0041em;
  color: #ffffff;
  cursor: pointer;
  justify-content: center;
  align-items: center;
`;
const ShowPasswordBtn = styled.button`
  border: none !important;
  background: transparent !important;
  width: 25px !important;
  height: 25px !important;
`;

const PasswordContainer = styled.div`
  position: relative;
  i {
    position: absolute;
    right: 10px;
    top: 18px;
  }
`;

export default LoginForm;
