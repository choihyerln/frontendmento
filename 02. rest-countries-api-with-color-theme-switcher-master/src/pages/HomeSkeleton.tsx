const HomeSkeleton = () => {
  return (
    <div className="flex justify-center">
      <div className="grid grid-cols-4 gap-15 p-6">
        {Array.from({ length: 8 }).map((_, index) => (
          <div
            key={index}
            className="w-[250px] h-[320px] rounded-md shadow-md bg-[#efefef] shadow-gray-200"
          />
        ))}
      </div>
    </div>
  );
};

export default HomeSkeleton;
