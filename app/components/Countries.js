"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useRouter } from "next/navigation";

const Countries = ({ keyword }) => {
  const [resp, setResp] = useState([]);
  const { region } = useSelector((state) => state.region);
  const router = useRouter();

  // const base = process.env.BASE_URL;

  const navigateToCountry = (country) => {
    router.push(`/countries/?country=${country}`);
  };

  useEffect(() => {
    const fetchCountries = () => {
      let url = "";

      if (region === "All" || region === "") {
        url = `https://restcountries.com/v3.1/all`;
      } else {
        url = `https://restcountries.com/v3.1/region/${region}`;
      }

      if (keyword && keyword.trim() !== "") {
        url = `https://restcountries.com/v3.1/name/${keyword}`;
      }

      fetch(url)
        .then((res) => {
          if (!res.ok) {
            throw new Error("Failed to fetch data");
          }
          return res.json();
        })
        .then((data) => {
          setResp(data);
        })
        .catch((error) => {
          console.error(error);
        });
    };

    fetchCountries();
  }, [region, keyword]);

  return (
    <div className="px-10 py-5 grid grid-cols-1 gap-y-5 ">
      {resp.map((country, index) => {
        return (
          <div
            key={index}
            className="h-auto w-full rounded-lg flex flex-col shadow-[0px_0px_14px_rgb(0,0,0,.2)] hover:cursor-pointer"
            onClick={() => navigateToCountry(country.name.common)}
          >
            <Image
              src={country.flags.svg}
              alt={country.name.common}
              width={0}
              height={0}
              priority
              className="h-[200px] w-full object-cover rounded-t-lg"
            />

            <div className="p-5 flex flex-col gap-y-2">
              <p className="mb-2 font-bold text-xl">{country.name.common}</p>
              <p className="flex gap-x-1">
                <span className="font-semibold">Population:</span>
                {country.population}
              </p>
              <p className="flex gap-x-1">
                <span className="font-semibold">Region:</span> {country.region}
              </p>
              <p className="flex gap-x-1">
                <span className="font-semibold">Capital:</span>
                {country.capital}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Countries;
