import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle("dark");
  };

  return (
    <div className="flex justify-between items-center px-8 py-4 bg-white dark:bg-gray-800 shadow-md">
      <div className="flex items-center">
        <Image src="/images/sritel-logo.png" alt="Sri Tel Logo" width={50} height={50} />
        <h1 className="ml-4 text-2xl font-bold text-[#c96cc3] dark:text-white">
          {/* You can add a title or logo text here if needed */}
        </h1>
      </div>
      <div className="flex items-center space-x-4">
        <div className="flex items-center">
          <label
            htmlFor="darkModeToggle"
            className="mr-2 text-[#e5a8df] dark:text-gray-300"
          >
            Dark
          </label>
          <button
            id="darkModeToggle"
            onClick={toggleDarkMode}
            className={`relative inline-flex h-6 w-12 rounded-full transition-colors ${
              isDarkMode ? "bg-[#2b4b55]" : "bg-gray-300"
            }`}
          >
            <span
              className={`absolute left-0 w-6 h-6 bg-white rounded-full shadow-md transform transition-transform ${
                isDarkMode ? "translate-x-6" : "translate-x-0"
              }`}
            />
          </button>
        </div>

        {/* Updated Nav Links */}
        <Link href="/chat">
          <button
            type="button"
            className="py-2 px-4 text-[#2b4b55] font-semibold bg-transparent border border-[#2b4b55] rounded hover:bg-[#e5a8df] dark:border-white dark:text-white dark:hover:bg-gray-700"
          >
            Signin
          </button>
        </Link>

        <Link href="/bill">
          <button
            type="button"
            className="py-2 px-4 text-[#2b4b55] font-semibold bg-transparent border border-[#2b4b55] rounded hover:bg-[#e5a8df] dark:border-white dark:text-white dark:hover:bg-gray-700"
          >
            Signup
          </button>
        </Link>
      </div>
    </div>
  );
}