import { useAtom } from "jotai";
import { useState } from "react";
import { countrySearchKeywordAtom, selectedRegionAtom } from "@/atom/atom";
import { AiOutlineSearch } from "react-icons/ai";
import { AiOutlineDown } from "react-icons/ai";

const SearchInput = () => {
  const [atom, setAtom] = useAtom<string>(countrySearchKeywordAtom);
  return (
    <div className="flex items-center px-6 py-3 gap-4 bg-white rounded-md shadow-[0_2px_8px_rgba(0,0,0,0.1)]">
      <span>
        <AiOutlineSearch color="hsl(0, 0%, 52%)" />
      </span>
      <input
        placeholder="Search for a country..."
        type="search"
        name="search"
        size={42}
        value={atom}
        onChange={(e) => setAtom(e.target.value)}
      />
    </div>
  );
};

const RegionFilter = () => {
  const regions = ["All", "Africa", "America", "Asia", "Europe", "Oceania"];
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [atom, setAtom] = useAtom<string>(selectedRegionAtom);

  const toggleDropdown = () => {
    setIsOpen((prev) => !prev);
  };

  const handleSelect = (item: string) => {
    setAtom(item);
    setIsOpen(false);
  };

  return (
    <div className="inline-block text-left">
      {/* 필터 드롭다운 */}
      <button
        type="button"
        onClick={toggleDropdown}
        className="h-[48px] inline-flex justify-center items-center text-gray-600 dark:text-white dark:bg-[#1E2028]
        shadow-[0_2px_8px_rgba(0,0,0,0.1)] dark:shadow-[0_2px_8px_rgba(0,0,0,0.3)]
        hover:shadow-[0_4px_12px_rgba(0,0,0,0.15)] dark:hover:shadow-[0_4px_12px_rgba(0,0,0,0.4)]
        transition-all duration-200 focus:outline-none gap-8"
      >
        {atom === "All" ? "Filter by Region" : atom}
        <AiOutlineDown />
      </button>

      {/* Dropdown */}
      {isOpen && (
        <div className="absolute mt-2 w-50">
          <div
            className="relative bg-white dark:bg-[#1E2028] rounded-lg 
            shadow-[0_4px_12px_rgba(0,0,0,0.1),0_2px_4px_rgba(0,0,0,0.05)] 
            dark:shadow-[0_4px_12px_rgba(0,0,0,0.4),0_2px_4px_rgba(0,0,0,0.3)]"
          >
            {regions.map((item, index) => (
              <div
                key={index}
                className="p-2 space-y-1"
                onClick={() => handleSelect(item)}
              >
                <p
                  className="flex items-center px-4 py-3 text-sm text-black dark:text-white rounded-md hover:cursor-pointer
                    hover:bg-gray-50 dark:hover:bg-[#252731] 
                    hover:shadow-[0_2px_8px_rgba(0,0,0,0.05)] dark:hover:shadow-[0_2px_8px_rgba(0,0,0,0.3)]
                    transition-all duration-200"
                >
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default function SearchBox() {
  return (
    <>
      <SearchInput />
      <RegionFilter />
    </>
  );
}
