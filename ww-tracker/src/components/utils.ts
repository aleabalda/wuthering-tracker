// src/utils.ts
import { Server } from "./servers";

export const getCurrentServerTime = (offset: number): Date => {
  const utc = new Date().getTime() + new Date().getTimezoneOffset() * 60000;
  return new Date(utc + 3600000 * offset);
};

export const getTimeUntilReset = (
  server: Server
): { hours: number; minutes: number; seconds: number } => {
  const now = getCurrentServerTime(server.offset);
  const resetTime = new Date(now);
  const [resetHour, resetMinute] = server.dailyReset.split(":").map(Number);

  // Set reset time to UTC
  resetTime.setUTCHours(resetHour, resetMinute, 0, 0);

  // Adjust resetTime to the correct date if it has already passed today
  if (now.getTime() > resetTime.getTime()) {
    resetTime.setUTCDate(resetTime.getUTCDate() + 1);
  }

  const timeDifference = resetTime.getTime() - now.getTime();
  const hours = Math.floor(timeDifference / (1000 * 60 * 60));
  const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

  return { hours, minutes, seconds };
};
