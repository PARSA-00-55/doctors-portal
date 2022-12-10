import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider";
import { GoogleButton } from "react-google-button";

const Login = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  // * auth context import
  const { signIn, googleSignIn } = useContext(AuthContext);
  // * handleing login errors
  const [loginError, setLoginError] = useState("");
  const location = useLocation();
  const navigate = useNavigate();

  const from = location.state?.from?.pathname || "/";

  const handleLogin = (data) => {
    console.log(data);
    setLoginError("");
    // TODO : sending data to context and for process
    signIn(data.email, data.password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.error(error);
        setLoginError(error.message);
      });
  };
  // ! Google sign in function
  const handleGoogleSignIn = async () => {
    try {
      await googleSignIn();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="h-[800px]  flex justify-center items-center">
      <div className="w-96 p-7 ">
        <h2 className="text-xl text-center font-bold">Log-in</h2>
        <form onSubmit={handleSubmit(handleLogin)}>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              {...register("email", { required: "Email Address is required" })}
              className="input input-bordered w-full "
            />
            {errors.email && (
              <p className="text-red-600">{errors.email?.message}</p>
            )}
          </div>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Password must be 6 characters or longer",
                },
              })}
              className="input input-bordered w-full"
            />
            {errors.password && (
              <p className="text-red-600">{errors.password?.message}</p>
            )}
            <label className="label">
              <span className="label-text">Forget Password?</span>
            </label>
          </div>
          <input
            type="submit"
            className="btn btn-accent w-full mt-4"
            value="Login"
          />
          <div>
            {loginError && (
              <p className="text-red-600 mt-2">'User data didn't matched'</p>
            )}
          </div>
        </form>
        <p className="mt-3 text-center">
          New to Doctors Portal?{" "}
          <Link className="text-secondary" to="/signup">
            Create new account
          </Link>
        </p>
        <div className="divider">OR</div>
        <GoogleButton
          onClick={handleGoogleSignIn}
          className="mx-auto"
        ></GoogleButton>
      </div>
    </div>
  );
};

export default Login;
