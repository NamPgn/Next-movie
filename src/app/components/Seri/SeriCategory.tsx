import MVLink from "../Location/Link";
import "./index.css";
const SeriNumberMovie = ({ data, isLoading }: any) => {
  if (isLoading) {
    return <div className="seriLoading">Loading....</div>;
  }
  return (
    <>
      {data.isMovie == "drama" ? (
        <div className="scroll-container">
          <div className="grid grid-cols-4 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {data?.products?.map((item: any) => (
              <MVLink
                prefetch={true}
                to={`/d/${item.slug}`}
                key={item._id}
                className="block text-center"
              >
                <div
                  className={`bg-gray-800 hover:bg-gray-700 py-1 rounded sm:text-sm sm:px-5 sm:py-2 md:text-base md:px-5 md:py-2.5`}
                >
                  {item.seri}
                </div>
              </MVLink>
            ))}
          </div>
        </div>
      ) : (
        <MVLink prefetch={false} to={`/d/${data?.products[0].slug}`}>
          <button className="mt-2 text-xs bg-orange-500 text-white py-2 px-4 rounded-sm font-bold w-full">
            ► Xem phim
          </button>
        </MVLink>
      )}
    </>
  );
};

export default SeriNumberMovie;
