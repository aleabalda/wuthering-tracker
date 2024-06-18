export const Navbar: React.FC = () => {
  return (
    <nav>
      <ul className="flex list-none gap-4 text-lg">
        <li>
          <a href="#daily">Daily</a>
        </li>
        <li>
          <a href="#weekly">Weekly</a>
        </li>
        <li>
          <a href="#events">Events</a>
        </li>
      </ul>
    </nav>
  );
};
