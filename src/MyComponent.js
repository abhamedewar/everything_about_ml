import React, { useEffect } from "react";

function MyComponent({ title, desc }) {
  useEffect(() => {
    console.log(title, desc);
  }, []);

  return (
    <div className="text-justify flex flex-col items-center border  border-gray-300 shadow-xl">
      <div className="font-semibold text-xl px-5 py-2 w-full">{title}</div>
      <div className="text-lg p-5">{desc}</div>
    </div>
  );
}

export default MyComponent;
