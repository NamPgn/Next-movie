import React from "react";
import { FaFacebookF, FaYoutube, FaArrowUp, FaTiktok } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#15151b] text-white py-4">
      <div className="container mx-auto flex justify-between items-center px-4">
        <p className="text-sm">© Ph Ang</p>

        <div className="flex items-center gap-3">
  <a href="https://www.facebook.com/phanhhh3d" className="pr-3 border-r border-gray-500">
    <FaFacebookF className="hover:text-gray-400 cursor-pointer" />
  </a>
  <a href="https://www.tiktok.com/@tieu_loli" >
    <FaTiktok className="hover:text-gray-400 cursor-pointer" />
  </a>
</div>

        <button className="bg-gray-700 p-2 rounded-md hover:bg-gray-600">
          <FaArrowUp className="text-white" />
        </button>
      </div>
    </footer>
  );
};

export default Footer;
