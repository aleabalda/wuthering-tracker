// src/servers.ts
export interface Server {
  name: string;
  offset: number; // UTC offset in hours
  dailyReset: string; // Daily reset time in HH:MM format (UTC)
}

export const servers: Server[] = [
  { name: "America", offset: -4, dailyReset: "09:00" }, // Double-check this offset and reset time
  { name: "Asia", offset: 8, dailyReset: "20:00" },
  { name: "Europe", offset: 1, dailyReset: "03:00" },
  { name: "HMT", offset: 8, dailyReset: "20:00" },
  { name: "SEA", offset: 8, dailyReset: "20:00" },
];
