import instances from "./intances";

export const getBanners = async () => {
    return await instances.get(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/banners`
    );
  };