import { redirect } from "next/navigation";

import DetailsPage from "@/app/components/DetailsPage";

export const fetchCache = "force-no-store";

const page = async ({ params }) => {
  const { country } = params;
  const decodedCountry = decodeURIComponent(country);

  const resp = await fetch(
    `https://restcountries.com/v3.1/name/${decodedCountry}`,
    {
      method: "GET",
    }
  );

  if (!resp.ok) {
    redirect("/not-found");
  }

  const data = await resp.json();

  return <DetailsPage data={data} country={decodedCountry} />;
};

export default page;
