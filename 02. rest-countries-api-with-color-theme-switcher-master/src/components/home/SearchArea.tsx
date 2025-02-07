import SearchBox from "@/components/home/SearchBox";
import FilterBox from "@/components/home/FilterBox";

export default function SearchArea() {
  return (
    <div className="flex justify-between px-15 mb-5">
      <SearchBox />
      <FilterBox />
    </div>
  );
}
