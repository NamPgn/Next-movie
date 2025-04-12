import MVImage from "../MV/IMAGE";

const LoadingUsagyuuun = () => {
  return (
    <div className="flex flex items-center justify-center h-screen backdrop-blur-sm p-5 rounded-lg shadow-lg">
      <div className=" flex items-center gap-2">
        <MVImage
          src="/images/loading.heart.gif"
          alt=""
          className="h-32 w-32 animate-bounce opacity-80"
          width={32}
          height={32}
        />
        <div className="text-center">
          <div className="text-white/80 text-xl font-semibold animate-pulse">
            Chờ xíu đang tải....
          </div>
          <p className="text-white/70 text-sm font-medium mt-2 animate-pulse">
            Server cùi nên chờ xíu nha...
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoadingUsagyuuun;
