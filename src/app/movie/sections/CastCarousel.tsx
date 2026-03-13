export default function CastCarousel() {
    const cast = [
        { name: "Matthew McConaughey" },
        { name: "Anne Hathaway" },
        { name: "Jessica Chastain" },
        { name: "Michael Caine" },
    ];

    return (
        <div className="card">
            <h2 className="text-lg font-semibold mb-4">
                Cast
            </h2>

            <div className="overflow-x-auto flex gap-4">
                {cast.map((actor) => (
                    <div key={actor.name} className="min-w-[120px] text-center">
                        <div className="bg-gray-300 rouded-lg mb-2 h-28"></div>
                        <p className="text-sm">{actor.name}</p>
                    </div>

                ))}
            </div>
        </div>


    )
}