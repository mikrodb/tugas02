import { Link } from "react-router";

function Navbar() {
  return (
    <nav className=" bg-[#1C2127] w-full py-5">
      <div className="wrapper max-w-7xl mx-auto flex items-center justify-between">
        {/* <!-- Logo --> */}
        <div className="logo-nav flex items-center gap-25">
          <div className="logo font-bebas text-[22px] text-white">
            <a href="#">SINEMATA</a>
          </div>

          {/* <!-- Navigation --> */}
          <ul className="nav-links font-inter text-sm text-[#9CA3AF] flex gap-7">
            <li>
              <Link to="/" className="hover:text-white">
                Home
              </Link>
              {/* <a href="#" className="hover:text-white">
                Home
              </a> */}
            </li>
            <li>
              <Link to="/browse" className="hover:text-white">
                Browse
              </Link>
            </li>
            <li>
              <Link to="/watchlist" className="hover:text-white">
                Watchlist
              </Link>
            </li>
            <li>
              <Link to="/reviews" className="hover:text-white">
                My Reviews
              </Link>
            </li>
          </ul>
        </div>

        <div className="flex items-center gap-6">
          <div className="search flex items-center h-12 w-[320px] rounded-xl bg-[#262C35] px-4">
            <span className="text-[#FF8000]">⌕</span>
            <input
              type="text"
              placeholder="Search film..."
              className="ml-3 flex-1 bg-transparent outline-none text-white placeholder:text-[#6B7280]"
            />
          </div>

          {/* <!-- Profile --> */}
          <div className="profile flex w-[36px] h-[36px]  bg-[#FF8000] items-center justify-center rounded-full">
            A
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
