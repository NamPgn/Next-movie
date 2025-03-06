const CommentSection = () => {
    return (
      <div className="bg-[#000] text-white p-4 ">
        <h3 className="text-lg font-semibold border-b border-gray-700 pb-2">
          Bình Luận (0)
        </h3>
        <p className="mt-2 text-sm text-gray-300">
          Vui lòng{" "}
          <a href="/login" className="text-orange-400 hover:underline">
            đăng nhập
          </a>{" "}
          để bình luận
        </p>
        <hr className="border-gray-700 my-4" />
        <p className="text-gray-400 text-center text-sm">không có bình luận</p>
      </div>
    );
  };
  
  export default CommentSection;
  