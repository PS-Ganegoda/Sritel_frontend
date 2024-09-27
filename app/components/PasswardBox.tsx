"use client";
import React from "react";
import { Input } from "@nextui-org/react";
import { EyeFilledIcon } from "./EyeFilledIcon";
import { EyeSlashFilledIcon } from "./EyeSlashFilledIcon";

interface Props {
  label: string;
  name: string;
  placeholder?: string;
}

export default function PasswardBox({
  label,
  name,
  placeholder = "",
}: Props) {
  const [isVisible, setIsVisible] = React.useState(false);

  const toggleVisibility = () => setIsVisible(!isVisible);

  return (
    <div>
      <label
        htmlFor={name}
        className="block text-sm font-medium leading-6 text-gray-900"
      >
        {label}
      </label>
      <div className="relative max-w-xs">
        <input
          id={name}
          placeholder={placeholder}
          type={isVisible ? "text" : "password"}
          className="border border-[#385A64] rounded-md p-2 pr-10 w-full"
        />
        <button
          className="absolute inset-y-0 right-0 pr-3 flex items-center"
          type="button"
          onClick={toggleVisibility}
          aria-label="toggle password visibility"
        >
          {isVisible ? (
            <EyeSlashFilledIcon className="text-2xl text-gray-500" />
          ) : (
            <EyeFilledIcon className="text-2xl text-gray-500" />
          )}
        </button>
      </div>
    </div>
  );
}
