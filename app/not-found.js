"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import Button from "@/app/UI/Button";

const NotFound = () => {
  const router = useRouter();

  const previousPage = () => {
    router.back();
  };
  return (
    <div className="flex flex-col items-center gap-y-10 py-10 w-full h-full">
      <Button text="Back" style="text-sm" click={previousPage} />
      <Image src="/404.jpg" alt="404" width={300} height={300} />
    </div>
  );
};

export default NotFound;
