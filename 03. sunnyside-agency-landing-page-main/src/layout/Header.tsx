import Logo from "@/components/layout/Logo";
import NavMenu from "@/components/layout/NavMenu";
import ArrowDownIcon from "@/assets/images/icon-arrow-down.svg";

const Header = () => {
  return (
    <header
      className="w-full h-auto bg-[url(/src/assets/images/desktop/image-header.jpg)] 
    bg-cover bg-top absolute top-0 left-0"
    >
      {/* 상단바 */}
      <nav className="flex justify-between items-center h-30 p-10">
        <a href="/" aria-label="Homepage" className="cursor-pointer">
          <Logo />
        </a>
        <NavMenu />
      </nav>

      <div className="flex flex-col justify-center items-center p-8 mb-70 gap-30">
        <h1 className="uppercase text-white tracking-[0.3em] text-center font-fraunces font-black text-[2.7rem]">
          we are creatives
        </h1>
        <img src={ArrowDownIcon} width={25} />
      </div>
    </header>
  );
};

export default Header;
