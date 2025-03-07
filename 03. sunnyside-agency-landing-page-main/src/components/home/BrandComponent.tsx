const Brand = () => {
  return (
    <div className="w-1/2 p-20 font-fraunces font-black bg-white text-[hsl(212,27%,19%)] h-full flex flex-col justify-center">
      <h1 className="text-4xl mb-4">Transform your brand</h1>
      <p className="font-barlow font-semibold text-[hsl(213,9%,39%)]">
        We are a full-service creative agency specializing in helping brands grow fast. Engage your clients through
        compelling visuals that do most of the marketing for you.
      </p>
      <p
        className="uppercase mt-4 cursor-pointer
           hover:underline hover:decoration-[hsl(51,100%,49%)] hover:decoration-8"
      >
        learn more
      </p>
    </div>
  );
};

export default Brand;
