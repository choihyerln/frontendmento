import LogoImg from "@/assets/images/logo.svg";

export default function Logo() {
  return (
    <a href="/" aria-label="Homepage" className="cursor-pointer">
      <img src={LogoImg} alt="Sunnyside Home" />
    </a>
  );
}
