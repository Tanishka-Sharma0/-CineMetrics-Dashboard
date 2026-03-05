import { ReactNode } from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";

export default function PageWrapper({ children }: { children: ReactNode }) {
    return (
        <div className="flex">
            <Sidebar />
            <div className="flex-1 min-h-screen">
                <Header />
                <main className="p-6">{children}</main>
            </div>
        </div>
    )
};

