import React from "react";
import MVLink from "../../Location/Link";
import MVImage from "../../MV/IMAGE";

export default function Header() {
  return (
    <div>
      <header className="bg-[#1a1a1a] text-white py-4">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="headerLogo rounded-md">
              <MVLink to={"/"}>
                <MVImage
                  src={"/images/logo.png"}
                  width={160}
                  height={60}
                  alt="Hoạt Hình Trung Quốc"
                  className="w-auto h-10 object-contain"
                />
              </MVLink>
            </div>

            {/* Navigation */}
            <nav className="hidden md:flex space-x-6">
              <MVLink to="/" className="hover:text-yellow-400">
                Trang chủ
              </MVLink>
              <MVLink to="/phim-moi" className="hover:text-yellow-400">
                Phim mới
              </MVLink>
              <MVLink to="/the-loai" className="hover:text-yellow-400">
                Thể loại
              </MVLink>
              <MVLink to="/top-phim" className="hover:text-yellow-400">
                Top phim
              </MVLink>
            </nav>

            {/* Search Bar */}
            <div className="headerSearch relative">
              <input
                type="text"
                placeholder="Tìm kiếm phim..."
                className="bg-[#333] text-white px-4 py-2 rounded-full w-64 focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />
              <button className="absolute right-3 top-1/2 transform -translate-y-1/2">
                <svg
                  className="w-5 h-5 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  ></path>
                </svg>
              </button>
            </div>

            {/* User Actions */}
            <div className="hidden md:flex items-center space-x-4">
              <MVLink to="/dang-nhap" className="hover:text-yellow-400">
                Đăng nhập
              </MVLink>
              <MVLink
                to="/dang-ky"
                className="bg-yellow-400 text-black px-4 py-2 rounded-full hover:bg-yellow-300"
              >
                Đăng ký
              </MVLink>
            </div>

            {/* Mobile Menu Button */}
            <button className="md:hidden">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </header>
    </div>
  );
}
