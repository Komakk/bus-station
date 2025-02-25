import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useForm } from "react-hook-form";
import { FaGoogle } from "react-icons/fa";
import { FormData } from "../types/types";
import { useState } from "react";

export default function Login() {
  const [message, setMessage] = useState("");
  const { loginUser } = useAuth();
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    try {
      await loginUser(data.email, data.password);
      alert("Login successful");
      navigate("/");
    } catch (error) {
      setMessage("Please provide a valid email and password");
      console.error(error);
    }
  };

  const handleGoogleSignIn = async () => {};

  return (
    <div className="h-[calc(100vh-120px)] flex items-center justify-center">
      <div className="w-full max-w-sm bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <h2>Please login</h2>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <label
              className=" block text-gray-700 text-sm font-bold mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              {...register("email", { required: true })}
              type="email"
              name="email"
              id="email"
              placeholder="Email Address"
              className=" shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow"
            />
          </div>
          <div className="mb-4">
            <label
              className=" block text-gray-700 text-sm font-bold mb-2"
              htmlFor="password"
            >
              Passwordtext
            </label>
            <input
              {...register("password", { required: true })}
              type="password"
              name="password"
              id="password"
              placeholder="Password"
              className=" shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow"
            />
          </div>
          {message && (
            <p className="text-red-500 text-xs italic mb-3">{message}</p>
          )}
          <div>
            <button className=" w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-8 rounded focus:outline-none">
              Login
            </button>
          </div>
        </form>
        <p className=" align-baseline font-medium mt-4 text-sm">
          Haven't an account? Please{" "}
          <Link to={"/register"} className=" text-blue-500 hover:text-blue-700">
            Register
          </Link>
        </p>

        {/* google sign in */}

        <div className=" mt-5">
          <button
            onClick={handleGoogleSignIn}
            className=" w-full flex flex-wrap gap-1 items-center justify-center bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none"
          >
            <FaGoogle className=" mr-2" />
            Sign in with Google
          </button>
        </div>

        <p className="mt-5 text-gray-500 text-xs">
          ©2025 Bus Station. All rights reserved.
        </p>
      </div>
    </div>
  );
}
