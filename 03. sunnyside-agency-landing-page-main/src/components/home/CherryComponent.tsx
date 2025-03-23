import CherryImg from "@/assets/images/desktop/image-graphic-design.jpg";

const Cherry = () => {
  return (
    <div className="relative text-[#234F45]">
      <img src={CherryImg} alt="Cherry image" className="w-full h-full" />
      <div className="absolute inset-0 top-1/2 flex-col p-4 md:p-20 text-darkcyan">
        <h1 className="flex flex-col items-center text-sm md:text-3xl font-fraunces font-bold font-700 ">
          Graphic Design
        </h1>
        <p className="text-xs font-bold pt-5 text-center px-10">
          Great design makes you memorable. We deliver
          <br /> artwork that underscores your brand message
          <br /> and captures potential clients’ attention.
        </p>
      </div>
    </div>
  );
};

export default Cherry;
