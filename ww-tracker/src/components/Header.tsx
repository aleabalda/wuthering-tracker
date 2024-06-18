import { Navbar } from "./Navbar";

export const Header: React.FC = () => {
  return (
    <header className="flex items-center justify-between">
      <h1 className="text-2xl">Wuthering Waves Tracker</h1>
      <Navbar />
    </header>
  );
};
