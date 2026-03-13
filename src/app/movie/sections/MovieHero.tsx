export default function MovieHero() {
    return (
        <div
            className="h-[420px] bg-cover bg-center rounded-xl overflow-hidden relative"
            style={{
                backgroundImage:
                    "url(https://image.tmdb.org/t/p/original/rAiYTfKGqDCRIIqo664sY9XZIvQ.jpg)",
            }}
        >
            <div className="absolute bg-black/50 inset-0 flex items-end p-8">
                <div className="text-white max-w-xl">
                    <h2 className="font-bold text-4xl mb-3">Interstellar</h2>
                    <p className="text-sm opacity-90 mb-4">
                        A team of explorers travel through a wormhole in space in an attempt
                        to ensure humanity's survival.
                    </p>
                    <div className="flex gap-3">
                        <span className="bg-indigo-500 px-3 py-1 rounded-lg">
                            ⭐ 8.6
                        </span>

                        <span className="bg-white/20 px-3 py-1 rounded-lg">
                            Sci-Fi
                        </span>
                    </div>
                </div>
            </div>

        </div>
    )
}