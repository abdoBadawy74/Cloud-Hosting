import AdminSideBar from "./AdminSideBar";

interface AdminDashboardLayoutProps {
  children: React.ReactNode;
}

const AdminDashboardLayout = ({ children }: AdminDashboardLayoutProps) => {
  return (
    <div>
      <div>
        <AdminSideBar />
      </div>
      <div>{children}</div>
    </div>
  );
};

export default AdminDashboardLayout;
