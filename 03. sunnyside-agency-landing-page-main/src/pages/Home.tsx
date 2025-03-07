import ArrowDownIcon from "@/assets/images/icon-arrow-down.svg";
export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center p-8 mb-70 gap-30">
      <h1 className="uppercase text-white tracking-[0.3em] text-center font-fraunces font-black text-[2.7rem]">
        we are creatives
      </h1>
      <img className="" src={ArrowDownIcon} width={25} />
    </div>
  );
}
