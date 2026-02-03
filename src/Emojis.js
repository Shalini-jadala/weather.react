import React from "react";

export default function Forecast() {
  let forecast = [
    { day: "Tue", high: 19, low: 7, emoji: "☀️" },
    { day: "Wed", high: 18, low: 8, emoji: "⛅" },
    { day: "Thu", high: 19, low: 12, emoji: "🌧️" },
    { day: "Fri", high: 18, low: 12, emoji: "🌦️" },
    { day: "Sat", high: 17, low: 14, emoji: "☁️" },
  ];

  return (
    <div className="forecast-grid">
      {forecast.map((forecast) => (
        <div className="forecast-cell" key={forecast.day}>
          <div>{forecast.day}</div>
          <div>{forecast.emoji}</div>
          <div>
            {forecast.high}° {forecast.low}°
          </div>
        </div>
      ))}
    </div>
  );
}
