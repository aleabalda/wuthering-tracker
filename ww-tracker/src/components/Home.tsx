import { Daily } from "./Daily";
import { Events } from "./Events";
import { Weekly } from "./Weekly";

export const Home: React.FC = () => {
  return (
    <main className="flex flex-col gap-5">
      <Daily />
      <Weekly />
      <Events />
    </main>
  );
};
