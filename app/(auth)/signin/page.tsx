"use client";

import Button from "@/app/components/Button";
import Link from "next/link";
import TextBox from "@/app/components/TextBox";
import Image from "next/image";
import signupimg from "../../../public/images/signup.jpg";
import React, { useState } from "react";

export default function Signin() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({ username: "", password: "" });

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    let formErrors = { username: "", password: "" };

    if (!username) {
      formErrors.username = "Username is required.";
    }
    if (!password) {
      formErrors.password = "Password is required.";
    }

    setErrors(formErrors);

    if (!formErrors.username && !formErrors.password) {
      console.log("Logging in:", { username, password });
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
   <div className="flex w-11/12 lg:w-4/6 max-w-4xl shadow-[0_10px_20px_rgba(0,0,0,0.15)] rounded-lg overflow-hidden">

        
        <div className="w-1/2 hidden lg:block">
          <Image
            src={signupimg}
            alt="Auth Image"
            className="object-cover w-full h-full"
          />
        </div>

        {/* Form Section */}
        <div className="w-full lg:w-1/2 p-6 flex flex-col justify-center bg-white">
          <h1 className="text-4xl font-extrabold mb-6  text-[#385A64] text-center">Sign In</h1>
          <form onSubmit={handleSubmit} noValidate>
            <div className="mb-4">
            <TextBox
          label="Email Address"
          name="email" 
          placeholder="Enter your email"
        />
        <TextBox
          label="Passward"
          name="passward" 
          placeholder="Enter your username"
        />
            </div>

             

            <div className="mb-4 text-start">
              <Link className="underline text-fuchsia-400" href="/forgot-password">
                Forgot password?
              </Link>
            </div>

            <Button
              type="submit"
              className="w-[70%] py-2 text-white bg-[#385A64] rounded"
            >
              Sign In
            </Button>

            <div className="mt-4 text-start">
              <p className="text-xs">
                Don't have an account?{" "}
                <Link className="underline text-main-dark" href="/signup">
                  Register here
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
