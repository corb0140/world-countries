import React from "react";

export default function Button({ text, theme, click, span, style }) {
  return (
    <button
      className={`flex items-center justify-center gap-x-2 p-[.4rem] w-[30%] shadow-[0px_0px_14px_rgb(0,0,0,.2)] ${
        theme === "light"
          ? "bg-lightModeBg text-lightModeText"
          : "bg-darkModeBg text-white"
      }`}
      onClick={click}
    >
      <span className="material-symbols-outlined text-[1.2rem]">{span}</span>
      <p className={`${style}`}>{text}</p>
    </button>
  );
}
