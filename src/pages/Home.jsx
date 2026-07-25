import Navbar from "../components/Navbar";
import Hero from "../components/Hero";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />

      <div className="trending max-w-7xl mx-auto mt-[47px]">
        <div className="heading">
          <h2 className="font-bebas text-white text-3xl">Trending</h2>
        </div>
        <div className="cards mt-7 flex gap-5 overflow-x-hidden">
          <div className="card min-w-[200px] flex flex-col gap-y-2">
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
          </div>
        </div>
      </div>

      <footer className="w-full border-t border-[#1C2127] mt-20 pt-5 pb-10">
        <div className="wrapper max-w-7xl mx-auto font-inter text-xs text-[#9CA3AF] flex justify-between">
          <p>Sinemata Final Project Bootcamp React JS</p>
          <p>Powered by TMDB API . Data fiktif untuk preview</p>
        </div>
      </footer>
    </>
  );
}
