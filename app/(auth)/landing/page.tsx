"use client";

import Navbar from "@/app/components/Navbar"; // Updated import path if necessary
import React from "react";
import Link from "next/link";
import Image from "next/image";
import getStartedImg from "../../../public/images/getstarted.jpg"; // Ensure the path is correct

export default function LandingPage() {
  return (
    <div className={`flex flex-col min-h-[98vh] bg-gray-50 dark:bg-gray-900`}>
      <Navbar />

      <div className="flex flex-col items-center justify-center flex-grow max-w-7xl mx-auto my-10 p-8 lg:p-16 bg-white dark:bg-gray-800 shadow-lg rounded-lg">
        <h1 className="text-4xl font-extrabold mb-4 text-[#c96cc3] dark:text-[#c96cc3]">
          Welcome to Sri Tel Ltd!
        </h1>
        <p className="text-lg mb-8 text-gray-600 dark:text-gray-300 text-center">
          Explore our services and manage your account with ease. Choose an option below:
        </p>

        <div className="mb-6">
          <Image src={getStartedImg} alt="SriTel Services" />
        </div>

        <div className="flex flex-row space-x-4">
        <Link href="/chat">
         <button className="py-3 px-6 bg-[#2b4b55] text-white font-semibold rounded-lg hover:bg-[#e5a8df]">
         Chat Support
         </button>
  </Link>
  
  <Link href="/bill">
    <button className="py-3 px-6 bg-[#2b4b55] text-white font-semibold rounded-lg hover:bg-[#e5a8df]">
      View Bills
    </button>
  </Link>
</div>

      </div>

      <footer className="text-center py-1 bg-[#c96cc3] text-white">
        © SriTel (Pvt) Ltd
      </footer>
    </div>
  );
}
