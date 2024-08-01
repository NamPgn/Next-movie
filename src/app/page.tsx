import Head from "next/head";
import CategoryHomePage from "./components/Category/component/home";

const HomePage = () => {
  return (
    <div>
      <Head>
        <title>Hoạt Hình Trung Quốc - Đấu phá thương khung phần 5</title>
        <meta name="description" content="Đấu phá thương khung phần 5" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <CategoryHomePage />
    </div>
  );
};

export default HomePage;
