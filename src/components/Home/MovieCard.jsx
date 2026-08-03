// function MovieCard({ id, title, rating, image, year }) {
//   return (
//     <div className="card min-w-[200px] flex flex-col gap-y-2">
//       <div className="image w-full h-[300px]">
//         <img
//           className="object-cover h-full w-full rounded-lg"
//           src={image}
//           alt={title}
//         />
//       </div>
//       <div className="typo">
//         <div className="title-rating flex w-full justify-between">
//           <a
//             href={`/movie/${id}`}
//             className="text-white font-inter font-bold text-sm hover:underline"
//           >
//             {title}
//           </a>
//           <span className="rating font-inter font-bold text-xs text-yellow-600">
//             ★ {rating}
//           </span>
//         </div>
//         <div className="year">
//           <span className="font-inter text-xs text-gray-500">{year}</span>
//         </div>
//       </div>
//     </div>
//   );
// }

function MovieCard({ id, title, rating, image, year, genres, fav = false }) {
  // title dalam card
  const [baris1, baris2] = title.toUpperCase().split(" ");

  return (
    <div className="card min-w-[200px] flex flex-col gap-y-2">
      {/* // ini untuk cardmovie yang baris 1 */}
      <div className="relative image w-full h-[300px]">
        <img
          className="object-cover h-full w-full rounded-lg"
          src={
            image || `https://dummyimage.com/200x300/333/ffffff&text=${title}`
          }
          alt={title}
        />
        {/* // ini untuk genre */}
        <span className="absolute top-4 left-4 text-white text-xs">
          {genres[0]}
        </span>
        {/* // love */}
        <div className="absolute top-3 right-3 flex h-7 w-7 items-center justify-center rounded-full bg-black/60">
          {/* <span className="text-[13px] text-[#FF8000]">♥</span> */}
          <span
            className={`text-[13px] ${fav ? "text-[#FF8000]" : "text-white/70"}`}
          >
            ♥
          </span>
        </div>
        {/* // ini untuk title */}
        <div className="absolute bottom-4 left-4">
          <h2 className="font-bebas text-22px text-white">{baris1}</h2>
          <h2 className="font-bebas text-22px text-white">{baris2}</h2>
        </div>
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
