import React from "react";

export default function Button(
  props: React.ButtonHTMLAttributes<HTMLButtonElement>
) {
  return (
    <button
      {...props}
      className={`${props.className} bg-[#385A64] text-white  p-2 rounded-lg hover:bg-fuchsia-400`}
    >
      {props.children}
    </button>
  );
}