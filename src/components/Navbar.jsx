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
              <a href="#" className="hover:text-white">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Browse
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Watchlist
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                My Reviews
              </a>
            </li>
          </ul>
        </div>

        {/* <!-- Profile --> */}
        <div className="profile w-[36px] h-[36px] bg-[#FF8000] rounded-full"></div>
      </div>
    </nav>
  );
}

export default Navbar;
