import CountryCardList from "@/components/home/CountryCardList";
import FilterBox from "@/components/home/FilterBox";
import SearchBox from "@/components/home/SearchBox";
import { atom, useAtom } from "jotai";

const keywordAtom = atom("");

const Home = () => {
  const [atom, setAtom] = useAtom<string>(keywordAtom);

  return (
    <div className={"w-[1425px] h-[791px] mt-[68px] px-16 py-10"}>
      {/* 검색창 & 필터 */}
      <div className="flex justify-between px-15 mb-5">
        <SearchBox keyword={keywordAtom} />
        <FilterBox />
      </div>

      {/* 국가 목록 */}
      <CountryCardList query={atom} />
    </div>
  );
};

export default Home;
