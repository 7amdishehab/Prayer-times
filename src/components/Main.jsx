import React from "react";
import UpperSec from "./UpperSec";
import LowerSec from "./LowerSec";

function Main({ onSetCity, prayerTimes, date, cities }) {
  return (
    <section
      dir="rtl"
      className="min-h-screen bg-[url(./assets/background.jpg)] bg-cover bg-center flex items-center justify-center"
    >
      <div className="w-[350px] md:w-[500px] lg:w-[800px] container backdrop-blur-xs p-3 md:p-4 rounded-md border-1 border-amber-50">
        <UpperSec onSetCity={onSetCity} date={date} cities={cities} />
        <LowerSec prayerTimes={prayerTimes} />
      </div>
    </section>
  );
}

export default Main;
