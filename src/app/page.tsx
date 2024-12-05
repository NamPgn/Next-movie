import CategoryHomePage from "./components/Category/component/home";
import Group from "./components/Internet/Group";
import MainLayout from "./layouts/MainLayout";

const HomePage = () => {
  return (
    <>
      <MainLayout>
        <Group />
        <CategoryHomePage />
      </MainLayout>
    </>
  );
};

export default HomePage;
