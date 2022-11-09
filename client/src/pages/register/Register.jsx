import React, { useState } from "react";
import { publicRequest } from "../../requestMethods";
import {
  CloseBtn,
  Container,
  CreateBtn,
  Form,
  Input,
  Title,
  Wrapper,
  ErrorText,
} from "./register-styles";

const Register = ({ setShowRegister, setShowLogin }) => {
  const [newUser, setNewUser] = useState({});
  const [error, setError] = useState(null);
  const [isFatching, setIsFatching] = useState(false);

  const handleChange = e => {
    const { name, value } = e.target;
    setNewUser({ ...newUser, [name]: value });
  };

  const handleRegister = async e => {
    e.preventDefault();
    setError(false);
    setIsFatching(true);
    if (newUser.password2 !== newUser.password) {
      setError({ type: "password", message: "password did not match" });
      setIsFatching(false);
    } else {
      try {
        await publicRequest.post("auth/register", newUser);
        setShowRegister(false);
        setShowLogin(true);
      } catch (err) {
        setError(err.response.data);
        setIsFatching(false);
      }
    }
  };
  return (
    <Container>
      <Wrapper>
        <CloseBtn onClick={() => setShowRegister(false)}>x</CloseBtn>
        <Title>Create an account</Title>
        <Form>
          <Input
            onChange={e => handleChange(e)}
            type="text"
            placeholder="username"
            name="username"
            required
          />
          {error?.type === "username" && <ErrorText>{error.message}</ErrorText>}
          <Input
            onChange={e => handleChange(e)}
            type="email"
            placeholder="email"
            name="email"
            required
          />
          {error?.type === "email" && <ErrorText>{error.message}</ErrorText>}
          <Input
            onChange={e => handleChange(e)}
            type="password"
            placeholder="password"
            name="password"
            required
          />
          <Input
            onChange={e => handleChange(e)}
            type="password"
            placeholder="confirm password"
            name="password2"
            required
          />
          {error?.type === "password" && <ErrorText>{error.message}</ErrorText>}
        </Form>
        <p>
          By creating an account, I consent to the processing of my personal
          data in accordance with the <b>PRIVACY POLICY</b>
        </p>
        <CreateBtn onClick={handleRegister} disabled={isFatching}>
          create
        </CreateBtn>
      </Wrapper>
    </Container>
  );
};

export default Register;
