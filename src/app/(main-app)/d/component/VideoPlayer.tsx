"use client";
import { IProduct } from "@/interfaces/product";
import React, { useEffect, useState } from "react";
import CryptoJS from "crypto-js";
import { serverBtns } from "@/constant";

const VideoPlayer = ({
  getOneProductDetail,
}: {
  getOneProductDetail: IProduct;
}) => {
  const [videoUrl, setVideoUrl] = useState("");
  const [videoStatus, setVideoStatus] = useState("loading");
  const [currentServer, setCurrentServer] = useState("daily");
  const secretKey =
    process.env.NEXT_PUBLIC_SECERT_CRYPTO_KEY_PRODUCTS_DAILYMOTION_SERVER || "";
  const data = CryptoJS.AES.decrypt(
    getOneProductDetail.dailyMotionServer,
    secretKey
  ).toString(CryptoJS.enc.Utf8);
  const handleChangeServer = (serverType: string) => {
    setVideoStatus("loading");
    setCurrentServer(serverType);
    let newUrl = "";
    switch (serverType) {
      case "daily":
        newUrl = getOneProductDetail.dailyMotionServer ? data : "";
        break;
      case "assby":
        newUrl = getOneProductDetail.server2 || "";
        break;
      case "drive":
        if (newUrl == "") {
          setVideoUrl("");
        }
        newUrl = getOneProductDetail.link || "";
        break;
    }

    if (newUrl && newUrl.trim() !== "") {
      setVideoUrl(newUrl);
      setVideoStatus("ready");
    } else {
      setVideoStatus("unavailable");
    }
  };

  useEffect(() => {
    handleChangeServer("daily");
  }, [getOneProductDetail]);
  const renderVideo = () => {
    switch (videoStatus) {
      case "ready":
      case "playing":
        return (
          <iframe
            allowFullScreen
            title="video-player"
            className="absolute inset-0 w-full h-full max-w-full"
            src={videoUrl}
            onLoad={() => setVideoStatus("playing")}
            onError={() => setVideoStatus("error")}
          />
        );
      case "loading":
        return (
          <div className="absolute inset-0 flex items-center justify-center">
            Đang tải video...
          </div>
        );
      case "unavailable":
        return (
          <div className="absolute inset-0 flex items-center justify-center">
            Video đang trong quá trình cập nhật. Vui lòng quay lại sau.
          </div>
        );
      case "error":
        return (
          <div className="absolute inset-0 flex items-center justify-center">
            Có lỗi xảy ra khi tải video. Vui lòng thử lại sau.
          </div>
        );
      default:
        return (
          <iframe
            allowFullScreen
            title="video-player"
            className="absolute inset-0 w-full h-full"
            src={getOneProductDetail.trailer}
          />
        );
    }
  };
  const arrLink = [
    getOneProductDetail.dailyMotionServer,
    getOneProductDetail.server2,
    getOneProductDetail.link,
  ];
  return (
    <>
    {/* Video Player */}
    <div className="relative aspect-video w-full rounded overflow-hidden">
      {renderVideo()}
    </div>
  
    {/* Mẹo và Đổi Server */}
    <div className="p-3 rounded bg-[#272727] mt-4">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
        {/* Mẹo */}
        <span className="text-[#FDB813] text-sm mb-2 sm:mb-0">
          Mẹo: Chọn Server khác khi lỗi!
        </span>
  
        {/* Đổi Server */}
        <div className="flex flex-wrap gap-2">
          {serverBtns
            .filter((server, index) => arrLink[index])
            .map((server, index) => (
              <button
                key={server}
                onClick={() => handleChangeServer(server)}
                className={`px-5 py-3 rounded text-xs transition ${
                  currentServer === server
                    ? "bg-orange-500 text-white"
                    : "bg-gray-900 text-orange-500 hover:bg-gray-700"
                }`}
              >
                Server {index + 1}
              </button>
            ))}
        </div>
        <div className="flex justify-end mt-3">
      <button
        className="flex items-center bg-[#151111] hover:bg-red-500 text-white py-1 px-2 rounded text-xs transition"
        data-modal-toggle="report-modal"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="2"
          stroke="currentColor"
          className="w-4 h-4 mr-1"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        Báo Lỗi
      </button>
    </div>
      </div>
    </div>
  </>
  );
};

export default VideoPlayer;
