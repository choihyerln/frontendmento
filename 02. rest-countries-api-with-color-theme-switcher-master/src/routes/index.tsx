import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainLayout from "@/layout/MainLayout";
import Home from "@/pages/Home.tsx";
import Detail from "@/pages/Detail";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/detail/:name" element={<Detail />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
