import React, { useState, useEffect } from "react";
import NavBar from "../../components/NavBar/NavBar";
import Input from "../../components/Input/Input";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import Loader from "../../components/Loader/Loader";

const Login = () => {
  const { login, auth } = useAuth();
  const [formData, setFormData] = useState({ email: "", password: "" });
  const { email, password } = formData;
  const isFormFullyFilled = email && password;
  const navigate = useNavigate();
  const changeHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const formSubmitHandler = async (e) => {
    e.preventDefault();
    await login({ email, password });
  };

  useEffect(() => {
    if (auth.isAuthenticated) return navigate("/");
  }, [auth, navigate]);
  return (
    <>
      <NavBar />
      <div className="auth-card">
        <p className="text-center auth-card-heading">Login</p>
        <form onSubmit={formSubmitHandler}>
          <Input
            name="email"
            type="email"
            changeHandler={changeHandler}
            placeholder={"Email"}
            value={email}
          />
          <Input
            name="password"
            type="password"
            changeHandler={changeHandler}
            placeholder={"Password"}
            value={password}
          />
          <button
            className={`auth-btn ${!isFormFullyFilled ? "btn-disabled" : ""}`}
            type="submit"
          >
            {auth.isLoading ? <Loader /> : "Login"}
          </button>
          <div
            className="auth-btn"
            onClick={() =>
              setFormData({
                email: "adarshbalika@gmail.com",
                password: "adarshBalika123",
              })
            }
          >
            Use Test Credentials
          </div>
        </form>
        <div className="divider-sm"></div>
        <p className="auth-bottom-text">
          Don't have an account? Sign up{" "}
          <Link to="/signup" className="link">
            here
          </Link>
        </p>
      </div>
    </>
  );
};

export default Login;
