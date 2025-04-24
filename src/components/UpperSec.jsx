import React, { useEffect, useState } from "react";
import City from "./City";
import DateBox from "./DateBox";
import Title from "./Title";

function UpperSec({ onSetCity, cities }) {
  const [timeString, setTimeString] = useState("");
  const [dateString, setDateString] = useState("");

  useEffect(() => {
    const updateDateTime = () => {
      const now = new Date();
      const time = now.toLocaleTimeString("ar-EG", {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true,
      });
      const date = now.toLocaleDateString("ar-EG", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
      });
      setTimeString(time);
      setDateString(date);
    };

    updateDateTime();
    const interval = setInterval(updateDateTime, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col items-center">
      <Title />
      <div className="flex gap-3 items-top justify-between w-full px-3 pb-8 border-b-1 border-white">
        <City onSetCity={onSetCity} cities={cities} />
        <DateBox title="الوقت" value={timeString} />
        <DateBox title="التاريخ" value={dateString} />
      </div>
    </div>
  );
}

export default UpperSec;
