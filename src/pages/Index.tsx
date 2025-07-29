import { Navigation } from "@/components/Navigation";
import { Sidebar } from "@/components/Sidebar";
import { Feed } from "@/components/Feed";
import { ProtectedRoute } from "@/components/ProtectedRoute";

const Index = () => {
  return (
    <ProtectedRoute>
      <div className="min-h-screen bg-background">
        <Navigation />
        <div className="flex">
          <Sidebar />
          <Feed />
        </div>
      </div>
    </ProtectedRoute>
  );
};

export default Index;
