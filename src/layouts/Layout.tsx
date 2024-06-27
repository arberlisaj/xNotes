import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

const Layout = () => (
  <main className="min-h-screen px-2 pb-8 dark:bg-gray-900">
    <Navbar />
    <Outlet />
  </main>
);

export default Layout;
