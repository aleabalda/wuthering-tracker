import React, { useEffect, useState } from "react";

// Define a type for server regions
type ServerRegion = "America" | "Asia" | "Europe" | "HMT" | "SEA";

// Helper function to get current time in a specific time zone
const getCurrentTimeInTimeZone = (timeZone: string): Date => {
  return new Date(new Date().toLocaleString("en-US", { timeZone }));
};

// Function to calculate the next daily reset time for a specific server region
const getNextDailyResetTime = (
  server: ServerRegion,
  timeZone: string
): Date => {
  const now = getCurrentTimeInTimeZone(timeZone);
  const nextDailyReset = new Date(now);

  switch (server) {
    case "America":
    case "Europe":
      nextDailyReset.setUTCHours(3, 0, 0, 0); // Set to 3 AM UTC
      if (now.getUTCHours() >= 3) {
        nextDailyReset.setUTCDate(nextDailyReset.getUTCDate() + 1);
      }
      break;
    case "Asia":
    case "HMT":
    case "SEA":
      nextDailyReset.setUTCHours(20, 0, 0, 0); // Set to 8 PM UTC
      if (now.getUTCHours() >= 20) {
        nextDailyReset.setUTCDate(nextDailyReset.getUTCDate() + 1);
      }
      break;
    default:
      break;
  }

  return nextDailyReset;
};

// Function to calculate the next weekly reset time for a specific server region
const getNextWeeklyResetTime = (
  server: ServerRegion,
  timeZone: string
): Date => {
  const now = getCurrentTimeInTimeZone(timeZone);
  const nextWeeklyReset = new Date(now);

  switch (server) {
    case "America":
    case "Europe":
      nextWeeklyReset.setUTCHours(9, 0, 0, 0); // Set to 9 AM UTC
      nextWeeklyReset.setUTCDate(
        nextWeeklyReset.getUTCDate() + (8 - now.getUTCDay())
      );
      if (now.getUTCDay() === 1 && now.getUTCHours() < 9) {
        nextWeeklyReset.setUTCDate(nextWeeklyReset.getUTCDate() - 7);
      }
      break;
    case "Asia":
    case "HMT":
    case "SEA":
      nextWeeklyReset.setUTCHours(20, 0, 0, 0); // Set to 8 PM UTC
      nextWeeklyReset.setUTCDate(
        nextWeeklyReset.getUTCDate() + ((7 - now.getUTCDay() + 1) % 7)
      ); // Next Sunday
      if (now.getUTCDay() === 0 && now.getUTCHours() < 20) {
        nextWeeklyReset.setUTCDate(nextWeeklyReset.getUTCDate() - 7);
      }
      break;
    default:
      break;
  }

  return nextWeeklyReset;
};

export const Times: React.FC = () => {
  const [server, setServer] = useState<ServerRegion>("America");

  const timeZones: { [key in ServerRegion]: string } = {
    America: "UTC",
    Asia: "Asia/Tokyo",
    Europe: "Europe/London",
    HMT: "Asia/Hong_Kong",
    SEA: "Asia/Singapore",
  };

  const [currentServerTime, setCurrentServerTime] = useState(
    getCurrentTimeInTimeZone(timeZones[server])
  );
  const [dailyResetTime, setDailyResetTime] = useState(
    getNextDailyResetTime(server, timeZones[server])
  );
  const [weeklyResetTime, setWeeklyResetTime] = useState(
    getNextWeeklyResetTime(server, timeZones[server])
  );

  // Update the current time every second
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentServerTime(getCurrentTimeInTimeZone(timeZones[server]));
    }, 1000);
    return () => clearInterval(interval);
  }, [server]);

  // Update the reset times at the beginning of each minute
  useEffect(() => {
    const interval = setInterval(() => {
      setDailyResetTime(getNextDailyResetTime(server, timeZones[server]));
      setWeeklyResetTime(getNextWeeklyResetTime(server, timeZones[server]));
    }, 60000);
    return () => clearInterval(interval);
  }, [server]);

  return (
    <div className="flex flex-col gap-2">
      <ul className="flex gap-3">
        <li
          className="cursor-pointer"
          onClick={() => {
            setServer("America");
          }}
        >
          America
        </li>
        <li
          className="cursor-pointer"
          onClick={() => {
            setServer("Asia");
          }}
        >
          Asia
        </li>
        <li
          className="cursor-pointer"
          onClick={() => {
            setServer("Europe");
          }}
        >
          Europe
        </li>
        <li
          className="cursor-pointer"
          onClick={() => {
            setServer("HMT");
          }}
        >
          HMT
        </li>
        <li
          className="cursor-pointer"
          onClick={() => {
            setServer("SEA");
          }}
        >
          SEA
        </li>
      </ul>
      <p>
        {server} Server Time: {currentServerTime.toLocaleString()}
      </p>
      <p>Next Daily Reset Time: {dailyResetTime.toLocaleString()}</p>
      <p>Next Weekly Reset Time: {weeklyResetTime.toLocaleString()}</p>
    </div>
  );
};
