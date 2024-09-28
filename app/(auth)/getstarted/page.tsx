"use client";

import Button from "@/app/components/Button";
import Navbar from "@/app/components/Navbar1";
import Image from "next/image";
import React from "react";
import getStartedImg from "../../../public/images/getstarted.jpg"; 

export default function GetStarted() {
  return (
    <div className={`flex flex-col min-h-[98vh] bg-gray-50 dark:bg-gray-900`}>
      <Navbar />

      <div className="flex flex-col-reverse lg:flex-row w-full max-w-7xl mx-auto my-10 p-8 lg:p-16 bg-white dark:bg-gray-800 shadow-lg rounded-lg flex-grow">
        <div className="lg:w-1/2 flex flex-col justify-center items-center lg:items-start text-center lg:text-left">
          <h1 className="text-3xl lg:text-5xl font-extrabold mb-4 text-[#c96cc3] dark:[#c96cc3]">
            Sri Tel Ltd (STL)
          </h1>
          <p className="text-lg mb-8 text-gray-600 dark:text-gray-300">
            Sri Lankan-Based Telecommunication Company, Offers Mobile Communication Services Across The Nation. We Are Providing State-Of-The-Art GSM/3G/4G/LTE Services, Sri Tel Is Committed To Enhancing Customer Care And Experience Through Modern Web And Smartphone Apps.
          </p>
          <div className="flex space-x-4">
            <Button
              type="button"
              className="py-3 px-6 bg-[#2b4b55] text-white font-semibold rounded-lg hover:bg-[#e5a8df]"
            >
              Get Started
            </Button>

            <Button
              type="button"
              className="py-3 px-6 bg-transparent border border-[#0b4b55] text-[#0b4b55] font-semibold rounded-lg hover:bg-[#e5a8df] hover:border-[#2b4b55] dark:border-white dark:text-white dark:hover:bg-gray-700"
            >
              Learn More
            </Button>
          </div>
        </div>

        <div className="lg:w-1/2">
          <Image src={getStartedImg} alt="SriTel Image" className="object-cover w-full h-full" />
        </div>
      </div>

      <footer className="text-center py-1 bg-[#c96cc3] text-white">
        © SriTel (Pvt) Ltd
      </footer>
    </div>
  );
}
