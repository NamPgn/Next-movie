import MainLayout from "../layouts/MainLayout";

export default function Layout({ children }: any) {
  return (
      <MainLayout>
        {children}
      </MainLayout>
  );
}
