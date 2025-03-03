"use client";

import React, { useEffect, useState, useCallback, useMemo } from "react";
import MVLink from "../../Location/Link";
import MVImage from "../../MV/IMAGE";
import { debounce } from "lodash";
import SearchResults from "../../Search";
import { searCategory } from "@/sevices/categorys";
import SearchIcon from "@/assets/icons/search.svg";
import { SEARCH_SUGGEST } from "@/constant";

const Header: React.FC = () => {
  const [searchValue, setSearchValue] = useState("");
  const [results, setResults] = useState([]);
  const [isFocused, setIsFocused] = useState(false);

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
    return () => {
      debouncedSearch.cancel();
    };
  }, [debouncedSearch]);
 
  return (
    <header className="bg-[#1a1a1a] text-white py-4">
      <div className="container mx-auto px-4 flex items-center justify-between  gap-2">
        {/* Logo */}
        <div className="flex-shrink-0 md:block w-20 md:w-40">
          <MVLink prefetch={false} to="/" aria-label="Trang chủ">
            <MVImage
              src="/images/logo.png"
              width={160}
              height={60}
              alt="Hoạt Hình Trung Quốc"
              className="w-auto h-10 object-contain"
            />
          </MVLink>
        </div>

        {/* Mobile Navigation Menu */}
        {/* <Sheet>
          <SheetTrigger asChild>
            <button
              className="lg:hidden"
              title="menu"
              aria-label="Mở menu"
              onClick={toggleMobileMenu}
            >
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
                />
              </svg>
            </button>
          </SheetTrigger>
          <SheetContent className="text-white bg-[#23232a]">
            <SheetHeader>
              <div className="flex-shrink-0">
                <MVLink prefetch={false} to="/" aria-label="Trang chủ">
                  <MVImage
                    src="/images/logo.png"
                    width={160}
                    height={60}
                    alt="Hoạt Hình Trung Quốc"
                    className="w-auto h-10 object-contain"
                  />
                </MVLink>
              </div>
            </SheetHeader>

            {["/", "/tu-tien", "/ova", "/tien-hiep"].map((link, index) => (
              <MVLink
                key={index}
                prefetch={false}
                to={link}
                className="block py-2 hover:text-gray-400"
              >
                {link === "/" ? "Trang chủ" : link.split("/")[1].replace("-", " ")}
              </MVLink>
            ))}
          </SheetContent>
        </Sheet> */}

        {/* Search Bar */}
        <div className="relative w-full max-w-lg lg:max-w-lg ">
          <input
            value={searchValue}
            onChange={(e) => handleChange(e.target.value)}
            type="text"
            placeholder="Tìm kiếm phim..."
            className="bg-[#333] text-white px-4 py-2 rounded-sm w-full focus:outline-none focus:ring-2 focus:ring-yellow-400"
            aria-label="Tìm kiếm phim"
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
          />
          <SearchResults
            data={results}
            handleClick={handleClick}
            popularSearches={SEARCH_SUGGEST}
            searchValue={searchValue}
            isFocused={isFocused}
          />
          <button
            className="absolute right-3 top-1/2 transform -translate-y-1/2"
            title="Tìm kiếm"
            aria-label="Tìm kiếm"
          >
            <SearchIcon className="w-4 h-4" />
          </button>
        </div>

        {/* Login Button */}
        {/* <AuthHeader userId={user} userInfor={userInfor} /> */}
      </div>
    </header>
  );
};

export default Header;
