import AdminNav from "../components/admin/AdminNav";

export const metadata = {
  title: "La Lionesa Admin",
  description: "La Lionesa Panel de Aminitrador",
};

const AdminLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <AdminNav />
      {children}
    </div>
  );
};

export default AdminLayout;
