import React from "react";

const Group = () => {
  return (
    <div className="mb-2">
      <div className="col-span-12 lg:col-span-3 bg-gradient-to-r flex-auto w-42 h-42 from-gray-800 to-gray-600 dark:from-gray-800 dark:to-gray-700 shadow-lg rounded-lg">
        <div className="md:p-2 p-1">
          <header className="text-center">
            <h2 className="text-sm text-white dark:text-gray-400">
              Cộng đồng Phim
            </h2>
          </header>
          <nav>
            <ul className="text-lg flex justify-center text-orange-500 capitalize gap-1">
              <li>
                <a
                  href="https://www.facebook.com/phanhhh3d"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Truy cập trang Facebook Cộng đồng Phim"
                >
                  <button
                    className="w-10 h-10 flex items-center justify-center rounded-lg bg-gray-800 shadow-md group transition-all duration-300"
                    aria-label="Truy cập trang Facebook Cộng đồng Phim"
                  >
                    <svg
                      className="transition-all duration-300 group-hover:scale-110"
                      xmlns="http://www.w3.org/2000/svg"
                      width="28"
                      height="28"
                      viewBox="0 0 72 72"
                      fill="none"
                    >
                      <path
                        d="M46.4927 38.6403L47.7973 30.3588H39.7611V24.9759C39.7611 22.7114 40.883 20.4987 44.4706 20.4987H48.1756V13.4465C46.018 13.1028 43.8378 12.9168 41.6527 12.8901C35.0385 12.8901 30.7204 16.8626 30.7204 24.0442V30.3588H23.3887V38.6403H30.7204V58.671H39.7611V38.6403H46.4927Z"
                        fill="#337FFF"
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
