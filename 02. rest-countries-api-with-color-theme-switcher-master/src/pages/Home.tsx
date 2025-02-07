import SearchArea from "@/components/home/SearchArea";
import CountryCardList from "@/components/home/CountryCardList";

export default function Home() {
  return (
    <div className={"w-[1425px] h-[791px] mt-[68px] px-16 py-10"}>
      {/* 검색창 & 필터 */}
      <SearchArea />

      {/* 국가 목록 */}
      <CountryCardList />
    </div>
  );
}
