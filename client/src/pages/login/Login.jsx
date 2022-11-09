import React, { useContext, useEffect, useRef } from "react";
import { UserContext } from "../../context/UserContext/UserContext";
import { publicRequest } from "../../requestMethods";
import {
  CloseBtn,
  Container,
  LoginBtn,
  Form,
  Input,
  Title,
  Wrapper,
  ErrorText,
} from "./login-styles";

const Login = ({ setShowLogin, setShowRegister }) => {
  const { dispatch, isFatching, currentUser, error } = useContext(UserContext);
  const email = useRef();
  const password = useRef();

  const goToCreate = () => {
    setShowLogin(false);
    setShowRegister(true);
  };

  const handleLogin = async e => {
    e.preventDefault();
    dispatch({ type: "LOGIN_START" });
    try {
      const res = await publicRequest.post("auth/login", {
        email: email.current.value,
        password: password.current.value,
      });
      dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
      setShowLogin(false);
    } catch (err) {
      console.log(err);
      dispatch({
        type: "LOGIN_FAILURE",
        payload: err.response.data || err,
      });
    }
  };
  return (
    <Container>
      <Wrapper>
        <CloseBtn onClick={() => setShowLogin(false)}>x</CloseBtn>
        <Title>Login</Title>
        <Form onSubmit={handleLogin}>
          <Input ref={email} type="email" placeholder="email" required />
          {error?.type === "email" && <ErrorText>{error.message}</ErrorText>}
          <Input
            ref={password}
            type="password"
            placeholder="password"
            required
          />
          {error?.type === "password" && <ErrorText>{error.message}</ErrorText>}
          <p>
            If you dont have an account{" "}
            <b onClick={goToCreate}>Create an account</b>
          </p>
          <LoginBtn disabled={isFatching} type="submit">
            Login
          </LoginBtn>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Login;
