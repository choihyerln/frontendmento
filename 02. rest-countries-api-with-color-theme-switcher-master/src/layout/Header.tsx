import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 z-50 w-screen h-[68px] px-16 bg-white shadow-md shadow-gray-200 flex items-center">
      <Link to={"/"}>
        <h2>Where in the world?</h2>
      </Link>
    </header>
  );
}
