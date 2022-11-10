import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import loginImg from "../assets/login.png";
import { AuthContext } from "../context/AuthProvider";

const SignUp = () => {
  const { createUser } = useContext(AuthContext);
  const Navigate = useNavigate();

  const handleCreateUser = (e) => {
    e.preventDefault();

    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    createUser(email, password)
      .then((result) => {
        const user = result.user;
        form.reset();
        alert("Sign Up successfully");
        Navigate("/login");
      })
      .catch((err) => console.error(err));
  };
  return (
    <div>
      <div className="hero min-h-screen py-20">
        <div className="hero-content grid gap-10 md:grid-cols-2 flex-col lg:flex-row">
          <div className="text-center lg:text-left">
            <img className="w-3/4" src={loginImg} alt="login-img" />
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleCreateUser} className="card-body">
              <h1 className="text-5xl font-bold text-center mt-5">Sign Up</h1>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Your Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Your Name"
                  name="name"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  name="email"
                  type="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  name="password"
                  type="password"
                  placeholder="password"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control mt-6">
                <button type="submit" className="btn btn-warning">
                  Sign Up
                </button>
              </div>
            </form>
            <p className="text-center mb-5">
              Already have an account?
              <Link to="/login" className="font-semibold text-orange-600">
                Log In
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
