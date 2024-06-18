import { Header } from "./Header";
import { Footer } from "./Footer";
import { Home } from "./Home";
import { Times } from "./Times";

export const Layout: React.FC = () => {
  return (
    <div className="flex flex-col gap-3 p-5 font-tw">
      <Header />
      <Times />
      <Home />
      <Footer />
    </div>
  );
};
