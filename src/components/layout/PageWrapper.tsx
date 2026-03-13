import { ReactNode } from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";
import { motion } from "framer-motion";


export default function PageWrapper({ children }: { children: ReactNode }) {
    return (
        <div className="flex">
            <Sidebar />
            <div className="flex-1 min-h-screen">
                <Header />
                <motion.main className="p-8" initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.35 }} >{children}</motion.main>
            </div>
        </div>
    )
};

