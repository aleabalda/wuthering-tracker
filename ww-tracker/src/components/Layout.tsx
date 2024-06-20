import { Header } from "./Header";
import { Footer } from "./Footer";
import { Home } from "./Home";

export const Layout: React.FC = () => {
  return (
    <div className="flex flex-col font-tw text-[#e0e0e0]">
      <Header />
      <Home />
      <Footer />
    </div>
  );
};
