import OrangeImg from "@/assets/images/desktop/image-photography.jpg";

const Orange = () => {
  return (
    <div className="relative text-[#1C4E5A]">
      <img src={OrangeImg} alt="Orange image" className="w-full h-full" />
      <div className="absolute inset-0 top-1/2 flex-col p-4 md:p-20 text-darkblue">
        <h1 className="flex flex-col items-center text-sm md:text-3xl font-fraunces font-bold font-700 ">
          Photography
        </h1>
        <p className="font-bold text-xs text-center pt-5 px-10">
          Increase your credibility by getting the most
          <br /> stunning, high-quality photos that improve your
          <br /> business image.
        </p>
      </div>
    </div>
  );
};

export default Orange;
