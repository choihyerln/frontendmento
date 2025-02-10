import { useNavigate } from "react-router-dom";
import { IoIosArrowRoundBack } from "react-icons/io";

export default function Back() {
  const navigate = useNavigate();

  return (
    <button
      className="w-[150px] inline-flex justify-center items-center text-gray-600 dark:text-white dark:bg-[#1E2028]
        shadow-[0_2px_8px_rgba(0,0,0,0.15)] dark:shadow-[0_2px_8px_rgba(0,0,0,0.3)]
        hover:shadow-[0_4px_12px_rgba(0,0,0,0.18)] dark:hover:shadow-[0_4px_12px_rgba(0,0,0,0.4)]
        transition-all duration-200 focus:outline-none mb-20 gap-2"
      onClick={() => navigate("/")}
    >
      <span>
        <IoIosArrowRoundBack size={28} />
      </span>
      Back
    </button>
  );
}
