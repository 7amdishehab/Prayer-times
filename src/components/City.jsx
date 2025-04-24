import React from "react";

function City({ cities, onSetCity }) {
  return (
    <div className="w-[150px] md:w-fit text-center flex flex-col justify-start gap-3">
      <h3 className="text-white font-bold md:font-extrabold text-md md:text-lg">
        المدينة
      </h3>
      <select
        defaultValue=""
        onChange={(e) => onSetCity(e.target.value)}
        className="w-fit text-amber-100 font-semibold md:font-bold lg:font-extrabold text-sm md:text-lg lg:text-2xl border-l-1 border-r-1 border-amber-100 rounded-md outline-0 px-2 md:py-1"
      >
        <option value="" disabled>
          اختر مدينة
        </option>
        {cities.map((city) => (
          <option
            className="bg-amber-50 text-amber-800"
            key={city.value}
            value={city.value}
          >
            {city.name}
          </option>
        ))}
      </select>
    </div>
  );
}

export default City;
