import Logo from "@/components/layout/Logo";
import NavMenu from "@/components/layout/NavMenu";

export default function Header() {
  return (
    <header>
      <nav className="flex justify-between items-center h-30 p-10">
        <Logo />
        <NavMenu />
      </nav>
    </header>
  );
}
