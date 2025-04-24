import React from "react";

function Prayer({ name, time }) {
  return (
    <div className="w-full flex justify-between items-center font-semibold md:font-bold py-2 px-4 bg-amber-100 text-amber-900 rounded-sm">
      <p>{name}</p>
      <p className="border-t-1 border-white">{time}</p>
    </div>
  );
}

export default Prayer;
