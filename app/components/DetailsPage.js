"use client";

import Image from "next/image";
import Header from "@/app/components/Header";
import Button from "@/app/UI/Button";

import { useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";

const DetailsPage = ({ data, country }) => {
  const { theme } = useSelector((state) => state.theme);
  const [resp, setResp] = useState([]);
  const router = useRouter();

  useEffect(() => {
    data.map((data) => {
      if (
        data.cioc === country ||
        data.cca3 === country ||
        data.cca2 === country ||
        data.name.common.toLowerCase() === country.toLowerCase()
      ) {
        setResp(data);
      }
    });
  }, [country, resp]);

  if (resp.length === 0) {
    return null;
  }

  const previousPage = () => {
    router.back();
  };

  return (
    <div
      className={`flex min-h-screen flex-col gap-y-14 text-detailsPage ${
        theme === "light"
          ? "bg-lightModeBg text-lightMode"
          : "bg-darkModeBg text-white"
      }`}
    >
      <Header />

      <div className="px-7 flex flex-col gap-y-[4rem]">
        {/* BACK */}
        <Button
          text="Back"
          theme={theme}
          click={previousPage}
          style="text-sm"
          width="lg:w-[100px]"
          span="keyboard_backspace"
        />

        <div className="flex flex-col lg:flex-row gap-y-10 lg:gap-y-0 lg:gap-x-20">
          {/* FLAG */}
          <Image
            src={resp.flags.svg}
            alt={resp.flags.alt}
            width={0}
            height={0}
            priority
            className="h-full w-full lg:w-[500px]"
          />

          {/* COUNTRY INFORMATION  */}
          <div className="flex flex-col gap-y-7">
            <p className="text-xl font-bold">{resp.name.common}</p>

            <div className="grid grid-cols-1 gap-y-8 lg:grid-cols-2">
              {/* SECTION 1 INFO */}
              <div className="flex flex-col gap-y-3">
                <p className="flex items-center gap-x-2">
                  <span className="font-semibold">Native Names:</span>
                  <span
                    className={`${
                      theme === "light" ? "text-lightModeText" : "text-white"
                    } text-sm`}
                  >
                    {
                      Object.values(resp.name.nativeName)[
                        Object.values(resp.name.nativeName).length - 1
                      ].common
                    }
                  </span>
                </p>
                <p className="flex items-center gap-x-2">
                  <span className="font-semibold">Population:</span>
                  <span
                    className={`${
                      theme === "light" ? "text-lightModeText" : "text-white"
                    } text-sm`}
                  >
                    {resp.population}
                  </span>
                </p>
                <p className="flex items-center gap-x-2">
                  <span className="font-semibold">Region:</span>
                  <span
                    className={`${
                      theme === "light" ? "text-lightModeText" : "text-white"
                    } text-sm`}
                  >
                    {resp.region}
                  </span>
                </p>
                <p className="flex items-center gap-x-2">
                  <span className="font-semibold">Sub Region:</span>
                  <span
                    className={`${
                      theme === "light" ? "text-lightModeText" : "text-white"
                    } text-sm`}
                  >
                    {resp.subregion}
                  </span>
                </p>
                <p className="flex items-center gap-x-2">
                  <span className="font-semibold">Capital:</span>
                  <span
                    className={`${
                      theme === "light" ? "text-lightModeText" : "text-white"
                    } text-sm`}
                  >
                    {resp.capital[0]}
                  </span>
                </p>
              </div>

              {/* SECTION 2 INFO */}
              <div className="flex flex-col gap-y-3">
                <p className="flex items-center gap-x-2">
                  <span className="font-semibold">Top Level Domain:</span>{" "}
                  <span
                    className={`${
                      theme === "light" ? "text-lightModeText" : "text-white"
                    } text-sm`}
                  >
                    {resp.tld[0]}
                  </span>
                </p>
                <p className="flex items-center gap-x-2">
                  <span className="font-semibold">Currencies:</span>{" "}
                  <span
                    className={`${
                      theme === "light" ? "text-lightModeText" : "text-white"
                    } text-sm`}
                  >
                    {resp.currencies[Object.keys(resp.currencies)[0]].name}
                  </span>
                </p>
                <p className="flex items-center flex-wrap gap-x-2">
                  <span className="font-semibold">Languages:</span>
                  {Object.values(resp.languages).map((lang, index) => {
                    return (
                      <span
                        className={`${
                          theme === "light"
                            ? "text-lightModeText"
                            : "text-white"
                        } text-sm`}
                        key={index}
                      >
                        {lang}
                      </span>
                    );
                  })}
                </p>
              </div>

              {/* BORDER COUNTRIES */}
              <div className="py-5 w-full flex flex-col lg:flex-row lg:gap-x-5 gap-y-3 col-span-2">
                <p className="font-semibold">Border Countries:</p>

                <div className="flex flex-wrap gap-2">
                  {resp.borders &&
                    resp.borders.map((border, index) => {
                      return (
                        <Button
                          key={index}
                          text={border}
                          theme={theme}
                          style="text-[.7rem]"
                          click={() =>
                            router.push(
                              `/countries/${encodeURIComponent(border)}`
                            )
                          }
                        />
                      );
                    })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsPage;
