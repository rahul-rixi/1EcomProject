// src/admin/components/Sidebar.jsx
import { Link, useLocation } from "react-router-dom";
import { FaTshirt, FaUsers, FaBoxOpen, FaChartBar } from "react-icons/fa";

const links = [
  { to: "/admin", label: "Dashboard", icon: <FaChartBar /> },
  { to: "/admin/products", label: "Products", icon: <FaBoxOpen /> },
  { to: "/admin/categories", label: "Categories", icon: <FaTshirt /> },
  { to: "/admin/users", label: "Users", icon: <FaUsers /> },
];

export default function Sidebar() {
  const location = useLocation();
  return (
    <aside className="w-64 bg-gray-900 text-white p-4 hidden md:block">
      <h2 className="text-2xl font-bold mb-6">Admin Panel</h2>
      <nav className="flex flex-col gap-4">
        {links.map(({ to, label, icon }) => (
          <Link
            key={to}
            to={to}
            className={`flex items-center gap-2 px-3 py-2 rounded-md hover:bg-gray-700 ${
              location.pathname === to ? "bg-gray-700" : ""
            }`}
          >
            {icon} <span>{label}</span>
          </Link>
        ))}
      </nav>
    </aside>
  );
}
