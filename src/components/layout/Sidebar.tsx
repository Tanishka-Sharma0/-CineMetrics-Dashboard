import { NavLink } from "react-router-dom";

const links = [
    { to: "/", label: "Dashboard" },
    { to: "/search", label: "Search" },
    { to: "/settings", label: "Settings" },
];


export default function Sidebar() {
    return (
        <aside className="w-64 bg-white h-screen p-4 border-r">
            <h2 className="text-xl font-bold mb-6">🎬 CineMetrics</h2>
            <nav>
                {links.map((link) => (
                    <NavLink
                        key={link.label}
                        to={link.to}
                        className={({ isActive }) => `block  px-3 py-2 rounded ${isActive ? "bg-gray-200 font-semibold" : "hover:bg-gray-100"}`}
                    >
                        {link.label}
                    </NavLink>
                ))}
            </nav>
        </aside>
    )
};

