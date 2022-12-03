import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider";

const SignUp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  // ! firebase .. and react hooks for context
  const { createUser, updateUser } = useContext(AuthContext);
  const [signUpError, setSignUpError] = useState("");

  const handleSignUp = (data) => {
    console.log(data);
    setSignUpError("");
    // ! user create
    createUser(data.email, data.password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        toast("User Created Successfully.");
        const userInfo = {
          displayName: data.name,
        };
        updateUser(userInfo)
          .then(() => {})
          .catch((err) => console.error(err));
      })
      .catch((error) => {
        console.log(error);
        setSignUpError(error.message);
      });
  };
  return (
    <div className="h-[800px]  flex justify-center items-center">
      <div className="w-96 p-7 ">
        <h2 className="text-xl text-center font-bold">Sign-up</h2>
        <form onSubmit={handleSubmit(handleSignUp)}>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              {...register("name", { required: "Name is required" })}
              className="input input-bordered w-full "
            />
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              {...register("email", { required: true })}
              className="input input-bordered w-full "
            />
            {errors.email && (
              <p className="text-red-600">{errors.email.message}</p>
            )}
          </div>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              {...register("password", {
                required: "password is required. Please enter password",
                minLength: {
                  value: 6,
                  message: "Password must be 6 charecter long",
                },
              })}
              className="input input-bordered w-full"
            />
            {errors.password && (
              <p className="text-red-600">{errors.password.message}</p>
            )}
          </div>
          <input
            type="submit"
            className="btn btn-accent w-full mt-4"
            value="Sign-up"
          />
          {signUpError && <p className="text-red-600">{signUpError}</p>}
        </form>
        <p className="mt-3 text-center">
          Already have an account?{" "}
          <Link className="text-secondary" to="/login">
            Log-in
          </Link>
        </p>
        <div className="divider">OR</div>
        <button className="btn btn-outline w-full">
          COUNTINUE WITH GOOGLE
        </button>
      </div>
    </div>
  );
};

export default SignUp;
