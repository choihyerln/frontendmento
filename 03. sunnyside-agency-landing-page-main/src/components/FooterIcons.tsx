import Facebook from "@/assets/images/icon-facebook.svg";
import Instagram from "@/assets/images/icon-instagram.svg";
import Twitter from "@/assets/images/icon-twitter.svg";
import Pinterest from "@/assets/images/icon-pinterest.svg";

const FooterIcons = () => {
  return (
    <div className="flex flex-row pt-20 space-x-6">
      <img src={Facebook} alt="Facebook Icon" className="cursor-pointer duration-200 hover:invert hover:brightness-0" />
      <img
        src={Instagram}
        alt="Instagram Icon"
        className="cursor-pointer duration-200 hover:invert hover:brightness-0"
      />
      <img src={Twitter} alt="Twitter Icon" className="cursor-pointer duration-200 hover:invert hover:brightness-0" />
      <img
        src={Pinterest}
        alt="Pinterest Icon"
        className="cursor-pointer duration-200 hover:invert hover:brightness-0"
      />
    </div>
  );
};

export default FooterIcons;
