import React from "react";
import Footer from "../pages/Footer";
import Navbar from "../components/Navbar";
import { useWatchlistStore } from "../stores/watchlistStore";
import MovieCard from "../components/Home/MovieCard";

export default function Watchlist() {
  const { movies } = useWatchlistStore();
  return (
    <>
      <Navbar />

      <div className="max-w-7xl mx-auto min-h-[61vh]">
        <div className="flex items-center gap-x-3 mt-8">
          <div className="ornament w-1 h-8 bg-amber-600"></div>
          <h2 className="font-secondary text-4xl font-bebas">my watchlist</h2>
        </div>

        {/* List Movie */}
        {movies.length > 0 ? (
          <div className="mt-8 grid grid-cols-6 gap-6">
            {movies.map((movie) => (
              <MovieCard
                key={movie.id}
                id={movie.id}
                title={movie.title}
                rating={movie.vote_average.toFixed(1)}
                image={
                  movie.poster_path
                    ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                    : null
                }
                year={movie.release_date.split("-")[0]}
                genres={movie.genres.map((genre) => genre.name)}
                fav={true}
              />
            ))}
          </div>
        ) : (
          <div className="mt-8">
            <p className="font-inter text-sm text-[#9CA3AF]">
              You don't have any movie in your watchlist yet
            </p>
          </div>
        )}
      </div>

      <Footer />
    </>
  );
}
