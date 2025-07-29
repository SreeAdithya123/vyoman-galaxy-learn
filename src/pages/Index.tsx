import { Navigation } from "@/components/Navigation";
import { Sidebar } from "@/components/Sidebar";
import { Feed } from "@/components/Feed";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div className="flex">
        <Sidebar />
        <Feed />
      </div>
    </div>
  );
};

export default Index;
