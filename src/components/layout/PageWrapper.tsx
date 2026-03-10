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
                <motion.main className="p-6" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }} >{children}</motion.main>
            </div>
        </div>
    )
};

