import React from "react";

interface TextBoxProps {
  label: string;
  name: string;
  placeholder?: string; // Optional placeholder
}

export default function TextBox({
  label,
  name,
  placeholder = "", // Default to an empty string if not provided
}: TextBoxProps) {
  return (
    <div>
      <label
        htmlFor={name}
        className="block text-sm font-medium leading-6 text-gray-900"
      >
        {label}
      </label>
      <div className="relative mt-1 rounded-md shadow-sm">
        <input
          id={name}
          type="text" // Changed to "text" for a generic text box
          placeholder={placeholder}
          className="block w-full rounded-md border-1 border-[#385A64] focus:outline-none py-1.5 pl-4 text-gray-900 focus:ring-2 focus:ring-[#385A64] sm:text-sm sm:leading-6"
        />
      </div>
    </div>
  );
}
