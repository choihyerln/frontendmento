import Egg from "@/assets/images/desktop/image-transform.jpg";
import Brand from "@/components/home/BrandComponent";
import Cup from "@/assets/images/desktop/image-stand-out.jpg";
import Audience from "@/components/home/AudienceComponent";
import Cherry from "@/components/home/CherryComponent";
import Orange from "@/components/home/OrangeComponent";
import Testimonials from "@/components/home/Testimonials";
import Food from "@/components/home/FoodComponent";

export default function Home() {
  return (
    <div className="mt-182">
      <div className="grid md:grid-cols-2 grid-cols-1">
        <Brand />
        <img src={Egg} alt="Egg" className="w-full h-full" />
        <img src={Cup} alt="Salmon colored cup" className=" w-full h-full" />
        <Audience />
        <Cherry />
        <Orange />
      </div>
      <Testimonials />
      <Food />
    </div>
  );
}
