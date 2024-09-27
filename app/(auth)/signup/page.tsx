"use client";

import Button from "@/app/components/Button";
import Link from "next/link";
import TextBox from "@/app/components/TextBox";
import Image from "next/image";
import signupimg from "../../../public/images/signin.jpg";
import React, { useState } from "react";
import Doubletext from "@/app/components/doubletext";
import PasswardBox from "@/app/components/PasswardBox";

export default function SignUp() {
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
          <h1 className="text-4xl font-extrabold mb-6  text-[#385A64] text-center">Sign UP</h1>
          <form >
            <div className=" flex flex-col gap-6">
            <Doubletext/>
            <TextBox
          label="Email Address"
          name="email" 
          placeholder="Enter The Email "
        />
        <TextBox
          label="Phone Number"
          name="Phone Number" 
          placeholder=" Enter Your Phone Number "
        />
            

            <PasswardBox
        label="Password"
        name="password"
        placeholder="Enter your password"
      />
      
          <Button
              type="submit"
              className="w-[70%] py-2 text-white bg-[#385A64] rounded"
            >
              Sign Up
            </Button>
          </div>
            

            <div className="mt-4 text-start">
              <p className="text-xs">
                If You have an account?{" "}
                <Link className="underline text-main-dark" href="/signup">
                  Sign In here
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
