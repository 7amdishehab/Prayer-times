import React from "react";

function DateBox({ title, value }) {
  return (
    <div className="w-[150px] md:w-fit flex text-center justify-start flex-col gap-3">
      <h3 className="text-white font-bold md:font-extrabold text-md md:text-lg">
        {title}
      </h3>
      <h4
        dir="ltr"
        className="w-full text-amber-100 font-semibold md:font-bold lg:font-extrabold text-sm md:text-lg lg:text-2xl border-r-1 border-l-1 border-amber-100 rounded-md outline-0 px-2 py-1 md:py-2"
      >
        {value}
      </h4>
    </div>
  );
}

export default DateBox;
