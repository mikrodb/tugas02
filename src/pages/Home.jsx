import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Footer from "../pages/Footer";
import MovieCard from "../components/Home/MovieCard";

export default function Home() {
  const movies = [
    {
      id: 1,
      title: "Chronos",
      rating: 8.5,
      image: "https://image.tmdb.org/t/p/w500/5rhTDKUhPYvpdQIijFIs5VoWsON.jpg",
      year: 2024,
    },
    {
      id: 2,
      title: "The Matrix",
      rating: 8.5,
      image: "https://image.tmdb.org/t/p/w500/5rhTDKUhPYvpdQIijFIs5VoWsON.jpg",
      year: 2024,
    },
    {
      id: 3,
      title: "Chronos",
      rating: 8.5,
      image: "https://image.tmdb.org/t/p/w500/5rhTDKUhPYvpdQIijFIs5VoWsON.jpg",
      year: 2024,
    },
    {
      id: 4,
      title: "Chronos",
      rating: 8.5,
      image: "https://image.tmdb.org/t/p/w500/5rhTDKUhPYvpdQIijFIs5VoWsON.jpg",
      year: 2024,
    },
    {
      id: 5,
      title: "Chronos",
      rating: 8.5,
      image: "https://image.tmdb.org/t/p/w500/5rhTDKUhPYvpdQIijFIs5VoWsON.jpg",
      year: 2024,
    },
    {
      id: 6,
      title: "Chronos",
      rating: 8.5,
      image: "https://image.tmdb.org/t/p/w500/5rhTDKUhPYvpdQIijFIs5VoWsON.jpg",
      year: 2024,
    },
    {
      id: 7,
      title: "Chronos",
      rating: 8.5,
      image: "https://image.tmdb.org/t/p/w500/5rhTDKUhPYvpdQIijFIs5VoWsON.jpg",
      year: 2024,
    },
  ];

  return (
    <>
      <Navbar />
      <Hero />
      {/* Trending   */}
      <div className="trending max-w-7xl mx-auto mt-[47px]">
        <div className="heading flex items-center gap-x-3">
          <div className="w-1 h-6 bg-amber-600"></div>
          <h2 className="font-bebas text-white text-3xl">Trending</h2>
        </div>
        <div className="cards mt-7 flex gap-5 overflow-x-hidden">
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
            />
          ))}
        </div>
      </div>

      {/* Recommended   */}
      <div className="trending max-w-7xl mx-auto mt-[47px]">
        <div className="heading flex items-center gap-x-3">
          <div className="w-1 h-6 bg-amber-600"></div>
          <h2 className="font-bebas text-white text-3xl">Recommended</h2>
        </div>
        <div className="cards mt-7 flex gap-5 overflow-x-hidden">
          {movies.map((movie) => (
            <MovieCard
              key={movie.id}
              id={movie.id}
              title={movie.title}
              rating={movie.rating}
              image={movie.image}
              year={movie.year}
            />
          ))}
        </div>
      </div>

      {/* <footer className="w-full border-t border-[#1C2127] mt-20 pt-5 pb-10">
        <div className="wrapper max-w-7xl mx-auto font-inter text-xs text-[#9CA3AF] flex justify-between">
          <p>Sinemata Final Project Bootcamp React JS</p>
          <p>Powered by TMDB API . Data fiktif untuk preview</p>
        </div>
      </footer> */}
      <Footer />
    </>
  );
}
