import React from "react";

const Group = () => {
  return (
    <div className="mb-2">
      <div className="col-span-12 lg:col-span-3 bg-gradient-to-r flex-auto w-42 h-42 from-gray-800 to-gray-600 dark:from-gray-800 dark:to-gray-700 shadow-lg rounded-lg">
        <div className="md:p-3 p-2 bg-gray-800 rounded-lg shadow-md text-white">
          <header className="">
            <blockquote className="my-2 border-orange-500 pl-4 italic text-lg font-semibold text-center">
              Cộng Đồng Phim
            </blockquote>
          </header>
          <nav>
            <ul className="flex justify-center items-center gap-4">
              <li>
                <a
                  href="https://www.facebook.com/phanhhh3d"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Truy cập trang Facebook Cộng đồng Phim"
                >
                  <button
                    className="w-12 h-12 flex items-center justify-center rounded-full bg-gradient-to-r from-blue-500 to-blue-800 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                    aria-label="Truy cập trang Facebook Cộng đồng Phim"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="28"
                      height="28"
                      viewBox="0 0 72 72"
                      fill="none"
                      className="text-white"
                    >
                      <path
                        d="M46.4927 38.6403L47.7973 30.3588H39.7611V24.9759C39.7611 22.7114 40.883 20.4987 44.4706 20.4987H48.1756V13.4465C46.018 13.1028 43.8378 12.9168 41.6527 12.8901C35.0385 12.8901 30.7204 16.8626 30.7204 24.0442V30.3588H23.3887V38.6403H30.7204V58.671H39.7611V38.6403H46.4927Z"
                        fill="#FFFFFF"
                      />
                    </svg>
                  </button>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Group;
