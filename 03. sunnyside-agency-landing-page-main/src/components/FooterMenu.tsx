import { Link } from "react-router-dom";

const FooterMenu = () => {
  return (
    <div className="flex items-center space-x-10 mx-10 mt-10 font-barlow font-semibold">
      <Link to="" className="text-md text-[#3D9C89] duration-200 hover:text-white ">
        About
      </Link>
      <Link to="" className="text-md text-[#3D9C89] duration-200 hover:text-white">
        Services
      </Link>
      <Link to="" className="text-md text-[#3D9C89] duration-200 hover:text-white">
        Projects
      </Link>
    </div>
  );
};

export default FooterMenu;
