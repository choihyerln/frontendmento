import Egg from "@/assets/images/desktop/image-transform.jpg";
import Brand from "@/components/home/BrandComponent";
import Cup from "@/assets/images/desktop/image-stand-out.jpg";
import Audience from "@/components/home/AudienceComponent";
import Cherry from "@/assets/images/desktop/image-graphic-design.jpg";
import Orange from "@/assets/images/desktop/image-photography.jpg";
import Testimonials from "@/components/home/Testimonials";
import Food from "@/components/home/FoodComponent";

export default function Home() {
  return (
    <>
      <div className="grid md:grid-cols-2 grid-cols-1">
        <Brand />
        <img src={Egg} alt="Egg" className="w-full h-full" />
        <img src={Cup} alt="Salmon colored cup" className=" w-full h-full" />
        <Audience />
        <div className="relative">
          <img src={Cherry} alt="Cherry image" className="w-full h-full" />
          <div className="absolute inset-0 top-1/2 flex-col p-4 md:p-20 text-darkcyan">
            <h1 className="flex flex-col items-center text-sm md:text-3xl font-fraunces font-bold font-700 ">
              Graphic Design
            </h1>
            <p className="text-xs font-bold pt-5 text-center px-10">
              Great design makes you memorable. We deliver artwork that underscores your brand message and captures
              potential clients’ attention.
            </p>
          </div>
        </div>
        <div className="relative">
          <img src={Orange} alt="Orange image" className="w-full h-full" />
          <div className="absolute inset-0 top-1/2 flex-col p-4 md:p-20 text-darkblue">
            <h1 className="flex flex-col items-center text-sm md:text-3xl font-fraunces font-bold font-700 ">
              Photography
            </h1>
            <p className="font-bold text-xs text-center pt-5 px-10">
              Increase your credibility by getting the most stunning, high-quality photos that improve your business
              image.
            </p>
          </div>
        </div>
      </div>

      <Testimonials />
      <Food />
    </>
  );
}
