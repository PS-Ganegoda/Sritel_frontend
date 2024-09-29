"use client";
import {EyeFilledIcon, EyeSlashFilledIcon} from "@nextui-org/shared-icons";
import React, {useState} from "react";

interface PasswardBoxProps {
    label: string;
    name: string;
    placeholder?: string;
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void; // Add handleChange prop
}

export default function PasswardBox({
                                        label,
                                        name,
                                        placeholder = "",
                                        handleChange,
                                    }: PasswardBoxProps) {
    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => setIsVisible(!isVisible);

    return (
        <div>
            <label
                htmlFor={name}
                className="block text-sm font-medium leading-6 text-gray-900"
            >
                {label}
            </label>
            <div className="relative w-full">
                <input
                    id={name}
                    name={name}
                    placeholder={placeholder}
                    type={isVisible ? "text" : "password"}
                    className="border border-[#385A64] rounded-md p-2 pr-10 w-full"
                    onChange={(e)=>handleChange(e)} // Use handleChange
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
