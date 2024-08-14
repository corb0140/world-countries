import { getCountry } from "@/app/actions";
import { useSelector } from "react-redux";

const SearchCountry = () => {
  const { theme } = useSelector((state) => state.theme);

  return (
    <form
      className={`h-[3.5rem] flex items-center gap-x-5 w-full shadow-sm rounded-md px-5 ${
        theme === "light"
          ? "bg-white text-lightModeInput"
          : "bg-darkModeElements"
      }
      `}
      action={getCountry}
    >
      <span className="material-symbols-outlined text-[1.4rem] px-2">
        search
      </span>
      <input
        className="outline-none bg-transparent w-full text-[1rem]"
        type="text"
        placeholder="Search for a country..."
        name="keyword"
      />
    </form>
  );
};

export default SearchCountry;
