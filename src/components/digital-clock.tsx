"use client";
import { Card } from "pixel-retroui";
import React, { useEffect, useState } from "react";

export default function DigitalClock() {
  const [time, setTime] = useState<string>("");
  const [greeting, setGreeting] = useState<string>("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();

      // format clock
      const formatted = now.toLocaleTimeString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
      });
      setTime(formatted);

      // greeting logic
      const hour = now.getHours();
      let msg = "";

      if (hour >= 5 && hour < 12) msg = "Good morning 🌅";
      else if (hour >= 12 && hour < 17) msg = "Good afternoon ☀️";
      else if (hour >= 17 && hour < 21) msg = "Good evening 🌇";
      else msg = "Good night 🌙";

      setGreeting(msg);
    };

    updateTime(); // run once immediately
    const interval = setInterval(updateTime, 1000);

    return () => clearInterval(interval); // cleanup
  }, []);

  return (
    <Card className="p-4 text-center text-xl font-mono h-fit">
      <h4>{time || "Loading..."}</h4>
      <p className="pt-6 font-semibold">{greeting}</p>
    </Card>
  );
}
