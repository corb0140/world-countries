"use client";

import Image from "next/image";
import Header from "@/app/components/Header";
import Button from "@/app/UI/Button";

import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const DetailsPage = ({ country }) => {
  const { theme } = useSelector((state) => state.theme);
  const [resp, setResp] = useState(null);
  const router = useRouter();

  const backToHome = () => {
    router.back();
  };

  useEffect(() => {
    fetch(`https://restcountries.com/v3.1/name/${country}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to fetch data");
        }
        return res.json();
      })
      .then((data) => {
        data.map((data) => {
          if (
            data.cioc === country ||
            data.cca3 === country ||
            data.cca2 === country ||
            data.name.common === country
          ) {
            setResp(data);
          }
        });
      })
      .catch((error) => {
        console.error(error);
        router.push("/not-found");
      });
  }, [country]);

  if (!resp) {
    return null;
  }

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
          click={backToHome}
          style="text-sm"
          span="keyboard_backspace"
        />

        <div className="flex flex-col lg:flex-row gap-y-10 lg:gap-y-0 lg:gap-x-5">
          {/* FLAG */}
          <Image
            src={resp.flags.svg}
            alt={resp.flags.alt}
            width={0}
            height={0}
            priority
            className="h-full w-full"
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
            </div>
          </div>

          {/* BORDER COUNTRIES */}
          <div className="py-5 flex flex-col gap-y-3">
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
                      click={() => router.push(`/countries/?country=${border}`)}
                    />
                  );
                })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsPage;
