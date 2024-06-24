import { Daily } from "./Daily";
import { Events } from "./Events";
import { Weekly } from "./Weekly";

export const Home: React.FC = () => {
  return (
    <main className="flex flex-col xl:flex-row flex-1 gap-4 px-5 py-4 justify-between min-w-full bg-ww bg-cover bg-no-repeat bg-center">
      <Daily />
      <Weekly />
      <Events />
    </main>
  );
};
