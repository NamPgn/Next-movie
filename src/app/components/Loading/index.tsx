import MVImage from "../MV/IMAGE";

const LoadingUsagyuuun = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-800 p-5 rounded-lg shadow-lg">
      <MVImage
        src="/images/loading.heart.gif"
        alt="Loading..."
        className="h-32 w-32 mb-4 animate-bounce"
        width={32}
        height={32}
      />
      <div className="text-white text-xl font-semibold animate-pulse">
        Chờ xíu đang tải....
      </div>
      <p className="text-white text-sm font-medium mt-2 animate-pulse">
        Server cùi nên chờ xíu nha...
      </p>
    </div>
  );
};

export default LoadingUsagyuuun;
