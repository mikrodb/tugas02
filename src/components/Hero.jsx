function Hero() {
  return (
    <div className="mt-4 rounded-lg p-12 max-w-7xl mx-auto bg-linear-to-br from-[#2A1810] via-[#1A1F2E] to-[#0F1419] flex flex-col">
      <img
        src="https://image.tmdb.org/t/p/original/tYuC9kUwqhpDQ3pv1kLMqyMF1Jw.jpg"
        alt="backdrop"
        className="w-full h-[450px] object-cover rounded-t-lg"
      />
      <div className="absolute p-12 top-[11%]">
        <div className="bades-featured bg-[#FF80002E]/18 w-fit text-[#FF8000] border border-[#FF800066]/40 rounded-md py-1 px-2">
          <p className="font-inter text-[10px] font-bold">FEATURED THIS WEEK</p>
        </div>

        <div className="title mt-4 max-w-[427px]">
          <h1 className="font-bebas text-white text-6xl leading-none">
            CHRONOS LETTERBOUND
          </h1>
        </div>

        <div className="rating-genres flex gap-3 font-inter text-xs mt-4">
          <p className="text-[#FBBF24]">★ 8.7</p>
          <p className="text-[#9CA3AF]">2024 · 2h 18m · Sci-Fi · Drama</p>
        </div>

        <div className="synopsis max-w-[427px]">
          <p className="font-inter text-sm text-[#9CA3AF] mt-4 leading-6">
            Seorang penjaga arsip menemukan surat-surat dari masa depan yang
            ditulis untuknya — masing-masing meminta keputusan mustahil.
          </p>
        </div>

        <div className="actions mt-5 flex gap-3 font-inter">
          {/* <button className="btn-detail font-inter text-sm text-[#14181C] font-bold py-3 px-6 bg-amber-600 transition rounded-lg cursor-pointer">
            ▶ Lihat Detail
          </button> */}

          <button className="btn py-5 px-5 bg-amber-600 rounded-lg flex items-center gap-1">
            <span className="material-icons-round"> play_arrow </span> Lihat
            Detail
          </button>
          <button className="btn py-5 px-5 bg-white/10 rounded-lg">
            + Watchlist
          </button>
        </div>
      </div>
    </div>
  );
}
export default Hero;
