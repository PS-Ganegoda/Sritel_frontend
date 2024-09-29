"use client";

import Button from "@/app/components/Button";
import Link from "next/link";
import TextBox from "@/app/components/TextBox";
import Image from "next/image";
import signupimg from "../../../public/images/signup.jpg";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import {baseUrlAUTH} from "@/app/config";
import {useCookies} from "react-cookie";

export default function Signin() {
    const [cookies, setCookie, removeCookie] = useCookies(['cookie-name']);

    const router = useRouter();
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        // console.log(e);
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };
function handlesignin(){
  router.push("/landing");
}
    const [formData, setFormData] = useState({
        username: "",
        password: ""
    });


  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    console.log(formData);

      const myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");

      const raw = JSON.stringify(formData);

      const requestOptions = {
          method: "POST",
          headers: myHeaders,
          body: raw,
          redirect: "follow"
      };

      fetch(baseUrlAUTH +"/auth/login", requestOptions)
          .then((response) => {
              return response.json()
          })
          .then((result) => {
              console.log(result)
              if (result.token) {

                  setCookie('jwtToken', result.token, { path: "/" });
                  handlesignin();
              }else {
                  alert(result.message)
              }
          })
          .catch((error) => console.error(error));

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
            <div className="flex flex-col gap-4">
            <TextBox
          label="Email Address"
          name="username"
          placeholder="Enter your email"
          handleChange={handleChange}
        />
        <TextBox
          label="Password"
          name="password"
          placeholder="Enter your passward"
          handleChange={handleChange}
        />
           

             

            <div className="mb-4 text-start">
              <Link className="underline text-fuchsia-400" href="/forgot-password">
                Forgot password?
              </Link>
            </div>

            <Button
              type="submit"
              className="w-[50%] py-2 text-white bg-[#385A64] rounded"

            >
              Sign In
            </Button>
            </div>
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
