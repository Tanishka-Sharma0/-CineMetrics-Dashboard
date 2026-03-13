type props = {
    title: string,
    image: string,
    rating: number,
};

export default function MovieCard({ title, image, rating }: props) {
    return (
        <div className="card cursor-pointer hover:scale-[1.02] transition">
            <img
                src={image}
                alt={title}
                className="rounded-lg mb-3"

            />

            <h3 className="font-semibold text-sm">{title} </h3>
            <p className="text-sm text-gray-500">⭐ {rating}</p>
        </div>
    )
}