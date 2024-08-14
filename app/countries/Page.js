import DetailsPage from "@/app/components/DetailsPage";

const page = ({ searchParams }) => {
  let country = new URLSearchParams(searchParams).get("country");
  return <DetailsPage country={country} />;
};

export default page;
