import FooterIcons from "@/components/FooterIcons";
import FooterMenu from "@/components/FooterMenu";
import Logo from "@/components/layout/Logo";

const Footer = () => {
  return (
    <footer className="flex flex-col items-center p-15 bg-[#90D4C5]">
      <div className="w-[148px] h-[32px] flex justify-center">
        <Logo color="#2B7262" />
      </div>
      <FooterMenu />
      <FooterIcons />
    </footer>
  );
};

export default Footer;
