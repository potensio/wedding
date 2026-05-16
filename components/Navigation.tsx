export default function Navigation() {
  return (
    <nav className="z-50 text-white w-full absolute top-0">
      <div className="lg:px-12 flex h-28 max-w-[100rem] mr-auto ml-auto pr-6 pl-6 items-center justify-between">
        {/* Left Links */}
        <div className="hidden lg:flex items-center justify-end space-x-6 xl:space-x-10 w-2/5">
          <a
            href="#"
            className="uppercase hover:text-gray-300 transition-colors whitespace-nowrap text-xs font-thin tracking-[0.2em]"
          >
            Home
          </a>
          <a
            href="#"
            className="text-xs tracking-[0.2em] uppercase font-thin hover:text-gray-300 transition-colors whitespace-nowrap"
          >
            Mini Sessions •
          </a>
          <a
            href="#services"
            className="text-xs tracking-[0.2em] uppercase font-thin hover:text-gray-300 transition-colors whitespace-nowrap"
          >
            Services
          </a>
        </div>

        {/* Center Logo */}
        <div className="flex w-1/5 justify-center">
          <a href="#" className="inline-block hover:opacity-80 transition-opacity">
            <svg
              width="44"
              height="44"
              viewBox="0 0 48 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="21"
                cy="24"
                r="14"
                stroke="white"
                strokeWidth="1.5"
              />
              <circle
                cx="27"
                cy="24"
                r="14"
                stroke="white"
                strokeWidth="1.5"
              />
            </svg>
          </a>
        </div>

        {/* Right Links */}
        <div className="hidden lg:flex xl:space-x-10 w-2/5 space-x-6 items-center justify-start">
          <a
            href="#portfolio"
            className="text-xs tracking-[0.2em] uppercase font-thin hover:text-gray-300 transition-colors whitespace-nowrap"
          >
            Portfolio •
          </a>
          <a
            href="#about"
            className="text-xs tracking-[0.2em] uppercase font-thin hover:text-gray-300 transition-colors whitespace-nowrap"
          >
            About
          </a>
          <a
            href="#inquire"
            className="text-xs tracking-[0.2em] uppercase font-thin hover:text-gray-300 transition-colors whitespace-nowrap"
          >
            Inquire
          </a>
        </div>

        {/* Mobile menu button - Spinning text */}
        <div className="z-40 pointer-events-none lg:right-12 lg:w-40 lg:h-40 opacity-90 mix-blend-difference w-36 h-36 absolute top-[85vh] right-4">
          <svg viewBox="0 0 100 100" className="overflow-visible w-full h-full">
            <g className="animate-spin-slow">
              <path
                id="circlePath-spinning"
                d="M 50,50 m -35,0 a 35,35 0 1,1 70,0 a 35,35 0 1,1 -70,0"
                fill="none"
              />
              <text
                className="uppercase font-thin fill-white tracking-widest"
                style={{ fontSize: "8.5px" }}
              >
                <textPath
                  href="#circlePath-spinning"
                  startOffset="0%"
                  textLength="219"
                  lengthAdjust="spacing"
                >
                  WEDDINGS • FILMS • PHOTOGRAPHY • OCEAN WEST STUDIO •
                </textPath>
              </text>
            </g>
          </svg>
        </div>

        {/* Mobile hamburger */}
        <div className="lg:hidden flex w-2/5 items-center justify-end">
          <button className="flex text-white items-center">
            <iconify-icon icon="solar:hamburger-menu-linear" className="text-3xl" />
          </button>
        </div>
      </div>
    </nav>
  );
}
