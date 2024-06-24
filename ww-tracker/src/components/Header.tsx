import { TimeDisplay } from "./TimeDisplay";

export const Header: React.FC = () => {
  return (
    <header className="flex flex-col xl:flex-row xl:justify-between p-5 bg-primary  w-full">
      <h1 className="text-3xl font-twBold">Wuthering Waves Tracker</h1>
      <TimeDisplay />
    </header>
  );
};
