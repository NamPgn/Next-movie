import React from "react";

const Group = () => {
  return (
    <div className="mt-2 flex flex-col items-center w-full">
      <div className="bg-gradient-to-r from-gray-800 to-gray-700 shadow-lg rounded-lg p-2 w-full max-w-xs">
        <blockquote className="text-center text-sm font-semibold italic text-orange-400 mb-2">
          Cộng Đồng HH3D
        </blockquote>
        <nav>
          <ul className="flex justify-center items-center gap-3">
            {/* Facebook Icon */}
            <li>
              <a
                href="https://www.facebook.com/phanhhh3d"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Truy cập trang Facebook Cộng đồng Phim"
                className="flex items-center justify-center w-8 h-8 bg-blue-600 rounded-full shadow-md hover:shadow-lg hover:scale-105 transition-transform"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 72 72"
                  fill="none"
                  className="w-4 h-4 text-white"
                >
                  <path
                    d="M46.4927 38.6403L47.7973 30.3588H39.7611V24.9759C39.7611 22.7114 40.883 20.4987 44.4706 20.4987H48.1756V13.4465C46.018 13.1028 43.8378 12.9168 41.6527 12.8901C35.0385 12.8901 30.7204 16.8626 30.7204 24.0442V30.3588H23.3887V38.6403H30.7204V58.671H39.7611V38.6403H46.4927Z"
                    fill="currentColor"
                  />
                </svg>
              </a>
            </li>
            {/* TikTok Icon */}
            <li>
              <a
                href="https://www.tiktok.com/@tieu_loli"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Truy cập trang TikTok Cộng đồng Phim"
                className="flex items-center justify-center w-8 h-8 rounded-full text-white"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="100"
                  height="100"
                  viewBox="0 0 50 50"
                >
                  <path d="M41,4H9C6.243,4,4,6.243,4,9v32c0,2.757,2.243,5,5,5h32c2.757,0,5-2.243,5-5V9C46,6.243,43.757,4,41,4z M37.006,22.323 c-0.227,0.021-0.457,0.035-0.69,0.035c-2.623,0-4.928-1.349-6.269-3.388c0,5.349,0,11.435,0,11.537c0,4.709-3.818,8.527-8.527,8.527 s-8.527-3.818-8.527-8.527s3.818-8.527,8.527-8.527c0.178,0,0.352,0.016,0.527,0.027v4.202c-0.175-0.021-0.347-0.053-0.527-0.053 c-2.404,0-4.352,1.948-4.352,4.352s1.948,4.352,4.352,4.352s4.527-1.894,4.527-4.298c0-0.095,0.042-19.594,0.042-19.594h4.016 c0.378,3.591,3.277,6.425,6.901,6.685V22.323z"></path>
                </svg>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Group;
