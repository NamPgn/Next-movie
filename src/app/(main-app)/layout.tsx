import MainLayout from "../mainLayout";
export default function Layout({ children }: any) {
  return (
      <MainLayout>
        {children}
      </MainLayout>
  );
}
