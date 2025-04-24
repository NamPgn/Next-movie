"use client";

import React from "react";
import { FaFacebookF, FaYoutube, FaArrowUp, FaTiktok, FaTelegram } from "react-icons/fa";
import MVImage from "../MV/IMAGE";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <footer className="bg-[#1a1a1f] text-white">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <MVImage
                width={150}
                height={150}
                src="/images/d4ff6991-55e8-4672-b160-d3986913ccec-Photoroom (1).png"
                alt="Hoạt Hình Trung Quốc"
                className="h-20 w-auto object-contain"
              />
            </div>
            <p className="text-sm text-gray-400">
              Website xem phim online với giao diện mới được bố trí và thiết kế thân thiện với người dùng. Nguồn phim được tổng hợp từ các website lớn với đa dạng các đầu phim và thể loại vô cùng phong phú.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4 text-[#FFD875]">Liên hệ</h3>
            <ul className="text-sm text-gray-400 space-y-2">
              <li>Email: hoathinh3dchinese@gmail.com</li>
              <li>Telegram: @myang_03</li>
              <li>Facebook: phanhhh3d</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4 text-[#FFD875]">Thể loại</h3>
            <ul className="text-sm text-gray-400 space-y-2">
              <li>Phim Bộ</li>
              <li>Phim Lẻ</li>
              <li>Phim Chiếu Rạp</li>
              <li>Phim Hoạt Hình</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4 text-[#FFD875]">Theo dõi</h3>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/phanhhh3d" className="text-gray-400 hover:text-[#FFD875]">
                <FaFacebookF size={20} />
              </a>
              <a href="https://www.tiktok.com/@tieu_loli" className="text-gray-400 hover:text-[#FFD875]">
                <FaTiktok size={20} />
              </a>
              <a href="https://t.me/myang_03" className="text-gray-400 hover:text-[#FFD875]">
                <FaTelegram size={20} />
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-400">© 2024 Ph Ang</p>
          <button
            onClick={() => scrollToTop()}
            className="mt-4 md:mt-0 bg-[#26262c] hover:bg-[#FFD875] text-white hover:text-black p-3 rounded-full transition-colors"
          >
            <FaArrowUp />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
