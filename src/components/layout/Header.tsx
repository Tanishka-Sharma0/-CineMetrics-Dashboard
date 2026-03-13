import ThemeToggle from "../ui/Toggle";


export default function Header() {
    return (
        <header className="h-16 px-6 flex items-center justify-between backdrop-blur-md bg-white/60 dark:bg-slate-900/60 border-b sticky top-0 z-50">
            <h1 className="font-semibold text-lg tracking-tight">
                CineMetrics Dashboard
            </h1>
            <ThemeToggle />
        </header>
    );
}