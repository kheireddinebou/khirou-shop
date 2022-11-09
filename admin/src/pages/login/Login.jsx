import React, { useContext, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../context/UserContext/UserContext";
import { publicRequest } from "../../requestMethods";
import "./login.css";

const Login = () => {
  const email = useRef();
  const password = useRef();
  const navigate = useNavigate();
  const { dispatch, isFatching, error } = useContext(UserContext);

  const handleLogin = async e => {
    e.preventDefault();
    dispatch({ type: "LOGIN_START" });
    try {
      const res = await publicRequest.post("auth/login/admin", {
        email: email.current.value,
        password: password.current.value,
      });
      dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
      navigate("/");
    } catch (err) {
      console.log(err);
      dispatch({
        type: "LOGIN_FAILURE",
        payload: err.response.data || err,
      });
    }
  };

  return (
    <div className="loginWrapper">
      <form onSubmit={handleLogin}>
        <input type="email" placeholder="email" required ref={email} />
        {error?.type === "email" && (
          <span className="error">{error.message}</span>
        )}
        <input type="password" placeholder="password" required ref={password} />
        {error?.type === "password" && (
          <span className="error">{error.message}</span>
        )}
        <button disabled={isFatching} type="submit">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
