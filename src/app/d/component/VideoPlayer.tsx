"use client";
import { IProduct } from "@/interfaces/product";
import React, { useEffect, useState } from "react";
import CryptoJS from "crypto-js";
import { serverBtns } from "@/constant";
import LoadingUsagyuuun from "@/app/components/Loading";

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
            className="absolute inset-0 w-full h-full"
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
  if (videoStatus == "loading") {
    return <LoadingUsagyuuun />;
  }
  return (
    <>
      <div className="movie relative aspect-video">{renderVideo()}</div>
      <div className="p-4 rounded-lg bg-gray-900 mt-4">
        <div className="flex flex-col sm:flex-row items-center justify-between">
          <span className="text-orange-500 font-medium mb-2 sm:mb-0 sm:mr-4">
            Đổi Link nếu không xem được:
          </span>
          <div className="flex space-x-2">
            {serverBtns.map((server, index) => (
              <button
                key={server}
                onClick={() => handleChangeServer(server)}
                className={`px-3 py-1 rounded transition duration-300 ease-in-out ${
                  currentServer === server
                    ? "bg-orange-500 text-white"
                    : "bg-gray-800 text-orange-500 hover:bg-gray-700"
                }`}
              >
                Link {index + 1}
              </button>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default VideoPlayer;
