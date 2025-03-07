import Header from "@/layout/Header";
import { Outlet } from "react-router-dom";
export default function MainLayout() {
  return (
    <div
      className="w-full h-auto bg-[url(/src/assets/images/desktop/image-header.jpg)] 
                    bg-cover bg-top absolute top-0 left-0"
    >
      <Header />
      <main>
        <Outlet />
      </main>
    </div>
  );
}
