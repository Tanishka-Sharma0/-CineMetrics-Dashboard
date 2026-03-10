import { NavLink } from "react-router-dom";

const links = [
    { to: "/", label: "Dashboard" },
    { to: "/search", label: "Search" },
    { to: "/settings", label: "Settings" },
];


export default function Sidebar() {
    return (
        <aside className="w-64 bg-[var(--color-card)] min-h-screen p-5 border-r">
            <h2 className="text-xl font-bold mb-8">🎬 CineMetrics</h2>
            <nav className="flex flex-col gap-2">
                {links.map((link) => (
                    <NavLink
                        key={link.label}
                        to={link.to}
                        className={({ isActive }) => `px-3 py-2 rounded-lg transition-all ${isActive ? "bg-indigo-500 text-white" : "hover:bg-gray-200 dark:hover:bg-slate-700"}`}
                    >
                        {link.label}
                    </NavLink>
                ))}
            </nav>
        </aside>
    )
};

