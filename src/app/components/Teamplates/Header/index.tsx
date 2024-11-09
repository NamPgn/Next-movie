"use client";
import React, { useEffect, useState } from "react";
import MVLink from "../../Location/Link";
import MVImage from "../../MV/IMAGE";
import { debounce } from "lodash";
import SearchResults from "../../Search";
import { searCategory } from "@/app/sevices/categorySevices";

export default function Header() {
  const [searchValue, setSearchValue] = useState("");
  const [results, setResults] = useState([]);

  const debouncedSearch = debounce(async (val) => {
    const data = await searCategory(val);
    if (data) {
      setResults(data.data);
    }
  }, 100);

  const handleChange = (val:string) => {
    setSearchValue(val);
    debouncedSearch(val);
  };

  useEffect(() => {
    debouncedSearch(searchValue);
    return () => {
      debouncedSearch.cancel();
    };
  }, [searchValue]);

  return (
    <header className="bg-[#1a1a1a] text-white py-4">
    <div className="container mx-auto px-4 flex items-center justify-between">
      {/* Logo */}
      <div className="flex-shrink-0">
        <MVLink to="/" aria-label="Trang chủ">
          <MVImage
            src="/images/logo.png"
            width={160}
            height={60}
            alt="Hoạt Hình Trung Quốc"
            className="w-auto h-10 object-contain"
          />
        </MVLink>
      </div>

      {/* Navigation Menu */}
      <nav className="hidden lg:flex space-x-6">
        <MVLink to="/" className="hover:text-gray-400" title="Trang chủ">
          Trang chủ
        </MVLink>
        <MVLink to="/tu-tien" className="hover:text-gray-400" title="Tu Tiên">
          Tu Tiên
        </MVLink>
        <MVLink to="/ova" className="hover:text-gray-400" title="OVA">
          OVA
        </MVLink>
        <MVLink to="/tien-hiep" className="hover:text-gray-400" title="Tiên Hiệp">
          Tiên Hiệp
        </MVLink>
      </nav>

      {/* Search Bar */}
      <div className="relative w-full max-w-xs lg:max-w-md mx-4">
        <input
          onChange={(e) => handleChange(e.target.value)}
          type="text"
          placeholder="Tìm kiếm phim..."
          className="bg-[#333] text-white px-4 py-2 rounded-full w-full focus:outline-none focus:ring-2 focus:ring-yellow-400"
          aria-label="Tìm kiếm phim"
        />
        <SearchResults data={results} />
        <button
          className="absolute right-3 top-1/2 transform -translate-y-1/2"
          title="Tìm kiếm"
          aria-label="Tìm kiếm"
        >
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

      {/* Mobile Menu Button */}
      <button className="lg:hidden" title="menu" aria-label="Mở menu">
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
  </header>
  );
}
