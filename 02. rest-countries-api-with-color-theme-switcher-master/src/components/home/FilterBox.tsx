import useRegionsQuery from "@/hooks/useRegionsQuery";
import { Region } from "@/types/Region";

export default function FilterBox() {
  const { data: regions } = useRegionsQuery();
  console.log(regions);

  const toggleDropdown = () => {};

  return (
    <div className="inline-block text-left">
      {/* <!-- Dropdown Button --> */}
      <button
        type="button"
        onClick={toggleDropdown}
        className="inline-flex justify-center items-center  text-sm text-gray-600 dark:text-white bg-white dark:bg-[#1E2028] rounded-sm
        shadow-[0_2px_8px_rgba(0,0,0,0.1)] dark:shadow-[0_2px_8px_rgba(0,0,0,0.3)]
        hover:shadow-[0_4px_12px_rgba(0,0,0,0.15)] dark:hover:shadow-[0_4px_12px_rgba(0,0,0,0.4)]
        transition-all duration-200 focus:outline-none"
      >
        Filter by Region
        <svg
          className="w-4 h-4 ml-2 text-gray-500 dark:text-gray-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M19 9l-7 7-7-7"
          ></path>
        </svg>
      </button>

      {/* Dropdown */}
      <div id="dropdown-menu" className=" absolute right-0 mt-3 w-64">
        {/* <!-- Main Menu Container with Layered Shadows --> */}
        <div
          className="relative bg-white dark:bg-[#1E2028] rounded-lg 
            shadow-[0_4px_12px_rgba(0,0,0,0.1),0_2px_4px_rgba(0,0,0,0.05)] 
            dark:shadow-[0_4px_12px_rgba(0,0,0,0.4),0_2px_4px_rgba(0,0,0,0.3)]"
        >
          {/* Region List */}
          {regions?.map((item: Region) => (
            <div className="p-2 space-y-1">
              <a
                href="#"
                className="flex items-center px-4 py-3 text-sm text-black dark:text-white rounded-md
                    hover:bg-gray-50 dark:hover:bg-[#252731]
                    hover:shadow-[0_2px_8px_rgba(0,0,0,0.05)] dark:hover:shadow-[0_2px_8px_rgba(0,0,0,0.3)]
                    transition-all duration-200"
                role="menuitem"
              >
                {item.region}
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
