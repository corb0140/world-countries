"use server";

import { redirect } from "next/navigation";

export async function getCountry(form) {
  "use server";

  const keyword = form.get("keyword");

  redirect(`/?keyword=${keyword}`);
}
