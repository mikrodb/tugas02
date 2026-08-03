import { useParams } from "react-router";
import { useEffect, useState } from "react";

import Navbar from "../components/Navbar";
import Footer from "../pages/Footer";
import { getMovieDetail } from "../lib/request";
import { getMovieCredits } from "../lib/request"; // ini kita tambahkan untuk mengambil data cast dan crew tadi
import { useWatchlistStore } from "../stores/watchlistStore";

function MovieDetails() {
  // const casts = [
  //   {
  //     name: "Actor Name",
  //     character: "Character Name",
  //     image: "https://placehold.co/50x50?text=Actor Name",
  //   },
  //   {
  //     name: "Actor Name",
  //     character: "Character Name",
  //     image: "https://placehold.co/50x50?text=Actor Name",
  //   },
  //   {
  //     name: "Actor Name",
  //     character: "Character Name",
  //     image: "https://placehold.co/50x50?text=Actor Name",
  //   },
  //   {
  //     name: "Actor Name",
  //     character: "Character Name",
  //     image: "https://placehold.co/50x50?text=Actor Name",
  //   },
  // ];

  const [casts, setCasts] = useState([]);
  // const crews = [
  //   {
  //     name: "Crew Name",
  //     job: "Job Name",
  //     image: "https://via.placeholder.com/50x50?text=No+Image",
  //   },
  //   {
  //     name: "Crew Name",
  //     job: "Job Name",
  //     image: "https://via.placeholder.com/50x50?text=No+Image",
  //   },
  //   {
  //     name: "Crew Name",
  //     job: "Job Name",
  //     image: "https://via.placeholder.com/50x50?text=No+Image",
  //   },
  //   {
  //     name: "Crew Name",
  //     job: "Job Name",
  //     image: "https://via.placeholder.com/50x50?text=No+Image",
  //   },
  // ];
  const [crews, setCrews] = useState([]);

  const { id } = useParams();
  const { movies } = useWatchlistStore((state) => state);
  console.log("movies in watchlist:", movies);

  const { add, has, remove } = useWatchlistStore((state) => state);

  const [movie, setMovie] = useState({
    id: null,
    title: null,
    vote_average: null,
    backdrop_path: null,
    poster_path: null,
    release_date: null,
    genres: [],
    runtime: null,
    overview: null,
  });

  useEffect(() => {
    if (!id) return;
    console.log(movie);

    let isActive = true;

    const fetchDetails = async () => {
      const data = await getMovieDetail(id);

      if (!isActive) return;

      if (!data?.success) {
        alert("Terjadi kesalahan ketika mencari film");
        return;
      }

      console.log(data);
      setMovie({
        ...data.data,
      });

      // Fetch movie credits
      const creditsData = await getMovieCredits(id);

      if (!isActive) return;
      if (!creditsData?.success) {
        alert("Terjadi kesalahan ketika mencari credits film");
        return;
      }

      // console.log(creditsData);
      // console.log(creditsData.data);
      // console.log(creditsData.data?.cast);

      setCasts(
        creditsData.data.cast
          .slice(0, 6) // Ambil 6 cast pertama
          .map((cast) => ({
            name: cast.name,
            character: cast.character,
            image: cast.profile_path
              ? `https://image.tmdb.org/t/p/w200${cast.profile_path}`
              : "https://via.placeholder.com/50x50?text=No+Image",
          })),
      );

      setCrews(
        creditsData.data.crew
          .slice(0, 4) // Ambil 4 crew pertama
          .map((crew) => ({
            name: crew.name,
            job: crew.job,
            image: crew.profile_path
              ? `https://image.tmdb.org/t/p/w200${crew.profile_path}`
              : "https://via.placeholder.com/50x50?text=No+Image",
          })),
      );
    };

    fetchDetails();

    return () => {
      isActive = false;
    };
  }, [id]);

  const toggleWatchlist = () => {
    const identifier = id;

    // console.log(has(String(id)));
    // console.log(movie.includes(identifier));
    if (has(movie.id)) {
      remove(movie.id);
    } else {
      add(movie);
      // if (has(identifier)) {
      //   remove(identifier);
      // } else {
      //   add(identifier);
    }
  };

  return (
    <div className="page min-h-screen">
      <Navbar />

      <div className="content font-inter pb-20">
        <div className="heading-content relative">
          {/* Hero Background */}
          <div className="hero-background">
            {/* this background have gradient overlay black from bottom to top but black in top is black with 50% opacity */}
            <div className="gradient-overlay absolute bottom-0 left-0 w-full h-full bg-linear-to-t from-black to-[rgba(0,0,0,0.2)]"></div>
            <img
              src={
                movie.backdrop_path
                  ? `https://image.tmdb.org/t/p/original/${movie.backdrop_path}`
                  : "https://placehold.co/1600x400?text=Loading..."
              }
              alt={movie.title || "Loading..."}
              className="w-full h-95 object-cover object-center"
            />
          </div>

          {/* Movie Detail */}
          <div className="movie-detail-heading absolute -bottom-45 left-0 w-full">
            <div className="wrapper w-full max-w-7xl mx-auto flex items-start">
              {/* Image poster portrait */}
              <div className="image-container w-70 h-105">
                <img
                  src={
                    movie.poster_path
                      ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
                      : "https://placehold.co/200x300?text=Loading..."
                  }
                  alt={"Loading..."}
                  className="w-full h-full rounded-xl object-cover border-2 border-[#3A4049]"
                />
              </div>

              {/* Movie Title and CTA */}
              <div className="movie-title-cta ml-8 pt-7.5">
                {/* title */}
                <h1 className="text-[56px] mt-0.5 mb-3.5 font-bebas font-normal">
                  {movie.title || "Loading..."}
                </h1>
                {/* rating, year,duration, genre, age */}
                <div className="flex items-center gap-x-4 mt-3">
                  <div className="rating-badge">
                    <span className="text-sm font-bold bg-[#FBBF2426] px-2 py-1.5 rounded-sm text-[#FBBF24]">
                      {movie.vote_average
                        ? `★ ${movie.vote_average.toFixed(1)} / 10`
                        : "Loading..."}
                    </span>
                  </div>
                  <span className="text-sm text-[#A9A9A9]">
                    {`${
                      movie.release_date
                        ? movie.release_date.split("-")[0]
                        : "Loading..."
                    }`}{" "}
                    · {movie.runtime} min ·{" "}
                    {movie.genres
                      ? movie.genres.map((genre) => genre.name).join(", ")
                      : "Loading..."}{" "}
                    · {movie.adult ? "PG-13" : "PG"}
                  </span>
                </div>

                {/* CTA (Watch Trailer, Add to Watchlist, Like) */}
                <div className="cta-buttons flex items-center gap-x-4 mt-7.25">
                  <button
                    disabled={!movie.trailer}
                    className="bg-[#FF8000] disabled:bg-gray-500 disabled:cursor-not-allowed py-3.25 px-7 rounded-lg text-black font-bold text-sm hover:bg-[#ff8000cc] transition duration-300 cursor-pointer"
                  >
                    ▶ Tonton Trailer
                  </button>

                  {has(Number(id)) ? (
                    <button
                      onClick={toggleWatchlist}
                      className={`bg-red-500 hover:bg-red-600 py-3.25 px-7 rounded-lg text-white font-bold text-sm $hover:bg-[#3a4049cc] transition duration-300 cursor-pointer flex items-center gap-x-2`}
                    >
                      <span className="material-icons-round"> delete </span>{" "}
                      Hapus dari Watchlist
                    </button>
                  ) : (
                    <button
                      onClick={toggleWatchlist}
                      className={`bg-[#3A4049] hover:bg-gray-600 py-3.25 px-7 rounded-lg text-white font-bold text-sm $hover:bg-[#3a4049cc] transition duration-300 cursor-pointer flex items-center gap-x-2`}
                    >
                      <span className="material-icons-round"> add </span> Tambah
                      ke Watchlist
                    </button>
                  )}
                  {/* <button className="bg-[#3A4049] py-3.25 px-7 rounded-lg text-white font-bold text-sm hover:bg-[#3a4049cc] transition duration-300 cursor-pointer">
                ♡ Like
              </button> */}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Movie Description */}
        <div className="movie-description w-full max-w-7xl mx-auto mt-60 px-4 flex gap-x-14">
          {/* Sinopsis and Cast */}
          <div className="sinopsis-cast max-w-180.25">
            <div className="sinopsis flex flex-col gap-y-4.5">
              <h2 className="text-2xl font-bebas">SINOPSIS</h2>
              <p className="text-[#A9A9A9] text-sm leading-relaxed">
                {movie.overview || "Loading..."}
              </p>
            </div>
            <div className="casts flex flex-col mt-9.75 gap-y-7.25">
              <h2 className="text-2xl font-bebas">CAST UTAMA</h2>
              <div className="list-cast flex items-center gap-x-3 overflow-x-auto">
                {casts && casts.length > 0 ? (
                  casts.map((cast, index) => (
                    <div
                      key={index}
                      // className="cast flex flex-col items-center w-fit"
                      className="cast flex flex-col items-center w-32 shrink-0" // ini kita tambahkan shrink-0 agar card tidak mengecil saat di scroll horizontal
                    >
                      <img
                        src={cast.image}
                        alt={cast.name}
                        className="w-16.25 h-16.25 border border-[#3A4049] rounded-full object-cover"
                      />
                      <p className="text-white mt-2">{cast.name}</p>
                      <span>
                        <p className="text-[#6B7280] text-sm">
                          {cast.character}
                        </p>
                      </span>
                    </div>
                  ))
                ) : (
                  <p className="text-[#A9A9A9] text-sm">Cast tidak tersedia.</p>
                )}
              </div>
            </div>
          </div>

          {/* Crew */}
          <div className="crew-card bg-[#1C2127] border border-[#2A2F37] rounded-lg pt-8 pb-11.25 px-5.5 w-fit flex flex-col mt-12 gap-y-4.5 h-fit">
            {crews && crews.length > 0 ? (
              crews.map((crew, index) => (
                <div
                  key={index}
                  className="w-59 flex justify-between pb-1.25 border-b border-[#2A2F37]"
                >
                  <span className="text-sm text-[#6B7280]">{crew.job}</span>
                  <span className="text-white text-sm">{crew.name}</span>
                </div>
              ))
            ) : (
              <p className="text-[#A9A9A9] text-sm">Crew tidak tersedia.</p>
            )}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default MovieDetails;
