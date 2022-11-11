import React, { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import loginImg from "../assets/login.png";
import { AuthContext } from "../context/AuthProvider";
import useTitle from "../hooks/useTitle";

const Login = () => {
  const { userLogin } = useContext(AuthContext);
  const location = useLocation();
  const Navigate = useNavigate();
  useTitle('Login');

  let from = location.state?.from?.pathname || "/";

  const handleUserLogin = (e) => {
    e.preventDefault();

    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    userLogin(email, password)
      .then((result) => {
        const user = result.user;
        form.reset();
        Navigate(from, {replace: true})
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
            <form onSubmit={handleUserLogin} className="card-body">
              <h1 className="text-5xl font-bold text-center mt-5">Login</h1>
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
                  required
                />
                <label className="label">
                  <Link href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </Link>
                </label>
              </div>
              <div className="form-control mt-6">
                <button type="submit" className="btn btn-warning">
                  Login
                </button>
              </div>
            </form>
            <p className="text-center mb-5">
              Have an account?
              <Link to="/signUp" className="font-semibold text-orange-600">
                Sign Up
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
