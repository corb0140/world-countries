"use client";

import Header from "@/app/components/Header";
import Filter from "@/app/components/Filter";
import SearchCountry from "@/app/components/SearchCountry";
import Countries from "@/app/components/Countries";
import { useSelector } from "react-redux";

export default function Home({ searchParams }) {
  const { theme } = useSelector((state) => state.theme);
  const keyword = new URLSearchParams(searchParams).get("keyword");

  return (
    <main
      className={`flex min-h-screen flex-col gap-y-14 text-homepageItems ${
        theme === "light" ? "bg-lightModeBg" : "bg-darkModeBg text-white"
      }`}
    >
      <Header />

      <div className="px-4 lg:px-10 flex flex-col gap-y-5 lg:flex-row lg:justify-between">
        <SearchCountry />
        <Filter />
      </div>

      <Countries keyword={keyword} />
    </main>
  );
}
