import TextBox from "@/app/components/TextBox";
import React from "react";

interface DoubletextProps {
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void; // Add handleChange prop
}

export default function Doubletext({ handleChange }: DoubletextProps) {
    return (
        <div className="flex w-full flex-wrap md:flex-nowrap gap-4 rounded">
            <TextBox
                label="First Name"
                name="firstName"
                placeholder="First Name"
                handleChange={handleChange} // Pass handleChange
            />
            <TextBox
                label="Last Name"
                name="lastName"
                placeholder="Last Name"
                handleChange={handleChange} // Pass handleChange
            />
        </div>
    );
}
