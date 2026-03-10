import ThemeToggle from "../ui/Toggle";


export default function Header() {
    return (
        <header className="h-16 px-6 flex items-center justify-between border-b">
            <h1 className="font-semibold text-lg">
                CineMetrics Dashboard
            </h1>
            <ThemeToggle />
        </header>
    );
}