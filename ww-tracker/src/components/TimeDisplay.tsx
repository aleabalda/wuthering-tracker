// src/App.tsx
import React, { useState } from "react";
import { Server, servers } from "./servers";
import { ServerTime } from "./ServerTime";

export const TimeDisplay: React.FC = () => {
  const [selectedServer, setSelectedServer] = useState<Server>(servers[0]);

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const server = servers.find((server) => server.name === event.target.value);
    if (server) {
      setSelectedServer(server);
    }
  };

  return (
    <div className="bg-primary flex items-center justify-between gap-4">
      <ServerTime server={selectedServer} />
      <select
        className="bg-primary text-sm sm:text-lg"
        onChange={handleChange}
        value={selectedServer.name}
      >
        {servers.map((server) => (
          <option key={server.name} value={server.name}>
            {server.name}
          </option>
        ))}
      </select>
    </div>
  );
};
