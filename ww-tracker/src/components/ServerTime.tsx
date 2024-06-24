// src/ServerTime.tsx
import React, { useEffect, useState } from "react";
import { Server } from "./servers";
import { getTimeUntilReset } from "./utils";

interface ServerTimeProps {
  server: Server;
}

export const ServerTime: React.FC<ServerTimeProps> = ({ server }) => {
  // const [currentTime, setCurrentTime] = useState<Date>(
  //   getCurrentServerTime(server.offset)
  // );
  const [timeUntilReset, setTimeUntilReset] = useState(
    getTimeUntilReset(server)
  );

  useEffect(() => {
    const intervalId = setInterval(() => {
      // setCurrentTime(getCurrentServerTime(server.offset));
      const timeLeft = getTimeUntilReset(server);
      setTimeUntilReset(timeLeft);

      if (
        timeLeft.hours === 0 &&
        timeLeft.minutes === 0 &&
        timeLeft.seconds === 0
      ) {
        window.localStorage.clear();
        console.log("Local storage cleared");
      }
    }, 1000); // Update every second

    return () => clearInterval(intervalId);
  }, [server]);

  return (
    <div>
      {/* <p>Current Time: {currentTime.toUTCString()}</p> */}
      <p>
        Time until Daily Reset: {timeUntilReset.hours} hours,{" "}
        {timeUntilReset.minutes} minutes, {timeUntilReset.seconds} seconds
      </p>
    </div>
  );
};

export default ServerTime;
