"use client";
import React, { useEffect, useState } from "react";
import MVLink from "../../Location/Link";
import MVImage from "../../MV/IMAGE";
import { debounce } from "lodash";
import SearchResults from "../../Search";
import { searCategory } from "@/sevices/categorys";
import AuthHeader from "./component/auth";
import { isAuthentication } from "../../../../../hook/isGetValue";
import { useAppSelector } from "@/lib/hook";
import { RootState } from "@/lib/store";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";

export default function Header() {
  const { user } = isAuthentication();
  const userInfor = useAppSelector((state: RootState) => state.user);
  const [searchValue, setSearchValue] = useState("");
  const [valueSearch, setvalueSearch] = useState("");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  const [results, setResults] = useState([]);
  const debouncedSearch = debounce(async (val) => {
    const data = await searCategory(val);
    if (data) {
      setResults(data.data);
    }
  }, 100);

  const handleChange = (val: string) => {
    setvalueSearch(val);
    setSearchValue(val);
    debouncedSearch(val);
  };

  const handleClick = () => {
    setSearchValue("");
    setvalueSearch("");
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
        <div className="flex-shrink-0 hidden md:block">
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
          <MVLink
            to="/tien-hiep"
            className="hover:text-gray-400"
            title="Tiên Hiệp"
          >
            Tiên Hiệp
          </MVLink>
        </nav>

        {/* Mobile Navigation Menu */}
        <Sheet >
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
                ></path>
              </svg>
            </button>
          </SheetTrigger>
          <SheetContent className="text-white bg-[#23232a]">
            <SheetHeader>
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
            </SheetHeader>

            <MVLink
              to="/"
              className="block py-2 hover:text-gray-400"
              title="Trang chủ"
            >
              Trang chủ
            </MVLink>
            <MVLink
              to="/tu-tien"
              className="block py-2 hover:text-gray-400"
              title="Tu Tiên"
            >
              Tu Tiên
            </MVLink>
            <MVLink
              to="/ova"
              className="block py-2 hover:text-gray-400"
              title="OVA"
            >
              OVA
            </MVLink>
            <MVLink
              to="/tien-hiep"
              className="block py-2 hover:text-gray-400"
              title="Tiên Hiệp"
            >
              Tiên Hiệp
            </MVLink>
          </SheetContent>
        </Sheet>

        {/* Search Bar */}
        <div className="relative w-full max-w-xs lg:max-w-md mx-4">
          <input
            value={valueSearch}
            onChange={(e) => handleChange(e.target.value)}
            type="text"
            placeholder="Tìm kiếm phim..."
            className="bg-[#333] text-white px-4 py-2 rounded-full w-full focus:outline-none focus:ring-2 focus:ring-yellow-400"
            aria-label="Tìm kiếm phim"
          />
          <SearchResults data={results} handleClick={handleClick} />
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

        {/* Login Button */}
        <AuthHeader userId={user} userInfor={userInfor} />
      </div>
    </header>
  );
}
