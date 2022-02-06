import React from "react";
import styled from "styled-components";
import { useState } from "react";

const LoginForm = () => {
  const [isEmailEmpty, setIsEmailEmpty] = useState(false);
  const [isPwdEmpty, setIsPwdEmpty] = useState(false);

  return (
    <Container>
      <Form>
        <div>
          <label for="email">Email</label>
          <input
            type="text"
            placeholder="Email"
            id="email"
            inputIsEmpty={isEmailEmpty}
            onInput={(e) => {
              const value = e.target.value;
              value.length === 0
                ? setIsEmailEmpty(true)
                : setIsEmailEmpty(false);
            }}
          ></input>
        </div>
        <div>
          <label for="password">Password</label>
          <input type="password" placeholder="Password" id="password"></input>
        </div>

        <button type="button">Submit</button>
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
input{
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
  
    outline-color: "#ECF5F4";
}

div{
  display: flex;
    flex-direction: column;
    align-items: flex-start;
}

button{
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

  }
}
`;

export default LoginForm;
