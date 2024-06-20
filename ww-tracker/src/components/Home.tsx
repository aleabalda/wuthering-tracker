import { Daily } from "./Daily";
import { Events } from "./Events";
import { Weekly } from "./Weekly";

export const Home: React.FC = () => {
  return (
    <main className="flex px-5 py-4 justify-between bg-wwBg bg-cover bg-no-repeat">
      <Daily />
      <Weekly />
      <Events />
    </main>
  );
};
