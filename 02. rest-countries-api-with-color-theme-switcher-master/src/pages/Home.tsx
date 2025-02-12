import CountryCardList from "@/components/home/CountryCardList";
import SearchBox from "@/components/home/SearchBox";

export default function Home() {
  return (
    <div
      className={
        "bg-[hsl(0,0%,98%)] w-[1435px] h-[831px] mt-[68px] px-16 py-10"
      }
    >
      {/* 국가검색 & 지역필터 */}
      <div className="flex justify-between px-16 mb-5">
        <SearchBox />
      </div>

      {/* 국가 목록 */}
      <CountryCardList />
    </div>
  );
}
