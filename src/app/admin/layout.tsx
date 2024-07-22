// src/app/admin/layout.tsx
import LayoutAdmin from "@/Layout/Admin";
import PrivateRouter from "@/router/Router-Security";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <PrivateRouter>
      <LayoutAdmin>{children}</LayoutAdmin>
    </PrivateRouter>
  );
}
