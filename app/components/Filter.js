import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useSelector, useDispatch } from "react-redux";
import { setRegion } from "@/app/redux/slices/regionSlice";

const Filter = () => {
  const [showOptions, setShowOptions] = useState(false);
  const { theme } = useSelector((state) => state.theme);
  const { region } = useSelector((state) => state.region);

  const toggleOptions = () => {
    setShowOptions(!showOptions);
  };

  const dispatch = useDispatch();
  const selectRegion = (region) => {
    dispatch(setRegion(region));
    console.log(region);
  };

  const variants = {
    hidden: {
      height: 0,
      opacity: 0,
    },
    visible: {
      height: "auto",
      opacity: 1,
      transition: {
        height: { duration: 0.2 },
        opacity: { duration: 0.2 },
        ease: "linear",
      },
    },
    exit: {
      height: 0,
      opacity: 0,
      transition: {
        height: { duration: 0.5 },
        opacity: { duration: 0.5, delay: 0.5 },
      },
    },
  };

  return (
    <div className="relative">
      <div
        className={`h-[3.5rem] w-2/3 rounded-lg shadow-[0px_0px_10px_rgb(0,0,0,.1)] flex items-center justify-between px-2 
         ${
           theme === "light"
             ? "bg-white text-lightModeText"
             : "bg-darkModeElements text-white"
         }`}
      >
        {region === "All" ? "Filter by Region" : region}
        {showOptions ? (
          <span
            className="material-symbols-outlined hover:cursor-pointer"
            onClick={toggleOptions}
          >
            keyboard_arrow_down
          </span>
        ) : (
          <span
            className="material-symbols-outlined hover:cursor-pointer"
            onClick={toggleOptions}
          >
            keyboard_arrow_up
          </span>
        )}
      </div>

      <AnimatePresence>
        <motion.ul
          variants={variants}
          initial="hidden"
          animate={showOptions ? "visible" : "hidden"}
          exit="exit"
          className={`absolute top-13 mt-2 w-2/3 rounded-lg flex flex-col gap-y-4 p-5 shadow-[0px_0px_16px_rgb(0,0,0,.1)] overflow-hidden
          ${theme === "light" ? "bg-white" : "bg-darkModeElements text-white"}`}
        >
          <li
            className="hover:cursor-pointer"
            onClick={() => {
              selectRegion("All");
              toggleOptions();
            }}
          >
            All
          </li>
          <li
            className="hover:cursor-pointer"
            onClick={() => {
              selectRegion("Africa");
              toggleOptions();
            }}
          >
            Africa
          </li>
          <li
            className="hover:cursor-pointer"
            onClick={() => {
              selectRegion("America");
              toggleOptions();
            }}
          >
            America
          </li>
          <li
            className="hover:cursor-pointer"
            onClick={() => {
              selectRegion("Asia");
              toggleOptions();
            }}
          >
            Asia
          </li>
          <li
            className="hover:cursor-pointer"
            onClick={() => {
              selectRegion("Europe");
              toggleOptions();
            }}
          >
            Europe
          </li>
          <li
            className="hover:cursor-pointer"
            onClick={() => {
              selectRegion("Oceania");
              toggleOptions();
            }}
          >
            Oceania
          </li>
        </motion.ul>
      </AnimatePresence>
    </div>
  );
};

export default Filter;
