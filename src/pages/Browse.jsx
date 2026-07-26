// import Navbar from "../components/Navbar";

// export default function Browse() {
//   return (
//     <>
//           <Navbar />

//     </>
//   );
// }
import Navbar from "../components/Navbar";
import Footer from "../pages/Footer";
import MovieCard from "../components/Home/MovieCard";

export default function Browse() {
  const movies = [
    {
      id: 1,
      title: "Chronos Letterbound",
      rating: 8.7,
      image: "https://image.tmdb.org/t/p/w500/5rhTDKUhPYvpdQIijFIs5VoWsON.jpg",
      year: 2024,
      genres: ["SCI-FI"],
      fav: true,
    },
    {
      id: 2,
      title: "Chronos Echo",
      rating: 7.4,
      image: "https://image.tmdb.org/t/p/w500/5rhTDKUhPYvpdQIijFIs5VoWsON.jpg",
      year: 2019,
      genres: ["THRILLER"],
      fav: false,
    },
    {
      id: 3,
      title: "Chronos Hours",
      rating: 6.8,
      image: "https://image.tmdb.org/t/p/w500/5rhTDKUhPYvpdQIijFIs5VoWsON.jpg",
      year: 2021,
      genres: ["DRAMA"],
      fav: false,
    },
    {
      id: 4,
      title: "Chronos Bay",
      rating: 7.9,
      image: "https://image.tmdb.org/t/p/w500/5rhTDKUhPYvpdQIijFIs5VoWsON.jpg",
      year: 2020,
      genres: ["MISTERY"],
      fav: true,
    },
    {
      id: 5,
      title: "Chronos Garden",
      rating: 8.0,
      image: "https://image.tmdb.org/t/p/w500/5rhTDKUhPYvpdQIijFIs5VoWsON.jpg",
      year: 2023,
      genres: ["ROMANCE"],
      fav: false,
    },
    {
      id: 6,
      title: "Chronos Engine",
      rating: 6.5,
      image: "https://image.tmdb.org/t/p/w500/5rhTDKUhPYvpdQIijFIs5VoWsON.jpg",
      year: 2022,
      genres: ["ACTION"],
      fav: false,
    },
    {
      id: 7,
      title: "Chronos Sunrise",
      rating: 8.2,
      image: "https://image.tmdb.org/t/p/w500/5rhTDKUhPYvpdQIijFIs5VoWsON.jpg",
      year: 2018,
      genres: ["DRAMA"],
      fav: true,
    },

    {
      id: 8,
      title: "Chronos & Co",
      rating: 7.1,
      image: "https://image.tmdb.org/t/p/w500/5rhTDKUhPYvpdQIijFIs5VoWsON.jpg",
      year: 2024,
      genres: ["COMEDY"],
      fav: false,
    },

    {
      id: 9,
      title: "Chronos Forever",
      rating: 9.0,
      image: "https://image.tmdb.org/t/p/w500/5rhTDKUhPYvpdQIijFIs5VoWsON.jpg",
      year: 2017,
      genres: ["DRAMA"],
      fav: false,
    },

    {
      id: 10,
      title: "Chronos Effect",
      rating: 8.5,
      image: "https://image.tmdb.org/t/p/w500/5rhTDKUhPYvpdQIijFIs5VoWsON.jpg",
      year: 2015,
      genres: ["SCI-FI"],
      fav: true,
    },

    {
      id: 11,
      title: "Chronos Theory",
      rating: 7.7,
      image: "https://image.tmdb.org/t/p/w500/5rhTDKUhPYvpdQIijFIs5VoWsON.jpg",
      year: 2019,
      genres: ["DRAMA"],
      fav: false,
    },

    {
      id: 12,
      title: "Chronos Storm",
      rating: 6.9,
      image: "https://image.tmdb.org/t/p/w500/5rhTDKUhPYvpdQIijFIs5VoWsON.jpg",
      year: 2023,
      genres: ["ACTION"],
      fav: false,
    },
  ];

  return (
    <>
      <Navbar />

      <div className="browse max-w-7xl mx-auto mt-[47px]">
        <div className="flex items-center gap-3">
          <div className="w-1 h-6 bg-amber-600"></div>
          <h1 className="font-bebas text-[26px] text-[#E4E7EB]">
            BROWSE FILMS
          </h1>
        </div>

        <div className="mt-10">
          <div className="input_search flex items-center w-full h-[58px] rounded-xl border border-[#3A4049] bg-[#1C2127] px-[18px]">
            <span className="text-[#FF8000] text-[20px]">⌕</span>
            <span className="ml-4 text-[20px] text-[#E4E7EB]">chronos</span>
            <div className="ml-1 w-[2px] h-[22px] bg-[#FF8000]"></div>
          </div>
        </div>

        <div className="mt-3.5 flex items-center font-inter text-[13px]">
          <span className="text-[#9CA3AF]">Ditemukan</span>

          <span className="ml-1 font-bold text-[#FF8000]">12 film</span>

          <span className="ml-1 text-[#9CA3AF]">untuk pencarian</span>

          <span className="ml-1 text-[#9CA3AF]">"chronos"</span>
        </div>

        <div className="mt-8 flex items-center gap-2">
          <button className="h-[32px] px-4 rounded-full bg-[#FF8000] text-[#12161C] text-[13px] font-bold">
            Semua
          </button>
          <button className="h-[32px] px-4 rounded-full border border-[#3A4049] text-[#9CA3AF]">
            Movie
          </button>
          <button className="h-[32px] px-4 rounded-full border border-[#3A4049] text-[#9CA3AF]">
            Series
          </button>

          <button className="h-[32px] px-4 rounded-full border border-[#3A4049] text-[#9CA3AF]">
            2020+
          </button>

          <button className="h-[32px] px-4 rounded-full border border-[#3A4049] text-[#9CA3AF]">
            2010-2019
          </button>

          <button className="h-[32px] px-4 rounded-full border border-[#3A4049] text-[#9CA3AF]">
            Sebelum 2010
          </button>
        </div>

        <div className="cards-movie mt-7 grid grid-cols-6 gap-5">
          {/* <div className="cards mt-7 flex gap-5 overflow-x-hidden"> */}
          {/* <div className="card min-w-[200px] flex flex-col gap-y-2">
            <div className="image w-full h-[300px]">
              <img
                className="object-cover h-full w-full rounded-lg"
                src="https://image.tmdb.org/t/p/w500/5rhTDKUhPYvpdQIijFIs5VoWsON.jpg"
                alt=""
              />
            </div>
            <div className="typo">
              <div className="title-rating flex w-full justify-between">
                <a
                  href="#"
                  className="text-white font-inter font-bold text-sm hover:underline"
                >
                  Chronos
                </a>
                <span className="rating font-inter font-bold text-xs text-yellow-600">
                  ★ 8.5
                </span>
              </div>
              <div className="year">
                <span className="font-inter text-xs text-gray-500">2024</span>
              </div>
            </div>
          </div> */}
          {movies.map((movie) => (
            <MovieCard
              key={movie.id}
              id={movie.id}
              title={movie.title}
              rating={movie.rating}
              image={movie.image}
              year={movie.year}
              genres={movie.genres}
              fav={movie.fav}
            />
          ))}
        </div>
      </div>

      <Footer />
    </>
  );
}
