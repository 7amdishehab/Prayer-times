import React, { useEffect, useState } from "react";
import Main from "./components/Main";

function App() {
  const [prayerTimes, setPrayerTimes] = useState({});
  const [date, setDate] = useState("");
  const [city, setCity] = useState("");

  const liveDate = new Date().toLocaleDateString().split("/").join("-");

  const cities = [
    { name: "الإسكندرية", value: "Alexandria" },
    { name: "القاهرة", value: "Cairo" },
    { name: "طنطا", value: "Tanta" },
    { name: "المنصورة", value: "Mansoura" },
    { name: "الاسماعيلية", value: "Ismailia" },
    { name: "أسوان", value: "Aswan" },
    { name: "الأقصر", value: "Luxor" },
  ];

  useEffect(() => {
    if (!city) return;

    const fetchPrayerTimes = async () => {
      try {
        const res = await fetch(
          `https://api.aladhan.com/v1/timingsByCity/${liveDate}?city=${city}&country=EG`
        );
        const data = await res.json();
        setPrayerTimes(data.data.timings);
        setDate(liveDate);
      } catch (err) {
        console.error("Error fetching prayer times:", err);
      }
    };

    fetchPrayerTimes();
  }, [city, liveDate]);

  return (
    <Main
      cities={cities}
      onSetCity={setCity}
      prayerTimes={prayerTimes}
      date={date}
    />
  );
}

export default App;
