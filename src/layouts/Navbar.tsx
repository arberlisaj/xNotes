import DarkMode from "@/components/DarkMode";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="sticky top-0 max-w-full py-2 bg-white border-b shadow-md dark:text-gray-200 dark:border-slate-700 dark:bg-gray-900">
      <nav className="flex justify-between items-center max-w-[1100px] m-auto">
        <Link to="/tasks" className="text-xl font-bold hover:opacity-60">
          xNotes
        </Link>
        <div className="flex items-center gap-2">
          <DarkMode />
          <NavLink to="tasks" className="link">
            Task Board
          </NavLink>
          <NavLink to="expenses" className="link">
            Expenses
          </NavLink>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
