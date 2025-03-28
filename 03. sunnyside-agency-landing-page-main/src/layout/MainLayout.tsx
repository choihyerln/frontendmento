import Footer from "@/layout/Footer";
import Header from "@/layout/Header";
import { Outlet } from "react-router-dom";
export default function MainLayout() {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
