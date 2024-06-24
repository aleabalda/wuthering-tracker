import { TimeDisplay } from "./TimeDisplay";

export const Header: React.FC = () => {
  return (
    <header className="flex p-5 bg-primary items-center justify-between">
      <h1 className="text-3xl font-twBold">Wuthering Waves Tracker</h1>
      <TimeDisplay />
    </header>
  );
};
