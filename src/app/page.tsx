import Head from "next/head";
import ConfigHomePage from "./pages/Home/Container/Config";

const HomePage = () => {
  return (
    <>
      <Head>
        <title>Hoạt Hình Trung Quốc - Đấu phá thương khung phần 5</title>
        <meta name="description" content="Đấu phá thương khung phần 5" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <ConfigHomePage />;
    </>
  );
};

export default HomePage;
