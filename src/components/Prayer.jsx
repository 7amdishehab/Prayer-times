import React from "react";

function Prayer({ name, time }) {
  return (
    <div className="w-full flex justify-between items-center font-semibold py-2 px-4 bg-amber-100 text-amber-900 rounded-sm">
      <p className="">{name}</p>
      <p className="text-amber-700">{time}</p>
    </div>
  );
}

export default Prayer;
