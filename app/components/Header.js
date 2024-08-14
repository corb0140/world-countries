"use client";

import { useSelector, useDispatch } from "react-redux";
import { setTheme } from "../redux/slices/themeSlice";
import { useRouter } from "next/navigation";

const Header = () => {
  const { theme } = useSelector((state) => state.theme);
  const dispatch = useDispatch();

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    dispatch(setTheme(newTheme));
  };

  const router = useRouter();

  const returnHome = () => {
    router.push("/");
  };

  return (
    <nav
      className={`h-[5rem] w-full flex items-center justify-between px-5 shadow-[0px_3px_12px_rgba(0,0,0,.1)]
      ${
        theme === "light"
          ? "bg-white text-lightModeText"
          : "bg-darkModeElements text-white"
      }`}
    >
      <p className="font-bold hover:cursor-pointer" onClick={returnHome}>
        Where in the world?
      </p>

      <div
        className="flex items-center gap-x-2 hover:cursor-pointer"
        onClick={toggleTheme}
      >
        <span className="material-symbols-outlined text-[1.2rem]">
          dark_mode
        </span>
        <p>Dark Mode</p>
      </div>
    </nav>
  );
};

export default Header;
