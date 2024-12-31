import CategoryHomePage from "./components/Category/component/home";
import MainLayout from "./layouts/MainLayout";

const HomePage = () => {
  return (
    <>
      <MainLayout>
        {/* <Group /> */}
        <CategoryHomePage />
      </MainLayout>
    </>
  );
};

export default HomePage;
