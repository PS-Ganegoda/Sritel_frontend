"use client";

import Button from "@/app/components/Button";
import Link from "next/link";
import Image from "next/image";
import signupimg from "../../../public/images/signin.jpg";
import React, { useState } from "react";
import Doubletext from "@/app/components/doubletext";
import PasswardBox from "@/app/components/PasswardBox";
import TextBox from "@/app/components/TextBox";
import {baseUrlAUTH} from "@/app/config";
import {useCookies} from "react-cookie";
import {useRouter} from "next/navigation";

export default function SignUp() {
    const router = useRouter();
    const [cookies, setCookie, removeCookie] = useCookies(['cookie-name']);

    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phoneNumber: "",
        nic: "",
        password: "",
        confirmPassword: "",
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        // console.log(e);
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        console.log(formData);
        const { firstName, lastName, email, phoneNumber, nic, password, confirmPassword } = formData;

        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        const raw = JSON.stringify({
            first_name: firstName,
            last_name: lastName,
            email,
            nic,
            password,
            password_confirmation: confirmPassword,
            phoneNumber,
            username: `${email}`,
        });

        console.log(raw);

        const requestOptions = {
            method: "POST",
            headers: myHeaders,
            body: raw,
            redirect: "follow" as const,
        };

        try {
            const response = await fetch(baseUrlAUTH + "/auth/signup", requestOptions);
            const result = await response.json();
            console.log(result);
            if (response.ok) {
                response.json().then((data) => {
                    console.log(data);

                    // setCookie('jwtToken', data.token, { path: "/" });

                });
                alert("Signup successful!");
                router.push("/signin");
            } else {
                alert("Signup failed: " + result.message);
            }
        } catch (error) {
            console.error("Error:", error);
            alert("Signup error occurred.");
        }
    };

    return (
        <div className="flex justify-center items-center min-h-screen">
            <div className="flex w-11/12 lg:w-4/6 max-w-4xl shadow-[0_10px_20px_rgba(0,0,0,0.15)] rounded-lg overflow-hidden">
                <div className="w-1/2 hidden lg:block">
                    <Image src={signupimg} alt="Auth Image" className="object-cover w-full h-full" />
                </div>

                {/* Form Section */}
                <div className="w-full lg:w-1/2 p-6 flex flex-col justify-center bg-white">
                    <h1 className="text-4xl font-extrabold mb-6 text-[#385A64] text-center">Sign UP</h1>
                    <form onSubmit={handleSubmit}>
                        <div className="flex flex-col gap-4">
                            <Doubletext handleChange={handleChange} />
                            <TextBox
                                label="Email Address"
                                name="email"
                                placeholder="Enter The Email"
                                handleChange={handleChange}
                            />
                            <TextBox
                                label="Phone Number"
                                name="phoneNumber"
                                placeholder="Enter Your Phone Number"
                                handleChange={handleChange}
                            />
                            <TextBox
                                label="NIC Number"
                                name="nic"
                                placeholder="Enter Your NIC Number"
                                handleChange={handleChange}
                            />
                            <PasswardBox
                                label="Password"
                                name="password"
                                placeholder="Enter your password"
                                handleChange={handleChange}
                            />
                            <PasswardBox
                                label="Confirm Password"
                                name="confirmPassword"
                                placeholder="Confirm your password"
                                handleChange={handleChange}
                            />
                            <div className="flex justify-start">
                                <Button type="submit" className="w-[50%] py-2 text-white bg-[#385A64] rounded">
                                    Sign Up
                                </Button>
                            </div>
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
