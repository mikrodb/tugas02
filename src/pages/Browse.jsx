// import Navbar from "../components/Navbar";

// export default function Browse() {
//   return (
//     <>
//           <Navbar />

//     </>
//   );
// }
import { useState } from "react";
import { useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../pages/Footer";
import MovieCard from "../components/Home/MovieCard";
import { discoverSearchMovie, searchMovies } from "../lib/request";

const token = import.meta.env.VITE_TOKEN;

export default function Browse() {
  // const movies = [
  //   {
  //     id: 1,
  //     title: "Chronos Letterbound",
  //     rating: 8.7,
  //     image: "https://image.tmdb.org/t/p/w500/5rhTDKUhPYvpdQIijFIs5VoWsON.jpg",
  //     year: 2024,
  //     genres: ["SCI-FI"],
  //     fav: true,
  //   },
  //   {
  //     id: 2,
  //     title: "Chronos Echo",
  //     rating: 7.4,
  //     image: "https://image.tmdb.org/t/p/w500/5rhTDKUhPYvpdQIijFIs5VoWsON.jpg",
  //     year: 2019,
  //     genres: ["THRILLER"],
  //     fav: false,
  //   },
  //   {
  //     id: 3,
  //     title: "Chronos Hours",
  //     rating: 6.8,
  //     image: "https://image.tmdb.org/t/p/w500/5rhTDKUhPYvpdQIijFIs5VoWsON.jpg",
  //     year: 2021,
  //     genres: ["DRAMA"],
  //     fav: false,
  //   },
  //   {
  //     id: 4,
  //     title: "Chronos Bay",
  //     rating: 7.9,
  //     image: "https://image.tmdb.org/t/p/w500/5rhTDKUhPYvpdQIijFIs5VoWsON.jpg",
  //     year: 2020,
  //     genres: ["MISTERY"],
  //     fav: true,
  //   },
  //   {
  //     id: 5,
  //     title: "Chronos Garden",
  //     rating: 8.0,
  //     image: "https://image.tmdb.org/t/p/w500/5rhTDKUhPYvpdQIijFIs5VoWsON.jpg",
  //     year: 2023,
  //     genres: ["ROMANCE"],
  //     fav: false,
  //   },
  //   {
  //     id: 6,
  //     title: "Chronos Engine",
  //     rating: 6.5,
  //     image: "https://image.tmdb.org/t/p/w500/5rhTDKUhPYvpdQIijFIs5VoWsON.jpg",
  //     year: 2022,
  //     genres: ["ACTION"],
  //     fav: false,
  //   },
  //   {
  //     id: 7,
  //     title: "Chronos Sunrise",
  //     rating: 8.2,
  //     image: "https://image.tmdb.org/t/p/w500/5rhTDKUhPYvpdQIijFIs5VoWsON.jpg",
  //     year: 2018,
  //     genres: ["DRAMA"],
  //     fav: true,
  //   },

  //   {
  //     id: 8,
  //     title: "Chronos & Co",
  //     rating: 7.1,
  //     image: "https://image.tmdb.org/t/p/w500/5rhTDKUhPYvpdQIijFIs5VoWsON.jpg",
  //     year: 2024,
  //     genres: ["COMEDY"],
  //     fav: false,
  //   },

  //   {
  //     id: 9,
  //     title: "Chronos Forever",
  //     rating: 9.0,
  //     image: "https://image.tmdb.org/t/p/w500/5rhTDKUhPYvpdQIijFIs5VoWsON.jpg",
  //     year: 2017,
  //     genres: ["DRAMA"],
  //     fav: false,
  //   },

  //   {
  //     id: 10,
  //     title: "Chronos Effect",
  //     rating: 8.5,
  //     image: "https://image.tmdb.org/t/p/w500/5rhTDKUhPYvpdQIijFIs5VoWsON.jpg",
  //     year: 2015,
  //     genres: ["SCI-FI"],
  //     fav: true,
  //   },

  //   {
  //     id: 11,
  //     title: "Chronos Theory",
  //     rating: 7.7,
  //     image: "https://image.tmdb.org/t/p/w500/5rhTDKUhPYvpdQIijFIs5VoWsON.jpg",
  //     year: 2019,
  //     genres: ["DRAMA"],
  //     fav: false,
  //   },

  //   {
  //     id: 12,
  //     title: "Chronos Storm",
  //     rating: 6.9,
  //     image: "https://image.tmdb.org/t/p/w500/5rhTDKUhPYvpdQIijFIs5VoWsON.jpg",
  //     year: 2023,
  //     genres: ["ACTION"],
  //     fav: false,
  //   },
  // ];

  const movies_old = [];

  const [movies, setMovies] = useState([]);
  const [keyword, setKeyword] = useState("");
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(null);
  const [loading, setLoading] = useState(false);
  const [totalMovies, setTotalMovies] = useState(null);

  // const [count, setCount] = useState(0);
  // catt : hook hanya bisa digunakan di dalam function component, tidak bisa digunakan di luar function component
  // useEffect(() => {
  //   console.log(import.meta.env.VITE_TOKEN, count);
  // }, [count]);

  const onSearch = async (e) => {
    e.preventDefault();

    const data = await searchMovies(keyword, page);
    console.log(data);
    console.log(data.total_pages);
    console.log(data.results);
    if (data) {
      // console.log(data);
      const finalData = data.results.map((movie) => ({
        id: movie.id,
        title: movie.title,
        rating: movie.vote_average,
        image: movie.poster_path
          ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
          : null,
        year: movie.release_date
          ? parseInt(movie.release_date.split("-")[0])
          : "unknown",
        genres: movie.genre_ids,
        fav: false,
      }));
      setMovies(finalData);
      setTotalPages(data.total_pages);
      setTotalMovies(data.total_results);
      console.log("total pages", data.total_pages);
    } else {
      alert("Error searching movies");
    }
    console.log(keyword);
  };

  const initialRender = async () => {
    const datax = await discoverSearchMovie();
    console.log(datax);

    if (datax) {
      const finalData = datax.results.map((movie) => ({
        id: movie.id,
        title: movie.title,
        rating: movie.vote_average,
        image: movie.poster_path
          ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
          : null,
        year: movie.release_date
          ? parseInt(movie.release_date.split("-")[0])
          : "unknown",
        genres: movie.genre_ids,
        fav: false,
      }));
      setMovies(finalData);
    } else {
      alert("Error searching movies");
    }
  };

  const loadMore = async () => {
    if (page >= totalPages) {
      alert("No more pages to load");
      return;
    }

    setLoading(true);
    const updatedPage = page + 1;
    setPage(updatedPage);

    const data = await searchMovies(keyword, updatedPage);
    console.log(data);
    console.log(data.total_pages);
    console.log(data.results);
    if (data) {
      // console.log(data);
      const finalData = data.results.map((movie) => ({
        id: movie.id,
        title: movie.title,
        rating: movie.vote_average,
        image: movie.poster_path
          ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
          : null,
        year: movie.release_date
          ? parseInt(movie.release_date.split("-")[0])
          : "unknown",
        genres: movie.genre_ids,
        fav: false,
      }));
      setMovies([...movies, ...finalData]);
      setTotalPages(data.total_pages);
      console.log("total pages", data.total_pages);
    } else {
      alert("Error searching movies");
    }
    console.log(keyword);
    setLoading(false);
  };

  useEffect(() => {
    if (keyword) return;
    initialRender();
  }, []);

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
        {/* <div className="mt-10">
          <div className="input_search flex items-center w-full h-[58px] rounded-xl border border-[#3A4049] bg-[#1C2127] px-[18px]">
            <span className="text-[#FF8000] text-[20px]">⌕</span>
            <span className="ml-4 text-[20px] text-[#E4E7EB]">chronos</span>
            <div className="ml-1 w-[2px] h-[22px] bg-[#FF8000]"></div>
          </div>
        </div> */}
        <form onSubmit={onSearch}>
          <input
            type="text"
            placeholder="Search for movies..."
            className="mt-10 w-full
          h-[58px] rounded-xl border border-[#3A4049] bg-[#1C2127] px-[18px]
          text-[#E4E7EB] text-[20px]"
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
          />
        </form>

        <div className="mt-3.5 flex items-center font-inter text-[13px]">
          {totalMovies !== null && (
            <>
              <span className="text-[#9CA3AF]">Ditemukan</span>
              <span className="ml-1 font-bold text-[#FF8000]">
                {totalMovies} film
              </span>
              <span className="ml-1 text-[#9CA3AF]">
                untuk pencarian "{keyword}"
              </span>
              {/* <span className="ml-1 text-[#9CA3AF]">"chronos"</span> */}
            </>
          )}
        </div>

        <div className="mt-8 flex items-center gap-2">
          <button className="h-[32px] px-4 rounded-full bg-[#FF8000] text-[#12161C] text-[13px] font-bold">
            Semua
          </button>
          <button
            // onClick={() => setCount(count + 1)}
            className="h-[32px] px-4 rounded-full border border-[#3A4049] text-[#9CA3AF]"
          >
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
      {/* Pagination */}
      {totalPages && page < totalPages && (
        <div className="flex items-center justify-center w-full mt-8">
          <button
            disabled={loading}
            className={`cursor-pointer bg-amber-600 hover:bg-amber-700 rounded-full py-2 px-4 font-bold text-gray-900 ${
              loading ? "pointer-events-none opacity-50" : ""
            }`}
            onClick={loadMore}
          >
            {loading ? "Loading..." : "Load More"}
          </button>
        </div>
      )}
      <Footer />
    </>
  );
}
