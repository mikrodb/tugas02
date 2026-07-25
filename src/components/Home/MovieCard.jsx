function MovieCard({ id, title, rating, image, year }) {
  return (
    <div className="card min-w-[200px] flex flex-col gap-y-2">
      <div className="image w-full h-[300px]">
        <img
          className="object-cover h-full w-full rounded-lg"
          src={image}
          alt={title}
        />
      </div>
      <div className="typo">
        <div className="title-rating flex w-full justify-between">
          <a
            href={`/movie/${id}`}
            className="text-white font-inter font-bold text-sm hover:underline"
          >
            {title}
          </a>
          <span className="rating font-inter font-bold text-xs text-yellow-600">
            ★ {rating}
          </span>
        </div>
        <div className="year">
          <span className="font-inter text-xs text-gray-500">{year}</span>
        </div>
      </div>
    </div>
  );
}

export default MovieCard;
