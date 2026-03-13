import CountUp from "react-countup";
import { motion } from "framer-motion";

type props = {
    title: string,
    value: number,
    suffix?: string,
}

export default function KpiCard({ title, value, suffix }: props) {
    return (
        <motion.div
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.2 }}
            className="relative overflow-hidden rounded-xl border p-6 bg-[var(--color-card)] shadow-sm"
        >
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 to-transparent" />
            <p className="text-sm text-gray-500 mb-2">{title}</p>
            <h2 className="text-3xl font-bold">
                <CountUp end={value} duration={1.5} />
                {suffix}
            </h2>
        </motion.div>
    )
}