export default function Navbar() {
  return (
    <nav className="bg-blue-700 text-white shadow-md">
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        {/* Logo */}
        <div className="text-xl font-bold hover:bg-[#000000] px-1 rounded-md">
          <a href="/">Zahid Pharmacy Store</a>
        </div>
        {/* Links */}
        <div className="hidden md:flex space-x-6">
          <a className="hover:bg-[#000000] px-3 py-2 rounded-md" href="/">
            Home
          </a>
          <a className="hover:bg-[#000000] px-3 py-2 rounded-md" href="/Login">
            Login Page
          </a>
          <a
            className="hover:bg-[#000000] px-3 py-2 rounded-md"
            href="/Register"
          >
            Register Page
          </a>
          <a
            className="hover:bg-[#000000] px-3 py-2 rounded-md"
            href="/Profile"
          >
            Profile Page
          </a>
        </div>
        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button className="text-white focus:outline-none">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
}
