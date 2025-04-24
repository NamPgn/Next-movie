"use client";

import React, { useEffect, useState, useCallback, useMemo } from "react";
import MVLink from "../../Location/Link";
import MVImage from "../../MV/IMAGE";
import { debounce } from "lodash";
import SearchResults from "../../Search";
import { searCategory } from "@/sevices/categorys";
import SearchIcon from "@/assets/icons/search.svg";
import { SEARCH_SUGGEST } from "@/constant";
import Link from "next/link";
import { useSavedStore } from "@/store/use-saved-store";
import { useAuthStore } from "@/store/use-auth-store";
import LoginModal from "../../Auth/LoginModal";
import { useSeries } from "@/hooks/app/series";
import MenuMobile from "@/sections/header/menu-mobile";
import EmployeeBtnLogin from "@/sections/emloyee-btn-login";

const Header: React.FC = () => {
  const [searchValue, setSearchValue] = useState("");
  const [results, setResults] = useState([]);
  const [isFocused, setIsFocused] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showFavorites, setShowFavorites] = useState(false);
  const { data: series, isLoading: seriesLoading } = useSeries();
  const { favorites, initializeFromStorage, handleRemoveFavorite } = useSavedStore();
  const { isLoginModalOpen, openLoginModal, closeLoginModal } = useAuthStore();
  const [showMenu, setShowMenu] = useState(false);
  useEffect(() => {
    initializeFromStorage();
  }, [initializeFromStorage]);

  const debouncedSearch = useMemo(
    () =>
      debounce(async (val: string) => {
        const data = await searCategory(val);
        if (data) setResults(data.data);
      }, 900),
    []
  );

  const handleChange = useCallback(
    (val: string) => {
      setSearchValue(val);
      debouncedSearch(val);
    },
    [debouncedSearch]
  );

  const handleClick = useCallback(() => {
    setSearchValue("");
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    return () => {
      debouncedSearch.cancel();
    };
  }, [debouncedSearch]);


  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
      ? "bg-black/30 backdrop-blur-md shadow-lg"
      : "bg-gradient-to-b from-black/30 to-transparent"
      }`}>
      <div className="container mx-auto px-4 relative">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <MVLink prefetch={false} to="/" aria-label="Trang chủ" className="relative">
              <div className="relative flex items-center gap-2">
                {/* Lá cờ Việt Nam */}
                {/* <div className="relative w-8 h-6 overflow-hidden rounded shadow-lg animate-wave">
                  <div className="absolute inset-0 bg-red-600"></div>
                  <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                    <svg className="w-4 h-4 text-yellow-400" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2l2.4 7.4h7.6l-6.2 4.5 2.4 7.4-6.2-4.5-6.2 4.5 2.4-7.4-6.2-4.5h7.6z"/>
                    </svg>
                  </div>
                </div> */}
                <MVImage
                  src="/images/d4ff6991-55e8-4672-b160-d3986913ccec-Photoroom (1)-min.png"
                  width={100}
                  height={60}
                  alt="Hoạt Hình Trung Quốc"
                  className="h-20 w-auto object-contain"
                />
              </div>
            </MVLink>
          </div>

          <style jsx>{`
            @keyframes wave {
              0% { transform: rotate(-5deg); }
              50% { transform: rotate(5deg); }
              100% { transform: rotate(-5deg); }
            }
            .animate-wave {
              animation: wave 3s ease-in-out infinite;
              transform-origin: bottom center;
            }
          `}</style>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            <Link
              href="/"
              className="px-4 font-semibold py-2 text-sm font-semibold text-gray-300 hover:text-[#FFD875] transition-colors duration-200"
            >
              Trang chủ
            </Link>
            { seriesLoading ? 'Loading...' : series.map((item: any) => (
              <Link
                key={item.id}
                href={`/${item.slug}`}
                className="px-4 py-2 text-sm font-semibold text-gray-300 hover:text-[#FFD875] transition-colors duration-200"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Search Bar */}
          <div className="flex-1 max-w-md mx-4 md:relative">
            <div className="relative">
              <input
                value={searchValue}
                onChange={(e) => handleChange(e.target.value)}
                type="text"
                placeholder="Tìm kiếm phim..."
                className="w-full bg-black/50 text-white px-4 py-2 pl-10 rounded-full border border-gray-700 focus:outline-none focus:border-[#FFD875] focus:ring-1 focus:ring-[#FFD875] transition-all duration-200"
                aria-label="Tìm kiếm phim"
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
              />
              <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
                <SearchIcon className="w-4 h-4 text-gray-400" />
              </div>
            </div>
            <SearchResults
              data={results}
              handleClick={handleClick}
              popularSearches={SEARCH_SUGGEST}
              searchValue={searchValue}
              isFocused={isFocused}
            />
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden p-2 rounded-lg hover:bg-gray-800 transition-colors duration-200" onClick={() => setShowMenu(!showMenu)}>
            <svg
              className="w-6 h-6 text-gray-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>

          {/* Right Side Icons */}
          <div className="flex items-center space-x-4">
            {/* Favorites */}
            <div className="relative">
              <button
                onClick={() => setShowFavorites(!showFavorites)}
                className="p-2 hover:bg-gray-800 rounded-full transition-colors duration-200 relative"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-300 hover:text-[#FFD875]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
                {favorites.length > 0 && (
                  <span className="absolute -top-1 -right-1 bg-[#FFD875] text-black text-xs font-bold rounded-full w-4 h-4 flex items-center justify-center">
                    {favorites.length}
                  </span>
                )}
              </button>

              {/* Favorites Dropdown */}
              {showFavorites && favorites.length > 0 && (
                <div className="absolute right-0 mt-2 w-72 bg-[#1a1a1f] rounded-lg shadow-lg py-2 z-50">
                  <h3 className="px-4 py-2 text-sm font-semibold text-gray-300 border-b border-gray-700">
                    Phim yêu thích ({favorites.length})
                  </h3>
                  <div className="max-h-96 overflow-y-auto">
                    {favorites.map((movie) => (
                      <Link
                        key={movie.id}
                        href={`/d/${movie.id}`}
                        className="flex items-center px-4 py-2 hover:bg-gray-800 transition-colors duration-200 group"
                        onClick={() => setShowFavorites(false)}
                      >
                        <MVImage
                          width={100}
                          height={100}
                          src={movie.thumbnail}
                          alt={movie.name}
                          className="w-10 h-14 object-cover rounded"
                        />
                        <span className="ml-3 flex-1 text-sm text-gray-300 hover:text-[#FFD875]">
                          {movie.name}
                        </span>
                        <button
                          onClick={(e) => {
                            e.preventDefault();
                            e.stopPropagation();
                            handleRemoveFavorite(movie.id);
                          }}
                          className="p-1.5 rounded-full opacity-0 group-hover:opacity-100 hover:bg-red-500/20 transition-all duration-200"
                        >
                          <svg 
                            className="w-4 h-4 text-red-500" 
                            fill="none" 
                            stroke="currentColor" 
                            viewBox="0 0 24 24"
                          >
                            <path 
                              strokeLinecap="round" 
                              strokeLinejoin="round" 
                              strokeWidth={2} 
                              d="M6 18L18 6M6 6l12 12"
                            />
                          </svg>
                        </button>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Member Button */}
            <div className="hidden md:block">
              <EmployeeBtnLogin
                onClick={openLoginModal}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Click outside handler */}
      {showFavorites && (
        <div
          className="fixed inset-0 z-40"
          onClick={() => {
            setShowFavorites(false);
          }}
        />
      )}

      {/* Login Modal */}
      <LoginModal isOpen={isLoginModalOpen} onClose={closeLoginModal} />

      {showMenu && (
        <MenuMobile isOpen={showMenu} onClose={() => setShowMenu(false)} menuItems={series} />
      )}


    </header>
  );
};

export default Header;
