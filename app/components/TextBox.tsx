interface TextBoxProps {
    label: string;
    name: string;
    placeholder?: string;
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void; // Add handleChange prop
}

export default function TextBox({
                                    label,
                                    name,
                                    placeholder = "",
                                    handleChange,
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
                    name={name}
                    type="text"
                    placeholder={placeholder}
                    className="block w-full rounded-md border-1 border-[#385A64] focus:outline-none py-1.5 pl-4 text-gray-900 focus:ring-2 focus:ring-[#385A64] sm:text-sm sm:leading-6"
                    onChange={(e)=>handleChange(e)} // Use handleChange
                />
            </div>
        </div>
    );
}
