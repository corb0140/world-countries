import DetailsPage from "@/app/components/DetailsPage";

export const fetchCache = "force-no-store";

const page = ({ searchParams }) => {
  let country = new URLSearchParams(searchParams).get("country");
  return <DetailsPage country={country} />;
};

export default page;
