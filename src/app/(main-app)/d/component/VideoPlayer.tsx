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
            Video đang trong quá trình cập nhật.
          </div>
        );
      case "error":
        return (
          <div className="absolute inset-0 flex items-center justify-center">
            Có lỗi xảy ra khi tải video.
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
    <div>
      {/* Video Player */}
      <div className="relative aspect-video w-full rounded overflow-hidden bg-black">
        {renderVideo()}
      </div>

      {/* Chọn Server */}
      <div className="flex justify-between items-center bg-[rgba(0,0,0,.7)] px-[25px] py-[25px]">
        <div className="text-white text-lg font-semibold ">Chọn server</div>
        <div className="flex justify-end">
          <button className="bg-black  text-[#408BEA] py-1 px-3 rounded text-xs" style={{ border:" solid 1px rgb(255 255 255 / 14%) " }}>
            Report Error
          </button>
        </div>
      </div>
      <div className="border-b-4 border-[rgba(255,255,255,.08)]"></div>
      <div className="bg-[rgba(0,0,0,.7)] p-4 border-b-4 border-[rgba(255,255,255,.08)]">
        <div className="flex flex-col gap-2">
          {serverBtns
            .filter((server, index) => arrLink[index])
            .map((server, index) => (
              <button
                key={server}
                onClick={() => handleChangeServer(server)}
                className={`flex items-center p-3 w-full text-white transition font-bold ${
                  currentServer === server
                    ? "bg-[rgba(255,255,255,.1)] text-white"
                    : " text-gray-400 hover:bg-[#222] hover:text-white"
                }`}
              >
                <span className="flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    className={`w-5 h-5 ${
                      currentServer === server ? "text-white" : "text-gray-500"
                    }`}
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                  Vietsub #{index + 1}
                </span>
              </button>
            ))}
        </div>
        <p className="text-[#FDB813] text-sm mt-2">
          Nếu không xem được vui lòng đổi server #2 hoặc #3 hoặc tải lại trang!
        </p>
      </div>
    </div>
  );
};

export default VideoPlayer;
