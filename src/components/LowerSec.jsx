import React from "react";
import Prayer from "./Prayer";

function LowerSec({ prayerTimes }) {
  const convertTo12Hour = (time24) => {
    if (!time24) return "";
    const [hours, minutes] = time24.split(":").map(Number);
    const period = hours >= 12 ? "م" : "ص";
    const hours12 = hours % 12 || 12;
    return `${hours12}:${minutes.toString().padStart(2, "0")} ${period}`;
  };

  const prayers = [
    { name: "الفجر", key: "Fajr" },
    { name: "الظهر", key: "Dhuhr" },
    { name: "العصر", key: "Asr" },
    { name: "المغرب", key: "Maghrib" },
    { name: "العشاء", key: "Isha" },
  ];

  return (
    <div className="flex flex-col justify-center items-center gap-2 mt-8">
      {prayers.map((prayer) => (
        <Prayer
          key={prayer.key}
          name={prayer.name}
          time={convertTo12Hour(prayerTimes[prayer.key])}
        />
      ))}
    </div>
  );
}

export default LowerSec;
