import Emily from "@/assets/images/people/image-emily.jpg";
import Thomas from "@/assets/images/people/image-thomas.jpg";
import Jennie from "@/assets/images/people/image-jennie.jpg";

const Testimonials = () => {
  return (
    <div className="flex flex-col p-2 md:p-10">
      <div className="flex items-center justify-center">
        <h1 className="text-[#A8AEB8] font-fraunces font-bold py-10 md:pt-20 md:pb-5 text-lg md:text-xl tracking-[0.3em]">
          CLIENT TESTIMONIALS
        </h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 p-10 md:p-20">
        <div className="flex flex-col items-center p-1 space-y-6">
          <img src={Emily} alt="Emily image" className="rounded-full w-1/4 h1-/4 p-1" />
          <h2 className="font-barlow font-semibold text-md text-[#5C677D] md:p-5 text-center">
            We put our trust in Sunnyside and they delivered, making sure our needs were met and deadlines were always
            hit.
          </h2>
          <div className="flex flex-col items-center">
            <p className="font-fraunces font-bold text-lg text-[hsl(212,27%,19%)] pb-2">Emily R.</p>
            <p className="font-barlow font-semibold text-xs text-[#A8AEB8]">Marketing Director</p>
          </div>
        </div>
        <div className="flex flex-col items-center p-1 space-y-6">
          <img src={Thomas} alt="Thomas image" className="rounded-full w-1/4 h1-/4 p-1" />
          <h2 className="font-barlow font-semibold text-md text-[#5C677D] p-5 text-center">
            Sunnyside’s enthusiasm coupled with their keen interest in our brand’s success made it a satisfying and
            enjoyable experience.
          </h2>
          <div className="flex flex-col items-center">
            <p className="font-fraunces font-bold text-lg text-[hsl(212,27%,19%)] pb-2">Thomas S.</p>
            <p className="font-barlow font-semibold text-xs text-[#A8AEB8]">Chief Operating Officer</p>
          </div>
        </div>
        <div className="flex flex-col items-center p-1 space-y-6">
          <img src={Jennie} alt="Jennie image" className="rounded-full w-1/4 h1-/4 p-1" />
          <h2 className="font-barlow font-semibold text-md text-[#5C677D] p-5 text-center">
            Incredible end result! Our sales increased over 400% when we worked with Sunnyside. Highly recommended!
          </h2>
          <div className="flex flex-col items-center">
            <p className="font-fraunces font-bold text-lg text-[hsl(212,27%,19%)] pb-2">Jennie F.</p>
            <p className="font-barlow font-semibold text-xs text-[#A8AEB8]">Business Owner</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
