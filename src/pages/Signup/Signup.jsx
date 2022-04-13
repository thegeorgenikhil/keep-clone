import React, { useState, useEffect } from "react";
import NavBar from "../../components/NavBar/NavBar";
import Input from "../../components/Input/Input";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import Loader from "../../components/Loader/Loader";

const Signup = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    hasUserAgreed: false,
  });
  const { name, email, password, hasUserAgreed } = formData;
  const isFormFullyFilled = name && email && password && hasUserAgreed;
  const { signup, auth } = useAuth();
  const navigate = useNavigate();

  const changeHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const formSubmitHandler = async (e) => {
    e.preventDefault();
    await signup({ name, email, password });
  };

  useEffect(() => {
    if (auth.isAuthenticated) return navigate("/");
  }, [auth, navigate]);
  return (
    <>
      <NavBar />
      <div className="auth-card">
        <p className="text-center auth-card-heading">Sign-Up</p>
        <form onSubmit={formSubmitHandler}>
          <Input
            name="name"
            type="text"
            changeHandler={changeHandler}
            placeholder={"Name"}
            value={name}
          />
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
          <div className="flex items-center">
            <input
              type="checkbox"
              name="agreement"
              id="agreement"
              onClick={(e) =>
                setFormData({ ...formData, hasUserAgreed: e.target.checked })
              }
            />
            <label htmlFor="agreement" className="gray-text">
              I have read and agreed to all terms and conditions
            </label>
          </div>
          <button
            className={`auth-btn ${!isFormFullyFilled ? "btn-disabled" : ""}`}
            type="submit"
          >
            {auth.isLoading ? <Loader /> : "Signup"}
          </button>
        </form>
        <div className="divider-sm"></div>
        <p className="auth-bottom-text">
          Already have an account? Login{" "}
          <Link to="/login" className="link">
            here
          </Link>
        </p>
      </div>
    </>
  );
};

export default Signup;
