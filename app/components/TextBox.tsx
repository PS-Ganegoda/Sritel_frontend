import React from "react";

interface TextBoxProps {
  label: string;
  name: string;
  placeholder?: string; // Removed null option for clarity

}

export default function TextBox({
  label,
  name,
  // Default to an empty string if not provided
  placeholder = "",   // Default to an empty string if not provided

}: TextBoxProps) {
  return (
    <div>
      <label
        htmlFor={name}
        className="block text-sm font-medium leading-6 text-gray-900"
      >
        {label}
      </label>
      <div className="relative mt-2 rounded-md shadow-sm">
      <input  type="email" placeholder="Enter your email" 
          className="block w-full rounded-md border-0 focus:outline-none mt py-1.5 pl-4 text-gray-900 ring-1 ring-inset ring-main-light focus:ring-2 focus:ring-inset focus:ring-main-dark sm:text-sm sm:leading-6"
        />
      </div>
    </div>
  );
}
